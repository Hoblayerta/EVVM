// EVVM Cross-Chain Balancer - Configuration
// Actualizar con direcciones deployadas

const CONFIG = {
    // Reown (WalletConnect) Project ID
    // Get yours at: https://cloud.reown.com
    REOWN_PROJECT_ID: 'c41de8a7b636fd7ad1abaf6edd44a18e',

    // Host chain (Arbitrum Sepolia)
    NETWORK: {
        chainId: '0x66eee', // 421614 en hex
        chainName: 'Arbitrum Sepolia',
        rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
        explorer: 'https://sepolia.arbiscan.io'
    },

    // Contratos EVVM deployados en Arbitrum Sepolia
    EVVM_A: {
        address: '0x09F862AD8D76054083bDa05BE32e6b305782cD19', // EVVM-A
        name: 'scarf',
        principalToken: '0x0000000000000000000000000000000000000001' // MATE token (EVVM internal)
    },

    EVVM_B: {
        address: '0xA1559Cf40E3f3d8364Aa21c6A2C8014e1e1c3f53', // EVVM-B
        name: 'EVVM-B',
        principalToken: '0x0000000000000000000000000000000000000001' // MATE token (EVVM internal)
    },

    // Contrato Balancer deployado
    BALANCER: {
        address: '0x3277E63bc6Abde65fA4290a5b6fE2b4628d0bc7c',
    },

    // ABIs (versión simplificada, completar según necesites)
    ABI: {
        EVVM: [
            "function getBalance(address user, address token) external view returns (uint256)",
            "function pay(address from, address to_address, string memory to_identity, address token, uint256 amount, uint256 priorityFee, uint256 nonce, bool priorityFlag, address executor, bytes memory signature) external",
            "function caPay(address to, address token, uint256 amount) external",
            "function isAddressStaker(address user) external view returns (bool)",
            "function getRewardAmount() external view returns (uint256)"
        ],

        BALANCER: [
            "function depositToBalancerFromA(address user, uint256 amount, uint256 priorityFee, uint256 nonce, bytes calldata signature) external returns (bytes32 transferId)",
            "function depositToBalancerFromB(address user, uint256 amount, uint256 priorityFee, uint256 nonce, bytes calldata signature) external returns (bytes32 transferId)",
            "function withdrawToUserInB(bytes32 transferId, bytes calldata fisherSignature) external",
            "function withdrawToUserInA(bytes32 transferId, bytes calldata fisherSignature) external",
            "function getTransferAtoB(bytes32 transferId) external view returns (tuple(address user, uint256 amount, uint256 timestamp, uint256 nonce, bool executed, address fisher))",
            "function getTransferBtoA(bytes32 transferId) external view returns (tuple(address user, uint256 amount, uint256 timestamp, uint256 nonce, bool executed, address fisher))",
            "function getTotalLiquidity() external view returns (uint256 inA, uint256 inB)",
            "function noncesA(address user) external view returns (uint256)",
            "function noncesB(address user) external view returns (uint256)",
            "function getFisherPool(address fisher) external view returns (tuple(uint256 liquidityInA, uint256 liquidityInB, uint256 rewardsEarned, uint256 transfersExecuted))"
        ]
    },

    // Constantes
    ETHER_ADDRESS: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    MIN_PRIORITY_FEE: '0.001',
    FISHER_FEE_BPS: 10 // 0.1%
};

// Export para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
