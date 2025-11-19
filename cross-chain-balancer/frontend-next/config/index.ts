// EVVM Cross-Chain Balancer - Configuration

export const CONFIG = {
    // Reown (WalletConnect) Project ID
    REOWN_PROJECT_ID: 'c41de8a7b636fd7ad1abaf6edd44a18e',

    // Host chain (Ethereum Sepolia)
    NETWORK: {
        chainId: 11155111,
        chainIdHex: '0xaa36a7',
        chainName: 'Ethereum Sepolia',
        rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com',
        explorer: 'https://sepolia.etherscan.io',
        currency: 'ETH'
    },

    // Contratos EVVM deployados en Ethereum Sepolia
    EVVM_A: {
        address: '0xcdFde01B0A41914B076D8aF8f50c4eCbe8E3E639',
        name: 'EVVM-A',
        principalToken: '0x0000000000000000000000000000000000000001'
    },

    EVVM_B: {
        address: '0x4B2CB8a51C8522f18234Aa7b441725106248B432',
        name: 'EVVM-B',
        principalToken: '0x0000000000000000000000000000000000000001'
    },

    // Simplified Balancer Contract (One-step transfers) - DEPLOYED
    BALANCER: {
        address: '0x20492001407c5C2a64D9Aa1c5bA00A2825B75044',
    },

    // ABIs
    ABI: {
        EVVM: [
            "function getBalance(address user, address token) external view returns (uint256)",
            "function addBalance(address user, address token, uint256 amount) external",
            "function pay(address from, address to_address, string memory to_identity, address token, uint256 amount, uint256 priorityFee, uint256 nonce, bool priorityFlag, address executor, bytes memory signature) external",
            "function caPay(address to, address token, uint256 amount) external",
            "function isAddressStaker(address user) external view returns (bool)",
            "function getRewardAmount() external view returns (uint256)"
        ],

        BALANCER: [
            "function directTransferAtoB(address user, uint256 amount, uint256 priorityFee, uint256 nonce, bytes calldata userSignature) external",
            "function directTransferBtoA(address user, uint256 amount, uint256 priorityFee, uint256 nonce, bytes calldata userSignature) external",
            "function getUserNonces(address user) external view returns (uint256 nonceA, uint256 nonceB)",
            "function calculateFee(uint256 amount) external view returns (uint256 fee, uint256 userReceives)",
            "function getBalanceInEVVM(address user, string memory evvm) external view returns (uint256)",
            "function paused() external view returns (bool)",
            "function protocolFee() external view returns (uint256)",
            "function admin() external view returns (address)"
        ]
    },

    // Constantes
    MIN_PRIORITY_FEE: '0.001',
    FISHER_FEE_BPS: 10 // 0.1%
}
