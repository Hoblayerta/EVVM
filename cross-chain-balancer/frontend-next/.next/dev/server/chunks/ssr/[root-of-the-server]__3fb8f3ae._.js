module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/config/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// EVVM Cross-Chain Balancer - Configuration
__turbopack_context__.s([
    "CONFIG",
    ()=>CONFIG
]);
const CONFIG = {
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
        address: '0x20492001407c5C2a64D9Aa1c5bA00A2825B75044'
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
};
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/context/Web3Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Web3ModalProvider",
    ()=>Web3ModalProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit/dist/esm/exports/react.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-adapter-ethers/dist/esm/src/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$networks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit/dist/esm/exports/networks.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/viem/_esm/chains/definitions/sepolia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/config/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Setup queryClient
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
// Get projectId from config
const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].REOWN_PROJECT_ID;
// Create the modal
const metadata = {
    name: 'EVVM Cross-Chain Balancer',
    description: 'Transfer MATE tokens between EVVMs on Ethereum Sepolia',
    url: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '',
    icons: [
        'https://avatars.githubusercontent.com/u/179229932'
    ]
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAppKit"])({
    adapters: [
        new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthersAdapter"]()
    ],
    networks: [
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepolia"]
    ],
    metadata,
    projectId,
    features: {
        analytics: true
    }
});
function Web3ModalProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/context/Web3Modal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3fb8f3ae._.js.map