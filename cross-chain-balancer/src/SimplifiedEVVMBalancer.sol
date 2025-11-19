// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Simplified EVVM Cross-Chain Balancer
 * @author EVVM Workshop - Optimized Version
 * @notice Direct transfers between EVVM-A and EVVM-B with automatic execution
 * @dev Much simpler approach - one transaction completes the entire transfer
 */

interface IEvvm {
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

    function caPay(address to, address token, uint256 amount) external;
    function getBalance(address user, address token) external view returns (uint256);
}

contract SimplifiedEVVMBalancer {

    // ============================================
    // STORAGE
    // ============================================

    address public immutable evvmA_Address;
    address public immutable evvmB_Address;
    address public immutable principalTokenA;
    address public immutable principalTokenB;

    /// @notice Fee for protocol (basis points: 10 = 0.1%)
    uint256 public protocolFee = 50; // 0.5%

    /// @notice Admin
    address public admin;

    /// @notice Emergency pause
    bool public paused = false;

    // Nonces for users
    mapping(address => uint256) public noncesA;
    mapping(address => uint256) public noncesB;

    // Events
    event DirectTransfer(
        address indexed user,
        uint256 amount,
        string direction,
        uint256 fee,
        address executor
    );

    event ProtocolFeeCollected(uint256 amount);

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
    // DIRECT TRANSFER A -> B
    // ============================================

    /**
     * @notice Direct transfer from EVVM-A to EVVM-B
     * @dev Single transaction completes the entire cross-chain transfer
     */
    function directTransferAtoB(
        address user,
        uint256 amount,
        uint256 priorityFee,
        uint256 nonce,
        bytes calldata userSignature
    ) external {
        require(!paused, "Contract paused");
        require(amount > 0, "Amount must be > 0");
        require(nonce == noncesA[user], "Invalid nonce for A");

        // Calculate fees
        uint256 protocolFeeAmount = (amount * protocolFee) / 10000;
        uint256 userReceives = amount - protocolFeeAmount;

        // Step 1: Take tokens from user in EVVM-A
        IEvvm(evvmA_Address).pay(
            user,                      // from
            address(this),             // to_address (balancer contract)
            "",                        // to_identity
            principalTokenA,           // token
            amount,                    // amount
            priorityFee,               // priorityFee
            nonce,                     // nonce
            true,                      // priorityFlag
            address(0),                // executor (allow any)
            userSignature              // signature
        );

        // Step 2: Immediately send tokens to user in EVVM-B
        IEvvm(evvmB_Address).caPay(user, principalTokenB, userReceives);

        // Step 3: Keep protocol fee in EVVM-A (can be withdrawn by admin later)

        // Increment nonce
        noncesA[user]++;

        emit DirectTransfer(user, amount, "A->B", protocolFeeAmount, msg.sender);
    }

    // ============================================
    // DIRECT TRANSFER B -> A
    // ============================================

    /**
     * @notice Direct transfer from EVVM-B to EVVM-A
     * @dev Single transaction completes the entire cross-chain transfer
     */
    function directTransferBtoA(
        address user,
        uint256 amount,
        uint256 priorityFee,
        uint256 nonce,
        bytes calldata userSignature
    ) external {
        require(!paused, "Contract paused");
        require(amount > 0, "Amount must be > 0");
        require(nonce == noncesB[user], "Invalid nonce for B");

        uint256 protocolFeeAmount = (amount * protocolFee) / 10000;
        uint256 userReceives = amount - protocolFeeAmount;

        // Step 1: Take tokens from user in EVVM-B
        IEvvm(evvmB_Address).pay(
            user,
            address(this),
            "",
            principalTokenB,
            amount,
            priorityFee,
            nonce,
            true,
            address(0),
            userSignature
        );

        // Step 2: Send tokens to user in EVVM-A
        IEvvm(evvmA_Address).caPay(user, principalTokenA, userReceives);

        noncesB[user]++;

        emit DirectTransfer(user, amount, "B->A", protocolFeeAmount, msg.sender);
    }

    // ============================================
    // ADMIN FUNCTIONS
    // ============================================

    function setProtocolFee(uint256 newFee) external {
        require(msg.sender == admin, "Only admin");
        require(newFee <= 1000, "Max 10%"); // Max 10%
        protocolFee = newFee;
    }

    function setPaused(bool _paused) external {
        require(msg.sender == admin, "Only admin");
        paused = _paused;
    }

    function withdrawProtocolFees(uint256 amountFromA, uint256 amountFromB) external {
        require(msg.sender == admin, "Only admin");

        if (amountFromA > 0) {
            IEvvm(evvmA_Address).caPay(admin, principalTokenA, amountFromA);
        }

        if (amountFromB > 0) {
            IEvvm(evvmB_Address).caPay(admin, principalTokenB, amountFromB);
        }

        emit ProtocolFeeCollected(amountFromA + amountFromB);
    }

    // ============================================
    // VIEW FUNCTIONS
    // ============================================

    function getBalanceInEVVM(address user, string memory evvm)
        external
        view
        returns (uint256)
    {
        if (keccak256(bytes(evvm)) == keccak256(bytes("A"))) {
            return IEvvm(evvmA_Address).getBalance(user, principalTokenA);
        } else {
            return IEvvm(evvmB_Address).getBalance(user, principalTokenB);
        }
    }

    function getUserNonces(address user)
        external
        view
        returns (uint256 nonceA, uint256 nonceB)
    {
        return (noncesA[user], noncesB[user]);
    }

    function calculateFee(uint256 amount)
        external
        view
        returns (uint256 fee, uint256 userReceives)
    {
        fee = (amount * protocolFee) / 10000;
        userReceives = amount - fee;
    }
}