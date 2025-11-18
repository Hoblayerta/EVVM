// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title EVVM Local Cross-Virtual-Chain Balancer
 * @author EVVM Workshop
 * @notice Balancea MATE tokens entre dos EVVMs deployados en la MISMA host chain
 * @dev Sistema descentralizado para transferir entre EVVM-A y EVVM-B en misma blockchain
 *
 * Caso de uso:
 * - Dos contratos EVVM deployados en Ethereum Sepolia:
 *   -> EVVM-A (0x123...) - Usuario tiene 100 MATE aquí
 *   -> EVVM-B (0x456...) - Usuario quiere retirar aquí
 *
 * Flujo simplificado:
 * 1. Usuario deposita 100 MATE en EVVM-A (firma off-chain)
 * 2. Fisher ejecuta depositFromEVVM_A()
 * 3. Fisher tiene liquidez en EVVM-B
 * 4. Usuario reclama en EVVM-B (firma off-chain)
 * 5. Fisher ejecuta withdrawToEVVM_B()
 * 6. Fisher recibe rewards en ambos lados
 *
 * Arquitectura:
 * - Un solo contrato deployado en la host chain
 * - Interactúa con ambos EVVMs (A y B)
 * - Pool de liquidez descentralizado
 * - Fishers proveen liquidez y ejecutan transfers
 */

interface IEvvm {
    function caPay(address to, address token, uint256 amount) external;
    function isAddressStaker(address addr) external view returns (bool);
    function getRewardAmount() external view returns (uint256);
    function getBalance(address user, address token) external view returns (uint256);
    function pay(
        address from,
        address to_address,
        string memory to_identity,
        address token,
        uint256 amount,
        uint256 priorityFee,
        uint256 nonce,
        bool priorityFlag,
        address executor,
        bytes memory signature
    ) external;
}

contract EVVMLocalBalancer {

    // ============================================
    // STORAGE
    // ============================================

    /// @notice Direcciones de los dos EVVMs
    address public immutable evvmA_Address;
    address public immutable evvmB_Address;

    /// @notice Principal Token (MATE) en cada EVVM
    address public immutable principalTokenA;
    address public immutable principalTokenB;

    /// @notice Dirección especial para Ether en EVVM
    address public constant ETHER_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    /// @notice Fee para fishers (basis points: 10 = 0.1%)
    uint256 public fisherFee = 10; // 0.1%

    /// @notice Priority fee mínimo
    uint256 public minPriorityFee = 0.001 ether;

    /// @notice Admin
    address public admin;

    // ============================================
    // STRUCTS
    // ============================================

    /// @notice Transfer request de A -> B
    struct TransferRequest {
        address user;              // Usuario
        uint256 amount;            // Cantidad
        uint256 timestamp;         // Timestamp
        uint256 nonce;             // Nonce del usuario
        bool executed;             // Si ya se ejecutó
        address fisher;            // Fisher que lo procesa
    }

    /// @notice Pool de liquidez en cada EVVM
    struct LiquidityPool {
        uint256 liquidityInA;      // Liquidez en EVVM-A
        uint256 liquidityInB;      // Liquidez en EVVM-B
        uint256 rewardsEarned;     // Rewards totales
        uint256 transfersExecuted; // Transfers ejecutados
    }

    // ============================================
    // MAPPINGS
    // ============================================

    /// @notice Nonces de usuarios para EVVM-A
    mapping(address => uint256) public noncesA;

    /// @notice Nonces de usuarios para EVVM-B
    mapping(address => uint256) public noncesB;

    /// @notice Transfer requests (A->B)
    mapping(bytes32 => TransferRequest) public transfersAtoB;

    /// @notice Transfer requests (B->A)
    mapping(bytes32 => TransferRequest) public transfersBtoA;

    /// @notice Liquidez por fisher
    mapping(address => LiquidityPool) public fisherPools;

    /// @notice Total liquidez disponible
    uint256 public totalLiquidityA;
    uint256 public totalLiquidityB;

    // ============================================
    // EVENTS
    // ============================================

    event TransferInitiated(
        address indexed user,
        uint256 amount,
        string direction, // "A->B" o "B->A"
        bytes32 indexed transferId
    );

    event TransferExecuted(
        address indexed user,
        address indexed fisher,
        uint256 amount,
        string direction,
        bytes32 indexed transferId
    );

    event LiquidityProvided(
        address indexed fisher,
        uint256 amountA,
        uint256 amountB
    );

    event FisherRewarded(
        address indexed fisher,
        uint256 fee,
        uint256 rewards
    );

    // ============================================
    // CONSTRUCTOR
    // ============================================

    constructor(
        address _evvmA,
        address _evvmB,
        address _principalTokenA,
        address _principalTokenB
    ) {
        evvmA_Address = _evvmA;
        evvmB_Address = _evvmB;
        principalTokenA = _principalTokenA;
        principalTokenB = _principalTokenB;
        admin = msg.sender;
    }

    // ============================================
    // FLUJO A -> B (Usuario tiene tokens en A, quiere en B)
    // ============================================

    /**
     * @notice Paso 1: Usuario deposita en EVVM-A
     * @dev Fisher ejecuta la transacción pay() en EVVM-A
     */
    function depositToBalancerFromA(
        address user,
        uint256 amount,
        uint256 priorityFee,
        uint256 nonce,
        bytes calldata signature
    ) external returns (bytes32 transferId) {
        require(amount > 0, "Amount must be > 0");
        require(nonce == noncesA[user], "Invalid nonce");
        require(priorityFee >= minPriorityFee, "Priority fee too low");

        // Crear transfer ID único
        transferId = keccak256(abi.encodePacked(
            user,
            amount,
            "A->B",
            nonce,
            block.timestamp
        ));

        // Ejecutar pay() en EVVM-A (usuario -> contrato)
        IEvvm(evvmA_Address).pay(
            user,                      // from
            address(this),             // to_address
            "",                        // to_identity (vacío)
            principalTokenA,           // token
            amount,                    // amount
            priorityFee,               // priorityFee
            nonce,                     // nonce
            true,                      // priorityFlag
            msg.sender,                // executor (fisher)
            signature                  // signature
        );

        // Guardar transfer request
        transfersAtoB[transferId] = TransferRequest({
            user: user,
            amount: amount,
            timestamp: block.timestamp,
            nonce: nonce,
            executed: false,
            fisher: msg.sender
        });

        // Incrementar nonce
        noncesA[user]++;

        emit TransferInitiated(user, amount, "A->B", transferId);

        return transferId;
    }

    /**
     * @notice Paso 2: Fisher provee liquidez en EVVM-B y completa el transfer
     * @dev Fisher debe tener liquidez en EVVM-B para ejecutar
     */
    function withdrawToUserInB(
        bytes32 transferId,
        bytes calldata fisherSignature
    ) external {
        TransferRequest storage transfer = transfersAtoB[transferId];

        require(transfer.amount > 0, "Transfer does not exist");
        require(!transfer.executed, "Already executed");
        require(msg.sender == transfer.fisher, "Not the assigned fisher");

        // Verificar que fisher tenga liquidez en B
        LiquidityPool storage pool = fisherPools[msg.sender];
        require(pool.liquidityInB >= transfer.amount, "Insufficient liquidity in B");

        // Calcular amounts
        uint256 fee = (transfer.amount * fisherFee) / 10000;
        uint256 userAmount = transfer.amount - fee;

        // Marcar como ejecutado
        transfer.executed = true;

        // Transferir al usuario en EVVM-B usando caPay (como servicio)
        IEvvm evvmB = IEvvm(evvmB_Address);
        evvmB.caPay(transfer.user, principalTokenB, userAmount);

        // Reducir liquidez del fisher en B
        pool.liquidityInB -= transfer.amount;
        totalLiquidityB -= transfer.amount;

        // Aumentar liquidez del fisher en A (recibió los tokens)
        pool.liquidityInA += transfer.amount;
        totalLiquidityA += transfer.amount;

        // Dar rewards al fisher
        pool.rewardsEarned += fee;
        pool.transfersExecuted++;

        // Dar rewards de EVVM
        rewardFisherFromEVVM(msg.sender, evvmA_Address, principalTokenA);

        emit TransferExecuted(
            transfer.user,
            msg.sender,
            userAmount,
            "A->B",
            transferId
        );
    }

    // ============================================
    // FLUJO B -> A (Usuario tiene tokens en B, quiere en A)
    // ============================================

    /**
     * @notice Paso 1: Usuario deposita en EVVM-B
     */
    function depositToBalancerFromB(
        address user,
        uint256 amount,
        uint256 priorityFee,
        uint256 nonce,
        bytes calldata signature
    ) external returns (bytes32 transferId) {
        require(amount > 0, "Amount must be > 0");
        require(nonce == noncesB[user], "Invalid nonce");
        require(priorityFee >= minPriorityFee, "Priority fee too low");

        transferId = keccak256(abi.encodePacked(
            user,
            amount,
            "B->A",
            nonce,
            block.timestamp
        ));

        // Ejecutar pay() en EVVM-B
        IEvvm(evvmB_Address).pay(
            user,
            address(this),
            "",
            principalTokenB,
            amount,
            priorityFee,
            nonce,
            true,
            msg.sender,
            signature
        );

        transfersBtoA[transferId] = TransferRequest({
            user: user,
            amount: amount,
            timestamp: block.timestamp,
            nonce: nonce,
            executed: false,
            fisher: msg.sender
        });

        noncesB[user]++;

        emit TransferInitiated(user, amount, "B->A", transferId);

        return transferId;
    }

    /**
     * @notice Paso 2: Fisher completa transfer en EVVM-A
     */
    function withdrawToUserInA(
        bytes32 transferId,
        bytes calldata fisherSignature
    ) external {
        TransferRequest storage transfer = transfersBtoA[transferId];

        require(transfer.amount > 0, "Transfer does not exist");
        require(!transfer.executed, "Already executed");
        require(msg.sender == transfer.fisher, "Not the assigned fisher");

        LiquidityPool storage pool = fisherPools[msg.sender];
        require(pool.liquidityInA >= transfer.amount, "Insufficient liquidity in A");

        uint256 fee = (transfer.amount * fisherFee) / 10000;
        uint256 userAmount = transfer.amount - fee;

        transfer.executed = true;

        // Transferir en EVVM-A
        IEvvm evvmA = IEvvm(evvmA_Address);
        evvmA.caPay(transfer.user, principalTokenA, userAmount);

        // Actualizar liquidez
        pool.liquidityInA -= transfer.amount;
        totalLiquidityA -= transfer.amount;
        pool.liquidityInB += transfer.amount;
        totalLiquidityB += transfer.amount;

        pool.rewardsEarned += fee;
        pool.transfersExecuted++;

        rewardFisherFromEVVM(msg.sender, evvmB_Address, principalTokenB);

        emit TransferExecuted(
            transfer.user,
            msg.sender,
            userAmount,
            "B->A",
            transferId
        );
    }

    // ============================================
    // GESTIÓN DE LIQUIDEZ - FISHERS
    // ============================================

    /**
     * @notice Fisher provee liquidez inicial en ambos EVVMs
     * @dev Debe tener balance en ambos EVVMs
     */
    function provideLiquidity(
        uint256 amountA,
        uint256 amountB,
        uint256 nonceA,
        uint256 nonceB,
        bytes calldata signatureA,
        bytes calldata signatureB
    ) external {
        require(amountA > 0 || amountB > 0, "Must provide some liquidity");

        // Transferir desde EVVM-A si hay amount
        if (amountA > 0) {
            IEvvm(evvmA_Address).pay(
                msg.sender,
                address(this),
                "",
                principalTokenA,
                amountA,
                0, // sin priority fee
                nonceA,
                false,
                msg.sender,
                signatureA
            );

            fisherPools[msg.sender].liquidityInA += amountA;
            totalLiquidityA += amountA;
        }

        // Transferir desde EVVM-B si hay amount
        if (amountB > 0) {
            IEvvm(evvmB_Address).pay(
                msg.sender,
                address(this),
                "",
                principalTokenB,
                amountB,
                0,
                nonceB,
                false,
                msg.sender,
                signatureB
            );

            fisherPools[msg.sender].liquidityInB += amountB;
            totalLiquidityB += amountB;
        }

        emit LiquidityProvided(msg.sender, amountA, amountB);
    }

    /**
     * @notice Fisher retira liquidez de un EVVM
     */
    function withdrawLiquidity(
        uint256 amountFromA,
        uint256 amountFromB
    ) external {
        LiquidityPool storage pool = fisherPools[msg.sender];

        // Retirar de A
        if (amountFromA > 0) {
            require(pool.liquidityInA >= amountFromA, "Insufficient in A");

            IEvvm(evvmA_Address).caPay(msg.sender, principalTokenA, amountFromA);

            pool.liquidityInA -= amountFromA;
            totalLiquidityA -= amountFromA;
        }

        // Retirar de B
        if (amountFromB > 0) {
            require(pool.liquidityInB >= amountFromB, "Insufficient in B");

            IEvvm(evvmB_Address).caPay(msg.sender, principalTokenB, amountFromB);

            pool.liquidityInB -= amountFromB;
            totalLiquidityB -= amountFromB;
        }
    }

    /**
     * @notice Fisher reclama rewards acumulados
     */
    function claimRewards() external {
        LiquidityPool storage pool = fisherPools[msg.sender];
        uint256 rewards = pool.rewardsEarned;

        require(rewards > 0, "No rewards");

        pool.rewardsEarned = 0;

        // Dar rewards en principal token A (por defecto)
        IEvvm(evvmA_Address).caPay(msg.sender, principalTokenA, rewards);

        emit FisherRewarded(msg.sender, 0, rewards);
    }

    // ============================================
    // SISTEMA DE REWARDS
    // ============================================

    function rewardFisherFromEVVM(
        address fisher,
        address evvmAddress,
        address principalToken
    ) internal {
        IEvvm evvm = IEvvm(evvmAddress);

        // Si el balancer es staker en ese EVVM
        if (evvm.isAddressStaker(address(this))) {
            uint256 protocolReward = evvm.getRewardAmount() / 2;
            evvm.caPay(fisher, principalToken, protocolReward);

            fisherPools[fisher].rewardsEarned += protocolReward;

            emit FisherRewarded(fisher, 0, protocolReward);
        }
    }

    // ============================================
    // VIEW FUNCTIONS
    // ============================================

    function getTransferAtoB(bytes32 transferId)
        external
        view
        returns (TransferRequest memory)
    {
        return transfersAtoB[transferId];
    }

    function getTransferBtoA(bytes32 transferId)
        external
        view
        returns (TransferRequest memory)
    {
        return transfersBtoA[transferId];
    }

    function getFisherPool(address fisher)
        external
        view
        returns (LiquidityPool memory)
    {
        return fisherPools[fisher];
    }

    function getTotalLiquidity()
        external
        view
        returns (uint256 inA, uint256 inB)
    {
        return (totalLiquidityA, totalLiquidityB);
    }

    // ============================================
    // ADMIN
    // ============================================

    function setFisherFee(uint256 newFee) external {
        require(msg.sender == admin, "Only admin");
        require(newFee <= 100, "Max 1%");
        fisherFee = newFee;
    }
}
