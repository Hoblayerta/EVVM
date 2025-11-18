(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ConstantsUtil = {
    WC_NAME_SUFFIX: '.reown.id',
    WC_NAME_SUFFIX_LEGACY: '.wcn.id',
    BLOCKCHAIN_API_RPC_URL: 'https://rpc.walletconnect.org',
    PULSE_API_URL: 'https://pulse.walletconnect.org',
    W3M_API_URL: 'https://api.web3modal.org',
    CONNECTOR_ID: {
        WALLET_CONNECT: 'walletConnect',
        INJECTED: 'injected',
        WALLET_STANDARD: 'announced',
        COINBASE: 'coinbaseWallet',
        COINBASE_SDK: 'coinbaseWalletSDK',
        BASE_ACCOUNT: 'baseAccount',
        SAFE: 'safe',
        LEDGER: 'ledger',
        OKX: 'okx',
        EIP6963: 'eip6963',
        AUTH: 'AUTH'
    },
    CONNECTOR_NAMES: {
        AUTH: 'Auth'
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: [
        'eip155',
        'solana'
    ],
    LIMITS: {
        PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
        EVM: 'eip155',
        SOLANA: 'solana',
        POLKADOT: 'polkadot',
        BITCOIN: 'bip122',
        TON: 'ton'
    },
    CHAIN_NAME_MAP: {
        eip155: 'EVM Networks',
        solana: 'Solana',
        polkadot: 'Polkadot',
        bip122: 'Bitcoin',
        cosmos: 'Cosmos',
        sui: 'Sui',
        stacks: 'Stacks',
        ton: 'TON'
    },
    ADAPTER_TYPES: {
        BITCOIN: 'bitcoin',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5',
        TON: 'ton'
    },
    USDT_CONTRACT_ADDRESSES: [
        '0xdac17f958d2ee523a2206206994597c13d831ec7',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
        '0x919C1c267BC06a7039e03fcc2eF738525769109c',
        '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
        '0x55d398326f99059fF775485246999027B3197955',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
    ],
    SOLANA_SPL_TOKEN_ADDRESSES: {
        SOL: 'So11111111111111111111111111111111111111112'
    },
    HTTP_STATUS_CODES: {
        SERVER_ERROR: 500,
        TOO_MANY_REQUESTS: 429,
        SERVICE_UNAVAILABLE: 503,
        FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: 'Unknown Network',
    SECURE_SITE_SDK_ORIGIN: (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org',
    REMOTE_FEATURES_ALERTS: {
        MULTI_WALLET_NOT_ENABLED: {
            DEFAULT: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.'
            },
            CONNECTIONS_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.'
            },
            CONNECTION_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.'
            }
        }
    },
    IS_DEVELOPMENT: typeof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development',
    DEFAULT_ALLOWED_ANCESTORS: [
        'http://localhost:*',
        'https://localhost:*',
        'http://127.0.0.1:*',
        'https://127.0.0.1:*',
        'https://*.pages.dev',
        'https://*.vercel.app',
        'https://*.ngrok-free.app',
        'https://secure-mobile.walletconnect.com',
        'https://secure-mobile.walletconnect.org'
    ]
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeLocalStorage",
    ()=>SafeLocalStorage,
    "SafeLocalStorageKeys",
    ()=>SafeLocalStorageKeys,
    "getSafeConnectorIdKey",
    ()=>getSafeConnectorIdKey,
    "isSafe",
    ()=>isSafe
]);
const SafeLocalStorageKeys = {
    WALLET_ID: '@appkit/wallet_id',
    WALLET_NAME: '@appkit/wallet_name',
    SOLANA_WALLET: '@appkit/solana_wallet',
    SOLANA_CAIP_CHAIN: '@appkit/solana_caip_chain',
    ACTIVE_CAIP_NETWORK_ID: '@appkit/active_caip_network_id',
    CONNECTED_SOCIAL: '@appkit/connected_social',
    CONNECTED_SOCIAL_USERNAME: '@appkit-wallet/SOCIAL_USERNAME',
    RECENT_WALLETS: '@appkit/recent_wallets',
    RECENT_WALLET: '@appkit/recent_wallet',
    DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
    ACTIVE_NAMESPACE: '@appkit/active_namespace',
    CONNECTED_NAMESPACES: '@appkit/connected_namespaces',
    CONNECTION_STATUS: '@appkit/connection_status',
    SIWX_AUTH_TOKEN: '@appkit/siwx-auth-token',
    SIWX_NONCE_TOKEN: '@appkit/siwx-nonce-token',
    TELEGRAM_SOCIAL_PROVIDER: '@appkit/social_provider',
    NATIVE_BALANCE_CACHE: '@appkit/native_balance_cache',
    PORTFOLIO_CACHE: '@appkit/portfolio_cache',
    ENS_CACHE: '@appkit/ens_cache',
    IDENTITY_CACHE: '@appkit/identity_cache',
    PREFERRED_ACCOUNT_TYPES: '@appkit/preferred_account_types',
    CONNECTIONS: '@appkit/connections',
    DISCONNECTED_CONNECTOR_IDS: '@appkit/disconnected_connector_ids',
    HISTORY_TRANSACTIONS_CACHE: '@appkit/history_transactions_cache',
    TOKEN_PRICE_CACHE: '@appkit/token_price_cache',
    RECENT_EMAILS: '@appkit/recent_emails',
    LATEST_APPKIT_VERSION: '@appkit/latest_version',
    TON_WALLETS_CACHE: '@appkit/ton_wallets_cache'
};
function getSafeConnectorIdKey(namespace) {
    if (!namespace) {
        throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
    }
    return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
    setItem (key, value) {
        if (isSafe() && value !== undefined) {
            localStorage.setItem(key, value);
        }
    },
    getItem (key) {
        if (isSafe()) {
            return localStorage.getItem(key) || undefined;
        }
        return undefined;
    },
    removeItem (key) {
        if (isSafe()) {
            localStorage.removeItem(key);
        }
    },
    clear () {
        if (isSafe()) {
            localStorage.clear();
        }
    }
};
function isSafe() {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
} //# sourceMappingURL=SafeLocalStorage.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_NAMESPACES",
    ()=>AVAILABLE_NAMESPACES,
    "NetworkUtil",
    ()=>NetworkUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const NetworkUtil = {
    caipNetworkIdToNumber (caipnetworkId) {
        return caipnetworkId ? Number(caipnetworkId.split(':')[1]) : undefined;
    },
    parseEvmChainId (chainId) {
        return typeof chainId === 'string' ? this.caipNetworkIdToNumber(chainId) : chainId;
    },
    getNetworksByNamespace (networks, namespace) {
        return networks?.filter((network)=>network.chainNamespace === namespace) || [];
    },
    getFirstNetworkByNamespace (networks, namespace) {
        return this.getNetworksByNamespace(networks, namespace)[0];
    },
    getNetworkNameByCaipNetworkId (caipNetworks, caipNetworkId) {
        if (!caipNetworkId) {
            return undefined;
        }
        const caipNetwork = caipNetworks.find((network)=>network.caipNetworkId === caipNetworkId);
        if (caipNetwork) {
            return caipNetwork.name;
        }
        const [namespace] = caipNetworkId.split(':');
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP?.[namespace] || undefined;
    }
};
const AVAILABLE_NAMESPACES = [
    'eip155',
    'solana',
    'polkadot',
    'bip122',
    'cosmos',
    'sui',
    'stacks'
]; //# sourceMappingURL=NetworkUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseUtil",
    ()=>ParseUtil
]);
const ParseUtil = {
    validateCaipAddress (address) {
        if (address.split(':')?.length !== 3) {
            throw new Error('Invalid CAIP Address');
        }
        return address;
    },
    parseCaipAddress (caipAddress) {
        const parts = caipAddress.split(':');
        if (parts.length !== 3) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        const [chainNamespace, chainId, address] = parts;
        if (!chainNamespace || !chainId || !address) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId,
            address
        };
    },
    parseCaipNetworkId (caipNetworkId) {
        const parts = caipNetworkId.split(':');
        if (parts.length !== 2) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        const [chainNamespace, chainId] = parts;
        if (!chainNamespace || !chainId) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId
        };
    }
}; //# sourceMappingURL=ParseUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getW3mThemeVariables",
    ()=>getW3mThemeVariables
]);
function getW3mThemeVariables(themeVariables, themeType) {
    const accent = themeVariables?.['--apkt-accent'] ?? themeVariables?.['--w3m-accent'];
    if (themeType === 'light') {
        return {
            '--w3m-accent': accent || 'hsla(231, 100%, 70%, 1)',
            '--w3m-background': '#fff'
        };
    }
    return {
        '--w3m-accent': accent || 'hsla(230, 100%, 67%, 1)',
        '--w3m-background': '#202020'
    };
} //# sourceMappingURL=ThemeUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorUtil",
    ()=>ErrorUtil,
    "ProviderRpcError",
    ()=>ProviderRpcError,
    "UserRejectedRequestError",
    ()=>UserRejectedRequestError
]);
const ErrorUtil = {
    RPC_ERROR_CODE: {
        USER_REJECTED_REQUEST: 4001,
        USER_REJECTED_METHODS: 5002,
        USER_REJECTED: 5000
    },
    PROVIDER_RPC_ERROR_NAME: {
        PROVIDER_RPC: 'ProviderRpcError',
        USER_REJECTED_REQUEST: 'UserRejectedRequestError'
    },
    isRpcProviderError (error) {
        try {
            if (typeof error === 'object' && error !== null) {
                const objErr = error;
                const hasMessage = typeof objErr['message'] === 'string';
                const hasCode = typeof objErr['code'] === 'number';
                return hasMessage && hasCode;
            }
            return false;
        } catch  {
            return false;
        }
    },
    isUserRejectedMessage (message) {
        return message.toLowerCase().includes('user rejected') || message.toLowerCase().includes('user cancelled') || message.toLowerCase().includes('user canceled');
    },
    isUserRejectedRequestError (error) {
        if (ErrorUtil.isRpcProviderError(error)) {
            const isUserRejectedCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST;
            const isUserRejectedMethodsCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
            return isUserRejectedCode || isUserRejectedMethodsCode || ErrorUtil.isUserRejectedMessage(error.message);
        }
        if (error instanceof Error) {
            return ErrorUtil.isUserRejectedMessage(error.message);
        }
        return false;
    }
};
class ProviderRpcError extends Error {
    constructor(cause, options){
        super(options.message, {
            cause
        });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC;
        this.code = options.code;
    }
}
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
            message: 'User rejected the request'
        });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
} //# sourceMappingURL=ErrorUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberUtil",
    ()=>NumberUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/big.js/big.mjs [app-client] (ecmascript)");
;
const NumberUtil = {
    bigNumber (value) {
        if (!value) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](value);
    },
    multiply (a, b) {
        if (a === undefined || b === undefined) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        }
        const aBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](a);
        const bBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](b);
        return aBigNumber.times(bBigNumber);
    },
    toFixed (value, decimals = 2) {
        if (value === undefined || value === '') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0).toFixed(decimals);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](value).toFixed(decimals);
    },
    formatNumberToLocalString (value, decimals = 2) {
        if (value === undefined || value === '') {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals,
                roundingMode: 'floor'
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals,
            roundingMode: 'floor'
        });
    },
    parseLocalStringToNumber (value) {
        if (value === undefined || value === '') {
            return 0;
        }
        const sanitizedValue = value.replace(/,/gu, '');
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](sanitizedValue).toNumber();
    }
}; //# sourceMappingURL=NumberUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "erc20ABI",
    ()=>erc20ABI
]);
const erc20ABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_from',
                type: 'address'
            },
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=erc20.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "swapABI",
    ()=>swapABI
]);
const swapABI = [
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=swap.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usdtABI",
    ()=>usdtABI
]);
const usdtABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=usdt.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractUtil",
    ()=>ContractUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
;
const ContractUtil = {
    getERC20Abi: (tokenAddress)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdtABI"];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20ABI"];
    },
    getSwapAbi: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swapABI"]
}; //# sourceMappingURL=ContractUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateUtil",
    ()=>DateUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/dayjs/locale/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/dayjs/plugin/relativeTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/dayjs/plugin/updateLocale.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const localeObject = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    name: 'en-web3-modal',
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: '%d sec',
        m: '1 min',
        mm: '%d min',
        h: '1 hr',
        hh: '%d hrs',
        d: '1 d',
        dd: '%d d',
        M: '1 mo',
        MM: '%d mo',
        y: '1 yr',
        yy: '%d yr'
    }
};
const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].locale('en-web3-modal', localeObject);
const DateUtil = {
    getMonthNameByIndex (monthIndex) {
        return MONTH_NAMES[monthIndex];
    },
    getYear (date = new Date().toISOString()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).year();
    },
    getRelativeDateFromNow (date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).locale('en-web3-modal').fromNow(true);
    },
    formatDate (date, format = 'DD MMM') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format(format);
    }
}; //# sourceMappingURL=DateUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/NavigationUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationUtil",
    ()=>NavigationUtil
]);
const NavigationUtil = {
    URLS: {
        FAQ: 'https://walletconnect.com/faq'
    }
}; //# sourceMappingURL=NavigationUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorUtil",
    ()=>ErrorUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
const abortController = new AbortController();
const ErrorUtil = {
    EmbeddedWalletAbortController: abortController,
    /**
     * Universal Provider errors. Make sure the `message` is matching with the errors thrown by the Universal Provider.
     * We use the `alertErrorKey` to map the error to the correct AppKit alert error.
     */ UniversalProviderErrors: {
        UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: 'Unauthorized: origin not allowed',
            alertErrorKey: 'ORIGIN_NOT_ALLOWED'
        },
        JWT_VALIDATION_ERROR: {
            message: 'JWT validation error: JWT Token is not yet valid',
            alertErrorKey: 'JWT_TOKEN_NOT_VALID'
        },
        INVALID_KEY: {
            message: 'Unauthorized: invalid key',
            alertErrorKey: 'INVALID_PROJECT_ID'
        }
    },
    ALERT_ERRORS: {
        SWITCH_NETWORK_NOT_FOUND: {
            code: 'APKT001',
            displayMessage: 'Network Not Found',
            debugMessage: 'The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration.'
        },
        ORIGIN_NOT_ALLOWED: {
            code: 'APKT002',
            displayMessage: 'Invalid App Configuration',
            debugMessage: ()=>`The origin ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafe"])() ? window.origin : 'unknown'} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId}]`
        },
        IFRAME_LOAD_FAILED: {
            code: 'APKT003',
            displayMessage: 'Network Error: Wallet Load Failed',
            debugMessage: ()=>'Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists.'
        },
        IFRAME_REQUEST_TIMEOUT: {
            code: 'APKT004',
            displayMessage: 'Wallet Request Timeout',
            debugMessage: ()=>'The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists.'
        },
        UNVERIFIED_DOMAIN: {
            code: 'APKT005',
            displayMessage: 'Unverified Domain',
            debugMessage: ()=>'Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com.'
        },
        JWT_TOKEN_NOT_VALID: {
            code: 'APKT006',
            displayMessage: 'Session Expired',
            debugMessage: 'Your session is invalid or expired. Please check your system’s date and time settings, then reconnect.'
        },
        INVALID_PROJECT_ID: {
            code: 'APKT007',
            displayMessage: 'Invalid Project ID',
            debugMessage: 'The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID.'
        },
        PROJECT_ID_NOT_CONFIGURED: {
            code: 'APKT008',
            displayMessage: 'Project ID Missing',
            debugMessage: 'No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com.'
        },
        SERVER_ERROR_APP_CONFIGURATION: {
            code: 'APKT009',
            displayMessage: 'Server Error',
            debugMessage: (errorMessage)=>`Unable to fetch App Configuration. ${errorMessage}. Please check your network connection and try again shortly. Contact support if the issue persists.`
        },
        RATE_LIMITED_APP_CONFIGURATION: {
            code: 'APKT010',
            displayMessage: 'Rate Limited',
            debugMessage: 'You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists.'
        }
    },
    ALERT_WARNINGS: {
        LOCAL_CONFIGURATION_IGNORED: {
            debugMessage: (warningMessage)=>`[Reown Config Notice] ${warningMessage}`
        },
        INACTIVE_NAMESPACE_NOT_CONNECTED: {
            code: 'APKTW001',
            displayMessage: 'Inactive Namespace Not Connected',
            debugMessage: (namespace, errorMessage)=>`An error occurred while connecting an inactive namespace ${namespace}: "${errorMessage}"`
        },
        INVALID_EMAIL: {
            code: 'APKTW002',
            displayMessage: 'Invalid Email Address',
            debugMessage: 'Please enter a valid email address'
        }
    }
}; //# sourceMappingURL=ErrorUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const ConstantsUtil = {
    /* Connector names */ METMASK_CONNECTOR_NAME: 'MetaMask',
    TRUST_CONNECTOR_NAME: 'Trust Wallet',
    SOLFLARE_CONNECTOR_NAME: 'Solflare',
    PHANTOM_CONNECTOR_NAME: 'Phantom',
    COIN98_CONNECTOR_NAME: 'Coin98',
    MAGIC_EDEN_CONNECTOR_NAME: 'Magic Eden',
    BACKPACK_CONNECTOR_NAME: 'Backpack',
    BITGET_CONNECTOR_NAME: 'Bitget Wallet',
    FRONTIER_CONNECTOR_NAME: 'Frontier',
    XVERSE_CONNECTOR_NAME: 'Xverse Wallet',
    LEATHER_CONNECTOR_NAME: 'Leather',
    OKX_CONNECTOR_NAME: 'OKX Wallet',
    BINANCE_CONNECTOR_NAME: 'Binance Wallet',
    EIP155: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM,
    ADD_CHAIN_METHOD: 'wallet_addEthereumChain',
    EIP6963_ANNOUNCE_EVENT: 'eip6963:announceProvider',
    EIP6963_REQUEST_EVENT: 'eip6963:requestProvider',
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet',
        coinbaseWalletSDK: 'com.coinbase.wallet'
    },
    CONNECTOR_TYPE_EXTERNAL: 'EXTERNAL',
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH',
    CONNECTOR_TYPE_MULTI_CHAIN: 'MULTI_CHAIN',
    CONNECTOR_TYPE_W3M_AUTH: 'AUTH',
    getSDKVersionWarningMessage (currentVersion, latestVersion) {
        return `
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${currentVersion} is outdated. Latest version is ${latestVersion}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`;
    }
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpersUtil",
    ()=>HelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
const HelpersUtil = {
    getCaipTokens (tokens) {
        if (!tokens) {
            return undefined;
        }
        const caipTokens = {};
        Object.entries(tokens).forEach(([id, token])=>{
            caipTokens[`${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${id}`] = token;
        });
        return caipTokens;
    },
    isLowerCaseMatch (str1, str2) {
        return str1?.toLowerCase() === str2?.toLowerCase();
    },
    /**
     * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
     * @returns ChainNamespace | undefined
     */ getActiveNamespaceConnectedToAuth () {
        const activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(chain) === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH && chain === activeChain);
    },
    /**
     * Runs a condition function again and again until it returns true or the max number of tries is reached.
     *
     * @param conditionFn - A function (can be async) that returns true when the condition is met.
     * @param intervalMs - Time to wait between tries, in milliseconds.
     * @param maxRetries - Maximum number of times to try before stopping.
     * @returns A Promise that resolves to true if the condition becomes true in time, or false if it doesn't.
     */ withRetry ({ conditionFn, intervalMs, maxRetries }) {
        let attempts = 0;
        return new Promise((resolve)=>{
            async function tryCheck() {
                attempts += 1;
                const isConditionMet = await conditionFn();
                if (isConditionMet) {
                    return resolve(true);
                }
                if (attempts >= maxRetries) {
                    return resolve(false);
                }
                setTimeout(tryCheck, intervalMs);
                return null;
            }
            tryCheck();
        });
    },
    /**
     * Returns the chain namespace from user's chainId which is returned from Auth provider.
     * @param chainId - The chainId to parse.
     * @returns The chain namespace.
     */ userChainIdToChainNamespace (chainId) {
        if (typeof chainId === 'number') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
        }
        const [namespace] = chainId.split(':');
        return namespace;
    },
    /**
     * Get all auth namespaces except the active one
     * @param activeNamespace - The active namespace
     * @returns All auth namespaces except the active one
     */ getOtherAuthNamespaces (activeNamespace) {
        if (!activeNamespace) {
            return [];
        }
        const authNamespaces = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS;
        const otherAuthNamespaces = authNamespaces.filter((ns)=>ns !== activeNamespace);
        return otherAuthNamespaces;
    },
    /**
     * Gets the storage info for a connector
     * @param connectorId - The ID of the connector
     * @param namespace - The namespace of the connector
     * @returns
     */ getConnectorStorageInfo (connectorId, namespace) {
        const storageConnectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnections();
        const storageConnections = storageConnectionsByNamespace[namespace] ?? [];
        return {
            hasDisconnected: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].isConnectorDisconnected(connectorId, namespace),
            hasConnected: storageConnections.some((c)=>HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId))
        };
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetsUtil",
    ()=>PresetsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
;
;
const PresetsUtil = {
    ConnectorExplorerIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.OKX]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        /* Connector names */ [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].METMASK_CONNECTOR_NAME]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].TRUST_CONNECTOR_NAME]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SOLFLARE_CONNECTOR_NAME]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].PHANTOM_CONNECTOR_NAME]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COIN98_CONNECTOR_NAME]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].MAGIC_EDEN_CONNECTOR_NAME]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BACKPACK_CONNECTOR_NAME]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BITGET_CONNECTOR_NAME]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].FRONTIER_CONNECTOR_NAME]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].XVERSE_CONNECTOR_NAME]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].LEATHER_CONNECTOR_NAME]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].OKX_CONNECTOR_NAME]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BINANCE_CONNECTOR_NAME]: '2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25'
    },
    NetworkImageIds: {
        // Ethereum
        1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        // Arbitrum
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        // Avalanche
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        // Binance Smart Chain
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        // Fantom
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        // Optimism
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        // Polygon
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        // Mantle
        5000: 'e86fae9b-b770-4eea-e520-150e12c81100',
        // Hedera Mainnet
        295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
        // Sepolia
        11_155_111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
        // Base Sepolia
        84532: 'a18a7ecd-e307-4360-4746-283182228e00',
        // Unichain Sepolia
        1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
        // Unichain Mainnet
        130: '2257980a-3463-48c6-cbac-a42d2a956e00',
        // Monad Testnet
        10_143: '0a728e83-bacb-46db-7844-948f05434900',
        // Gnosis
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        // EVMos
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        // ZkSync
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        // Filecoin
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        // Iotx
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        // Metis,
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        // Moonbeam
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        // Moonriver
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        // Zora
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        // Celo
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        // Base
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        // Aurora
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        // Ronin Mainnet
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        // Saigon Testnet (a.k.a. Ronin)
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        // Berachain Mainnet
        80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
        // Abstract Mainnet
        2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
        // Solana networks
        '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        // Bitcoin
        '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
        // Bitcoin Testnet
        '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200',
        // Bitcoin Signet
        '00000008819873e925422c1ff0f99f7c': 'b3406e4a-bbfc-44fb-e3a6-89673c78b700',
        // TON
        '-239': '20f673c0-095e-49b2-07cf-eb5049dcf600',
        // TON Testnet
        '-3': '20f673c0-095e-49b2-07cf-eb5049dcf600'
    },
    ConnectorImageIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'bba2c8be-7fd1-463e-42b1-796ecb0ad200',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'Base Account',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: 'Ledger',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: 'Safe'
    },
    ConnectorTypesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'INJECTED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH]: 'AUTH',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_AUTH]: 'AUTH'
    },
    WalletConnectRpcChainIds: [
        // Ethereum
        1,
        // Ethereum Goerli
        5,
        // Ethereum Sepolia
        11155111,
        // Optimism
        10,
        // Optimism Goerli
        420,
        // Arbitrum
        42161,
        // Arbitrum Goerli
        421613,
        // Polygon
        137,
        // Polygon Mumbai
        80001,
        // Celo Mainnet
        42220,
        // Aurora
        1313161554,
        // Aurora Testnet
        1313161555,
        // Binance Smart Chain
        56,
        // Binance Smart Chain Testnet
        97,
        // Avalanche C-Chain
        43114,
        // Avalanche Fuji Testnet
        43113,
        // Gnosis Chain
        100,
        // Base
        8453,
        // Base Goerli
        84531,
        // Zora
        7777777,
        // Zora Goerli
        999,
        // ZkSync Era Mainnet
        324,
        // ZkSync Era Testnet
        280
    ]
}; //# sourceMappingURL=PresetsUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaipNetworksUtil",
    ()=>CaipNetworksUtil,
    "getBlockchainApiRpcUrl",
    ()=>getBlockchainApiRpcUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/viem/_esm/clients/transports/fallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
;
;
;
;
const RPC_URL_HOST = 'rpc.walletconnect.org';
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
    const url = new URL('https://rpc.walletconnect.org/v1/');
    url.searchParams.set('chainId', caipNetworkId);
    url.searchParams.set('projectId', projectId);
    return url.toString();
}
const WC_HTTP_RPC_SUPPORTED_CHAINS = [
    'near:mainnet',
    'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    'eip155:1101',
    'eip155:56',
    'eip155:42161',
    'eip155:7777777',
    'eip155:59144',
    'eip155:324',
    'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    'eip155:5000',
    'solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz',
    'eip155:80084',
    'eip155:5003',
    'eip155:100',
    'eip155:8453',
    'eip155:42220',
    'eip155:1313161555',
    'eip155:17000',
    'eip155:1',
    'eip155:300',
    'eip155:1313161554',
    'eip155:1329',
    'eip155:84532',
    'eip155:421614',
    'eip155:11155111',
    'eip155:8217',
    'eip155:43114',
    'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    'eip155:999999999',
    'eip155:11155420',
    'eip155:80002',
    'eip155:97',
    'eip155:43113',
    'eip155:137',
    'eip155:10',
    'eip155:1301',
    'eip155:80094',
    'eip155:80069',
    'eip155:560048',
    'eip155:31',
    'eip155:2818',
    'eip155:57054',
    'eip155:911867',
    'eip155:534351',
    'eip155:1112',
    'eip155:534352',
    'eip155:1111',
    'eip155:146',
    'eip155:130',
    'eip155:1284',
    'eip155:30',
    'eip155:2810',
    'bip122:000000000019d6689c085ae165831e93',
    'bip122:000000000933ea01ad0ee984209779ba'
];
const CaipNetworksUtil = {
    /**
     * Extends the RPC URL with the project ID if the RPC URL is a Reown URL
     * @param rpcUrl - The RPC URL to extend
     * @param projectId - The project ID to extend the RPC URL with
     * @returns The extended RPC URL
     */ extendRpcUrlWithProjectId (rpcUrl, projectId) {
        let isReownUrl = false;
        try {
            const url = new URL(rpcUrl);
            isReownUrl = url.host === RPC_URL_HOST;
        } catch (e) {
            isReownUrl = false;
        }
        if (isReownUrl) {
            const url = new URL(rpcUrl);
            if (!url.searchParams.has('projectId')) {
                url.searchParams.set('projectId', projectId);
            }
            return url.toString();
        }
        return rpcUrl;
    },
    isCaipNetwork (network) {
        return 'chainNamespace' in network && 'caipNetworkId' in network;
    },
    getChainNamespace (network) {
        if (this.isCaipNetwork(network)) {
            return network.chainNamespace;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
    },
    getCaipNetworkId (network) {
        if (this.isCaipNetwork(network)) {
            return network.caipNetworkId;
        }
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM}:${network.id}`;
    },
    // eslint-disable-next-line max-params
    getDefaultRpcUrl (caipNetwork, caipNetworkId, projectId) {
        const defaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) {
            return getBlockchainApiRpcUrl(caipNetworkId, projectId);
        }
        return defaultRpcUrl || '';
    },
    /**
     * Extends the CaipNetwork object with the image ID and image URL if the image ID is not provided
     * @param params - The parameters object
     * @param params.caipNetwork - The CaipNetwork object to extend
     * @param params.networkImageIds - The network image IDs
     * @param params.customNetworkImageUrls - The custom network image URLs
     * @param params.projectId - The project ID
     * @param params.customRpc - Boolean to indicate if the custom RPC URL should be used
     * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
     * @returns The extended array of CaipNetwork objects
     */ extendCaipNetwork (caipNetwork, { customNetworkImageUrls, projectId, customRpcUrls }) {
        const chainNamespace = this.getChainNamespace(caipNetwork);
        const caipNetworkId = this.getCaipNetworkId(caipNetwork);
        const networkDefaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
        const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
        const chainDefaultRpcUrl = caipNetwork?.rpcUrls?.['chainDefault']?.http?.[0] || networkDefaultRpcUrl;
        const customRpcUrlsOfNetwork = customRpcUrls?.[caipNetworkId]?.map((i)=>i.url) || [];
        const rpcUrls = [
            ...customRpcUrlsOfNetwork,
            ...reownRpcUrl ? [
                reownRpcUrl
            ] : []
        ];
        const rpcUrlsWithoutReown = [
            ...customRpcUrlsOfNetwork
        ];
        if (chainDefaultRpcUrl && !rpcUrlsWithoutReown.includes(chainDefaultRpcUrl)) {
            rpcUrlsWithoutReown.push(chainDefaultRpcUrl);
        }
        return {
            ...caipNetwork,
            chainNamespace,
            caipNetworkId,
            assets: {
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].NetworkImageIds[caipNetwork.id],
                imageUrl: customNetworkImageUrls?.[caipNetwork.id]
            },
            rpcUrls: {
                ...caipNetwork.rpcUrls,
                default: {
                    http: rpcUrls
                },
                // Save the networks original RPC URL default
                chainDefault: {
                    http: rpcUrlsWithoutReown
                }
            }
        };
    },
    /**
     * Extends the array of CaipNetwork objects with the image ID and image URL if the image ID is not provided
     * @param caipNetworks - The array of CaipNetwork objects to extend
     * @param params - The parameters object
     * @param params.networkImageIds - The network image IDs
     * @param params.customNetworkImageUrls - The custom network image URLs
     * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
     * @param params.projectId - The project ID
     * @returns The extended array of CaipNetwork objects
     */ extendCaipNetworks (caipNetworks, { customNetworkImageUrls, projectId, customRpcUrls }) {
        return caipNetworks.map((caipNetwork)=>CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
                customNetworkImageUrls,
                customRpcUrls,
                projectId
            }));
    },
    getViemTransport (caipNetwork, projectId, customRpcUrls) {
        const transports = [];
        // Add custom RPC URLs
        customRpcUrls?.forEach((rpcUrl)=>{
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(rpcUrl.url, rpcUrl.config));
        });
        // Add Reown RPC URL
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
                /*
                 * The Blockchain API uses "Content-Type: text/plain" to avoid OPTIONS preflight requests
                 * It will only work for viem >= 2.17.7
                 */ fetchOptions: {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }
            }));
        }
        // Add original fallback transports
        caipNetwork?.rpcUrls?.default?.http?.forEach((rpcUrl)=>{
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(rpcUrl));
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])(transports);
    },
    extendWagmiTransports (caipNetwork, projectId, transport) {
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])([
                transport,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(reownRpcUrl)
            ]);
        }
        return transport;
    },
    /**
     * Generates the unsupported network object with the given CaipNetwork ID
     * @param caipNetworkId - The CAIP network ID
     * @returns The unsupported CAIP network object
     */ getUnsupportedNetwork (caipNetworkId) {
        return {
            id: caipNetworkId.split(':')[1],
            caipNetworkId,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].UNSUPPORTED_NETWORK_NAME,
            chainNamespace: caipNetworkId.split(':')[0],
            nativeCurrency: {
                name: '',
                decimals: 0,
                symbol: ''
            },
            rpcUrls: {
                default: {
                    http: []
                }
            }
        };
    },
    /**
     * Gets the CaipNetwork object from the storage if `@appkit/active_caip_network_id` is being set
     * @returns CaipNetwork or undefined
     */ getCaipNetworkFromStorage (defaultCaipNetwork) {
        const caipNetworkIdFromStorage = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getActiveCaipNetworkId();
        const caipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const availableNamespaces = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains?.keys() || []);
        const namespace = caipNetworkIdFromStorage?.split(':')[0];
        const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
        const caipNetwork = caipNetworks?.find((cn)=>cn.caipNetworkId === caipNetworkIdFromStorage);
        const isUnsupportedNetwork = isNamespaceAvailable && !caipNetwork && caipNetworkIdFromStorage;
        if (isUnsupportedNetwork) {
            return this.getUnsupportedNetwork(caipNetworkIdFromStorage);
        }
        if (caipNetwork) {
            return caipNetwork;
        }
        if (defaultCaipNetwork) {
            return defaultCaipNetwork;
        }
        return caipNetworks?.[0];
    }
}; //# sourceMappingURL=CaipNetworkUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/LoggerUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoggerUtil",
    ()=>LoggerUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>");
;
const LoggerUtil = {
    createLogger (onError, level = 'error') {
        const loggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level
        });
        const { logger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: loggerOptions
        });
        logger.error = (...args)=>{
            for (const arg of args){
                if (arg instanceof Error) {
                    onError(arg, ...args);
                    return;
                }
            }
            onError(undefined, ...args);
        };
        return logger;
    }
}; //# sourceMappingURL=LoggerUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/TokenUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenUtil",
    ()=>TokenUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ExchangeUtil.js [app-client] (ecmascript)");
;
const TokenUtil = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
        USDC: {
            8453: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUSDC"].asset,
            84532: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepoliaUSDC"].asset
        }
    },
    getTokenSymbolByAddress (tokenAddress) {
        if (!tokenAddress) {
            return undefined;
        }
        const [symbol] = Object.entries(TokenUtil.TOKEN_ADDRESSES_BY_SYMBOL).find(([_, addressesByChain])=>Object.values(addressesByChain).includes(tokenAddress)) ?? [];
        return symbol;
    }
}; //# sourceMappingURL=TokenUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EthersProvider",
    ()=>EthersProvider
]);
class EthersProvider {
    constructor(){
        this.initialized = false;
    }
    async getProvider() {
        return Promise.resolve(this.provider);
    }
} //# sourceMappingURL=EthersProvider.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/BaseProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseProvider",
    ()=>BaseProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersProvider.js [app-client] (ecmascript)");
;
;
class BaseProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersProvider"] {
    async initialize() {
        const caipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworks();
        const { metadata, coinbasePreference } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        try {
            const { createBaseAccountSDK } = await __turbopack_context__.A("[project]/frutero/evvm/cross-chain-balancer/node_modules/@base-org/account/dist/index.js [app-client] (ecmascript, async loader)");
            if (typeof window === 'undefined') {
                return Promise.resolve();
            }
            const baseAccountSdk = createBaseAccountSDK({
                appName: metadata?.name,
                appLogoUrl: metadata?.icons[0],
                appChainIds: caipNetworks?.map((caipNetwork)=>caipNetwork.id) || [
                    1,
                    84532
                ],
                preference: {
                    options: coinbasePreference ?? 'all'
                }
            });
            this.provider = baseAccountSdk.getProvider();
            this.initialized = true;
            return Promise.resolve();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to import Coinbase Wallet SDK:', error);
            return Promise.resolve();
        }
    }
    async getProvider() {
        return Promise.resolve(this.provider);
    }
} //# sourceMappingURL=BaseProvider.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersHelpersUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EthersHelpersUtil",
    ()=>EthersHelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
;
const EthersHelpersUtil = {
    hexStringToNumber (value) {
        const string = value.startsWith('0x') ? value.slice(2) : value;
        const number = parseInt(string, 16);
        return number;
    },
    numberToHexString (value) {
        return `0x${value.toString(16)}`;
    },
    async getUserInfo (provider) {
        const [addresses, chainId] = await Promise.all([
            EthersHelpersUtil.getAddresses(provider),
            EthersHelpersUtil.getChainId(provider)
        ]);
        return {
            chainId,
            addresses
        };
    },
    async getChainId (provider) {
        const chainId = await provider.request({
            method: 'eth_chainId'
        });
        return Number(chainId);
    },
    async getAddress (provider) {
        const [address] = await provider.request({
            method: 'eth_accounts'
        });
        return address;
    },
    async getAddresses (provider) {
        const addresses = await provider.request({
            method: 'eth_accounts'
        });
        return addresses;
    },
    async addEthereumChain (provider, caipNetwork) {
        const rpcUrls = caipNetwork.rpcUrls['chainDefault']?.http || [];
        await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: EthersHelpersUtil.numberToHexString(caipNetwork.id),
                    rpcUrls: [
                        ...rpcUrls
                    ],
                    chainName: caipNetwork.name,
                    nativeCurrency: {
                        name: caipNetwork.nativeCurrency.name,
                        decimals: caipNetwork.nativeCurrency.decimals,
                        symbol: caipNetwork.nativeCurrency.symbol
                    },
                    blockExplorerUrls: [
                        caipNetwork.blockExplorers?.default.url
                    ],
                    iconUrls: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].NetworkImageIds[caipNetwork.id]
                    ]
                }
            ]
        });
    }
}; //# sourceMappingURL=EthersHelpersUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/InjectedProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InjectedProvider",
    ()=>InjectedProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersProvider.js [app-client] (ecmascript)");
;
class InjectedProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersProvider"] {
    async initialize() {
        if (typeof window === 'undefined') {
            return undefined;
        }
        if (!window.ethereum) {
            return undefined;
        }
        this.provider = window.ethereum;
        this.initialized = true;
        return Promise.resolve();
    }
} //# sourceMappingURL=InjectedProvider.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/SafeProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable max-classes-per-file */ __turbopack_context__.s([
    "SafeProvider",
    ()=>SafeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@safe-global/safe-apps-provider/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersProvider.js [app-client] (ecmascript)");
;
;
class _SafeProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeAppProvider"] {
    // Safe Provider doesn't support eth_requestAccounts, so we need to override the request method
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request(request) {
        if (request.method === 'eth_requestAccounts') {
            return this.request({
                method: 'eth_accounts',
                params: []
            });
        }
        return super.request(request);
    }
}
class SafeProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersProvider"] {
    async initialize() {
        const { default: SafeAppsSDK } = await __turbopack_context__.A("[project]/frutero/evvm/cross-chain-balancer/node_modules/@safe-global/safe-apps-sdk/dist/esm/index.js [app-client] (ecmascript, async loader)");
        const appsSdk = new SafeAppsSDK();
        const info = await appsSdk.safe.getInfo();
        const provider = new _SafeProvider(info, appsSdk);
        await provider.connect().catch((error)=>{
            // eslint-disable-next-line no-console
            console.info('Failed to auto-connect to Safe:', error);
        });
        this.provider = provider;
        this.initialized = true;
    }
    async getProvider() {
        return Promise.resolve(this.provider);
    }
} //# sourceMappingURL=SafeProvider.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-adapter-ethers/dist/esm/src/utils/EthersMethods.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EthersMethods",
    ()=>EthersMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/ethers/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$ethersproject$2f$contracts$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@ethersproject/contracts/lib.esm/index.js [app-client] (ecmascript)");
;
const EthersMethods = {
    signMessage: async (message, provider, address)=>{
        if (!provider) {
            throw new Error('signMessage - provider is undefined');
        }
        const hexMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(message) ? message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(message));
        const signature = await provider.request({
            method: 'personal_sign',
            params: [
                hexMessage,
                address
            ]
        });
        return signature;
    },
    estimateGas: async (data, provider, address, networkId)=>{
        if (!provider) {
            throw new Error('estimateGas - provider is undefined');
        }
        if (!address) {
            throw new Error('estimateGas - address is undefined');
        }
        if (data.chainNamespace && data.chainNamespace !== 'eip155') {
            throw new Error('estimateGas - chainNamespace is not eip155');
        }
        const txParams = {
            from: data.address,
            to: data.to,
            data: data.data,
            type: 0
        };
        const browserProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"](provider, networkId);
        const signer = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcSigner"](browserProvider, address);
        return await signer.estimateGas(txParams);
    },
    sendTransaction: async (data, provider, address, networkId)=>{
        if (!provider) {
            throw new Error('sendTransaction - provider is undefined');
        }
        if (!address) {
            throw new Error('sendTransaction - address is undefined');
        }
        if (data.chainNamespace && data.chainNamespace !== 'eip155') {
            throw new Error('sendTransaction - chainNamespace is not eip155');
        }
        const txParams = {
            to: data.to,
            value: data.value,
            gasLimit: data.gas,
            gasPrice: data.gasPrice,
            data: data.data,
            type: 0
        };
        const browserProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"](provider, networkId);
        const signer = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcSigner"](browserProvider, address);
        const txResponse = await signer.sendTransaction(txParams);
        const txReceipt = await txResponse.wait();
        return txReceipt?.hash || null;
    },
    writeContract: async (data, provider, address, chainId)=>{
        if (!provider) {
            throw new Error('writeContract - provider is undefined');
        }
        if (!address) {
            throw new Error('writeContract - address is undefined');
        }
        const browserProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"](provider, chainId);
        const signer = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcSigner"](browserProvider, address);
        const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$ethersproject$2f$contracts$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](data.tokenAddress, data.abi, signer);
        if (!contract || !data.method) {
            throw new Error('Contract method is undefined');
        }
        const method = contract[data.method];
        if (method) {
            return await method(...data.args);
        }
        throw new Error('Contract method is undefined');
    },
    parseWalletCapabilities: (str)=>{
        try {
            return JSON.parse(str);
        } catch (error) {
            throw new Error('Error parsing wallet capabilities');
        }
    },
    parseUnits: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUnits"],
    formatUnits: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"]
}; //# sourceMappingURL=EthersMethods.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-adapter-ethers/dist/esm/src/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EthersAdapter",
    ()=>EthersAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@walletconnect/universal-provider/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/ethers/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletConnectUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/WalletConnectUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AdapterController$2f$ChainAdapterBlueprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AdapterController/ChainAdapterBlueprint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ProviderController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AdapterController$2f$WalletConnectConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AdapterController/WalletConnectConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$exports$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$BaseProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/BaseProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersHelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersHelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$InjectedProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/InjectedProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$SafeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-utils/dist/esm/src/ethers/SafeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-adapter-ethers/dist/esm/src/utils/EthersMethods.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
class EthersAdapter extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AdapterController$2f$ChainAdapterBlueprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdapterBlueprint"] {
    constructor(){
        super({
            adapterType: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ADAPTER_TYPES.ETHERS,
            namespace: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM
        });
        this.balancePromises = {};
        this.ethersProviders = {};
    }
    async createEthersConfig() {
        const { metadata, enableCoinbase, enableInjected, enableEIP6963 } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        if (!metadata) {
            return undefined;
        }
        if (enableInjected !== false) {
            const injectedProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$InjectedProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InjectedProvider"]();
            await injectedProvider.initialize();
            this.ethersProviders.injected = injectedProvider;
        }
        if (enableCoinbase !== false) {
            this.ethersProviders.baseAccount = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$BaseProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseProvider"]();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafeApp()) {
            const safeProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$SafeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeProvider"]();
            await safeProvider.initialize();
            this.ethersProviders.safe = safeProvider;
        }
        return {
            ...this.ethersProviders,
            EIP6963: enableEIP6963 !== false,
            metadata
        };
    }
    async signMessage(params) {
        const { message, address, provider } = params;
        if (!provider) {
            throw new Error('Provider is undefined');
        }
        try {
            const signature = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersMethods"].signMessage(message, provider, address);
            return {
                signature
            };
        } catch (error) {
            throw new Error('EthersAdapter:signMessage - Sign message failed');
        }
    }
    async sendTransaction(params) {
        if (!params.provider) {
            throw new Error('Provider is undefined');
        }
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM)?.address;
        if (!address) {
            throw new Error('Address is undefined');
        }
        const tx = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersMethods"].sendTransaction({
            value: Number.isNaN(Number(params.value)) ? BigInt(0) : BigInt(params.value),
            to: params.to,
            data: params.data ? params.data : '0x',
            gas: params.gas ? BigInt(params.gas) : undefined,
            gasPrice: params.gasPrice ? BigInt(params.gasPrice) : undefined,
            address: address
        }, params.provider, address, Number(params.caipNetwork?.id));
        return {
            hash: tx
        };
    }
    async writeContract(params) {
        if (!params.provider) {
            throw new Error('Provider is undefined');
        }
        const { address } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(params.caipAddress);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersMethods"].writeContract(params, params.provider, address, Number(params.caipNetwork?.id));
        return {
            hash: result
        };
    }
    async estimateGas(params) {
        const { provider, caipNetwork, address } = params;
        if (!provider) {
            throw new Error('Provider is undefined');
        }
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersMethods"].estimateGas({
                data: params.data,
                to: params.to,
                address: address
            }, provider, address, Number(caipNetwork?.id));
            return {
                gas: result
            };
        } catch (error) {
            throw new Error('EthersAdapter:estimateGas - Estimate gas failed');
        }
    }
    parseUnits(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersMethods"].parseUnits(params.value, params.decimals);
    }
    formatUnits(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$ethers$2f$dist$2f$esm$2f$src$2f$utils$2f$EthersMethods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersMethods"].formatUnits(params.value, params.decimals);
    }
    async syncConnection(params) {
        const { id, chainId } = params;
        const connector = this.connectors.find((c)=>c.id === id);
        const selectedProvider = connector?.provider;
        if (!selectedProvider) {
            throw new Error('Provider not found');
        }
        const accounts = await selectedProvider.request({
            method: 'eth_requestAccounts'
        });
        const requestChainId = await selectedProvider.request({
            method: 'eth_chainId'
        });
        this.listenProviderEvents(id, selectedProvider);
        if (!accounts[0]) {
            throw new Error('No accounts found');
        }
        if (!connector?.type) {
            throw new Error('Connector type not found');
        }
        return {
            address: this.toChecksummedAddress(accounts[0]),
            chainId: Number(requestChainId) || Number(chainId),
            provider: selectedProvider,
            type: connector.type,
            id
        };
    }
    async syncConnectors() {
        this.ethersConfig = await this.createEthersConfig();
        if (this.ethersConfig?.EIP6963) {
            this.listenInjectedConnector(true);
        }
        const connectors = Object.keys(this.ethersConfig || {}).filter((key)=>key !== 'metadata' && key !== 'EIP6963');
        const connectorPromises = connectors.map(async (connector)=>{
            const isInjectedConnector = connector === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED;
            if (this.namespace) {
                const provider = this.ethersProviders[connector];
                this.addConnector({
                    id: connector,
                    explorerId: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[connector],
                    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.connectorImages?.[connector],
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorNamesMap[connector] || 'Unknown',
                    imageId: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorImageIds[connector],
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorTypesMap[connector] ?? 'EXTERNAL',
                    info: isInjectedConnector ? undefined : {
                        rdns: connector
                    },
                    chain: this.namespace,
                    chains: [],
                    provider: await provider?.getProvider()
                });
            }
        });
        await Promise.all(connectorPromises);
    }
    async disconnectAll() {
        const connections = await Promise.all(this.connections.map(async (connection)=>{
            const connector = this.connectors.find((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(c.id, connection.connectorId));
            if (!connector) {
                throw new Error('Connector not found');
            }
            await this.disconnect({
                id: connector.id
            });
            return connection;
        }));
        return {
            connections
        };
    }
    async syncConnections({ connectToFirstConnector }) {
        const caipNetworks = this.getCaipNetworks();
        await Promise.all(this.connectors.filter((c)=>{
            const { hasDisconnected, hasConnected } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].getConnectorStorageInfo(c.id, this.namespace);
            return !hasDisconnected && hasConnected;
        }).map(async (connector)=>{
            if (connector.id === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT) {
                const accounts = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletConnectUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcHelpersUtil"].getWalletConnectAccounts(this.universalProvider, this.namespace);
                const caipNetwork = caipNetworks.find((n)=>n.chainNamespace === this.namespace && n.id.toString() === accounts[0]?.chainId?.toString());
                if (accounts.length > 0) {
                    this.addConnection({
                        connectorId: connector.id,
                        accounts: accounts.map((account)=>({
                                address: account.address
                            })),
                        caipNetwork
                    });
                }
            } else {
                const { accounts, chainId } = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].fetchProviderData(connector);
                if (accounts.length > 0 && chainId) {
                    const caipNetwork = caipNetworks.find((n)=>n.chainNamespace === this.namespace && n.id.toString() === chainId.toString());
                    this.addConnection({
                        connectorId: connector.id,
                        accounts: accounts.map((address)=>({
                                address
                            })),
                        caipNetwork
                    });
                    if (connector.provider && connector.id !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH && connector.id !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT) {
                        this.listenProviderEvents(connector.id, connector.provider);
                    }
                }
            }
        }));
        if (connectToFirstConnector) {
            this.emitFirstAvailableConnection();
        }
    }
    async setUniversalProvider(universalProvider) {
        this.universalProvider = universalProvider;
        const wcConnectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT;
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletConnectUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcHelpersUtil"].listenWcProvider({
            universalProvider,
            namespace: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM,
            onConnect: (accounts)=>this.onConnect(accounts, wcConnectorId),
            onDisconnect: ()=>this.onDisconnect(wcConnectorId),
            onAccountsChanged: (accounts)=>this.onAccountsChanged(accounts, wcConnectorId, false),
            onChainChanged: (chainId)=>this.onChainChanged(chainId, wcConnectorId)
        });
        this.addConnector(new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AdapterController$2f$WalletConnectConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectConnector"]({
            provider: universalProvider,
            caipNetworks: this.getCaipNetworks(),
            namespace: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM
        }));
        return Promise.resolve();
    }
    eip6963EventHandler(event) {
        if (event.detail) {
            const { info, provider } = event.detail;
            const existingConnector = this.connectors?.find((c)=>c.name === info?.name);
            if (!existingConnector) {
                const type = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorTypesMap[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.EIP6963];
                const id = info?.rdns || info?.name || info?.uuid;
                if (type && this.namespace && id) {
                    this.addConnector({
                        id,
                        type,
                        imageUrl: info?.icon,
                        name: info?.name || 'Unknown',
                        provider,
                        info,
                        chain: this.namespace,
                        chains: []
                    });
                }
            }
        }
    }
    listenInjectedConnector(enableEIP6963) {
        if (typeof window !== 'undefined' && enableEIP6963) {
            const handler = this.eip6963EventHandler.bind(this);
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_ANNOUNCE_EVENT, handler);
            window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_REQUEST_EVENT));
        }
    }
    async connect({ id, address, type, chainId, socialUri }) {
        try {
            const connector = this.connectors.find((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(c.id, id));
            if (!connector) {
                throw new Error('Connector not found');
            }
            const connection = this.getConnection({
                address,
                connectorId: id,
                connections: this.connections,
                connectors: this.connectors
            });
            if (connection) {
                const caipNetwork = connection.caipNetwork;
                if (!caipNetwork) {
                    throw new Error('EthersAdapter:connect - could not find the caipNetwork to connect');
                }
                if (connection.account) {
                    this.emit('accountChanged', {
                        address: this.toChecksummedAddress(connection.account.address),
                        chainId: caipNetwork.id,
                        connector
                    });
                    return {
                        address: this.toChecksummedAddress(connection.account.address),
                        chainId: caipNetwork.id,
                        provider: connector.provider,
                        type: connector.type,
                        id
                    };
                }
            }
            let selectedProvider = connector?.provider;
            const ethersProvider = this.ethersProviders[connector.id];
            if (ethersProvider) {
                await ethersProvider.initialize();
                selectedProvider = await ethersProvider.getProvider();
            }
            if (!selectedProvider) {
                throw new Error('Provider not found');
            }
            connector.provider = selectedProvider;
            let accounts = [];
            let requestChainId = undefined;
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_AUTH) {
                const { address: _address, accounts: authAccounts } = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].authConnectorAuthenticate({
                    authConnector: selectedProvider,
                    chainNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM,
                    chainId,
                    socialUri,
                    preferredAccountType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreferredAccountType"])('eip155')
                });
                const caipNetwork = this.getCaipNetworks().find((n)=>n.id.toString() === chainId?.toString());
                accounts = [
                    _address
                ];
                this.addConnection({
                    connectorId: id,
                    accounts: authAccounts ? authAccounts.map((account)=>({
                            address: account.address
                        })) : accounts.map((account)=>({
                            address: account
                        })),
                    caipNetwork,
                    auth: {
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialProvider(),
                        username: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialUsername()
                    }
                });
                this.emit('accountChanged', {
                    address: this.toChecksummedAddress(accounts[0]),
                    chainId: Number(chainId),
                    connector
                });
            } else {
                accounts = await selectedProvider.request({
                    method: 'eth_requestAccounts'
                });
                requestChainId = await selectedProvider.request({
                    method: 'eth_chainId'
                });
                const caipNetwork = this.getCaipNetworks().find((n)=>n.id.toString() === chainId?.toString());
                if (requestChainId !== chainId) {
                    if (!caipNetwork) {
                        throw new Error('EthersAdapter:connect - could not find the caipNetwork to switch');
                    }
                    try {
                        await selectedProvider?.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersHelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersHelpersUtil"].numberToHexString(caipNetwork.id)
                                }
                            ]
                        });
                    } catch (error) {
                        throw new Error('EthersAdapter:connect - Switch network failed');
                    }
                }
                this.emit('accountChanged', {
                    address: this.toChecksummedAddress(accounts[0]),
                    chainId: Number(chainId),
                    connector
                });
                this.addConnection({
                    connectorId: id,
                    accounts: accounts.map((account)=>({
                            address: account
                        })),
                    caipNetwork
                });
                if (connector.id !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT) {
                    this.listenProviderEvents(id, selectedProvider);
                }
            }
            return {
                address: this.toChecksummedAddress(accounts[0]),
                chainId: Number(chainId),
                provider: selectedProvider,
                type: type,
                id
            };
        } catch (err) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].isUserRejectedRequestError(err)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](err);
            }
            throw err;
        }
    }
    async reconnect(params) {
        const { id, chainId } = params;
        const connector = this.connectors.find((c)=>c.id === id);
        if (connector && connector.type === 'AUTH' && chainId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].authConnectorAuthenticate({
                authConnector: connector.provider,
                chainNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM,
                chainId,
                preferredAccountType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreferredAccountType"])('eip155')
            });
        }
    }
    async getAccounts(params) {
        const connector = this.connectors.find((c)=>c.id === params.id);
        const selectedProvider = connector?.provider;
        if (!selectedProvider || !connector) {
            throw new Error('Provider not found');
        }
        const connection = this.getConnection({
            connectorId: params.id,
            connections: this.connections,
            connectors: this.connectors
        });
        if (connection) {
            return {
                accounts: connection.accounts.map(({ address })=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].createAccount(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM, address, 'eoa'))
            };
        }
        if (params.id === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH) {
            const provider = connector['provider'];
            if (!provider.user) {
                return {
                    accounts: []
                };
            }
            const { accounts, address } = provider.user;
            return Promise.resolve({
                accounts: (accounts || [
                    {
                        address,
                        type: 'eoa'
                    }
                ]).map((account)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].createAccount(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM, account.address, account.type))
            });
        }
        const accounts = await selectedProvider.request({
            method: 'eth_requestAccounts'
        });
        return {
            accounts: accounts.map((account)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].createAccount(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM, account, 'eoa'))
        };
    }
    async disconnect(params) {
        if (params.id) {
            const connector = this.connectors.find((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(c.id, params.id));
            if (!connector) {
                throw new Error('Connector not found');
            }
            const connection = this.getConnection({
                connectorId: params.id,
                connections: this.connections,
                connectors: this.connectors
            });
            switch(connector.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_WALLET_CONNECT:
                    if (connector.provider.session) {
                        ;
                        connector.provider.disconnect();
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_AUTH:
                    await connector.provider?.disconnect();
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_ANNOUNCED:
                case __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_EXTERNAL:
                    await this.revokeProviderPermissions(connector.provider);
                    break;
                default:
                    throw new Error('Unsupported provider type');
            }
            if (connector.id) {
                this.removeProviderListeners(connector.id);
                this.deleteConnection(connector.id);
            }
            if (this.connections.length === 0) {
                this.emit('disconnect');
            } else {
                this.emitFirstAvailableConnection();
            }
            return {
                connections: connection ? [
                    connection
                ] : []
            };
        }
        return this.disconnectAll();
    }
    async getBalance(params) {
        const address = params.address;
        const caipNetwork = this.getCaipNetworks().find((network)=>network.id.toString() === params.chainId?.toString());
        if (!address) {
            return Promise.resolve({
                balance: '0.00',
                symbol: 'ETH'
            });
        }
        if (caipNetwork && caipNetwork.chainNamespace === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM) {
            const caipAddress = `${caipNetwork.caipNetworkId}:${address}`;
            const cachedPromise = this.balancePromises[caipAddress];
            if (cachedPromise) {
                return cachedPromise;
            }
            const cachedBalance = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getNativeBalanceCacheForCaipAddress(caipAddress);
            if (cachedBalance) {
                return {
                    balance: cachedBalance.balance,
                    symbol: cachedBalance.symbol
                };
            }
            const jsonRpcProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](caipNetwork.rpcUrls.default.http[0], {
                chainId: caipNetwork.id,
                name: caipNetwork.name
            });
            if (jsonRpcProvider) {
                try {
                    this.balancePromises[caipAddress] = new Promise(async (resolve)=>{
                        try {
                            const balance = await jsonRpcProvider.getBalance(address);
                            const formattedBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEther"])(balance);
                            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].updateNativeBalanceCache({
                                caipAddress,
                                balance: formattedBalance,
                                symbol: caipNetwork.nativeCurrency.symbol,
                                timestamp: Date.now()
                            });
                            resolve({
                                balance: formattedBalance,
                                symbol: caipNetwork.nativeCurrency.symbol
                            });
                        } catch (error) {
                            resolve({
                                balance: '0.00',
                                symbol: 'ETH'
                            });
                        }
                    }).finally(()=>{
                        delete this.balancePromises[caipAddress];
                    });
                    return this.balancePromises[caipAddress] || {
                        balance: '0.00',
                        symbol: 'ETH'
                    };
                } catch (error) {
                    return {
                        balance: '0.00',
                        symbol: 'ETH'
                    };
                }
            }
        }
        return {
            balance: '0.00',
            symbol: 'ETH'
        };
    }
    async switchNetwork(params) {
        const { caipNetwork } = params;
        const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderController"].getProviderId(caipNetwork.chainNamespace);
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderController"].getProvider(caipNetwork.chainNamespace);
        if (providerType === 'AUTH' || providerType === 'WALLET_CONNECT') {
            await super.switchNetwork(params);
            return;
        }
        if (!provider) {
            throw new Error('Provider not found');
        }
        try {
            await provider?.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersHelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersHelpersUtil"].numberToHexString(caipNetwork.id)
                    }
                ]
            });
        } catch (switchError) {
            if (switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_INVALID_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_CODE_DEFAULT || switchError?.data?.originalError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WcConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ethers$2f$EthersHelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthersHelpersUtil"].addEthereumChain(provider, caipNetwork);
            } else if (providerType === 'ANNOUNCED' || providerType === 'EXTERNAL' || providerType === 'INJECTED') {
                throw new Error('Chain is not supported');
            }
        }
    }
    getWalletConnectProvider() {
        return this.connectors.find((c)=>c.type === 'WALLET_CONNECT')?.provider;
    }
    async revokeProviderPermissions(provider) {
        try {
            const permissions = await provider.request({
                method: 'wallet_getPermissions'
            });
            const ethAccountsPermission = permissions.find((permission)=>permission.parentCapability === 'eth_accounts');
            if (ethAccountsPermission) {
                await provider.request({
                    method: 'wallet_revokePermissions',
                    params: [
                        {
                            eth_accounts: {}
                        }
                    ]
                });
            }
        } catch (error) {
            console.info('Could not revoke permissions from wallet. Disconnecting...', error);
        }
    }
    async getCapabilities(params) {
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderController"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM);
        if (!provider) {
            throw new Error('Provider is undefined');
        }
        return await provider.request({
            method: 'wallet_getCapabilities',
            params: [
                params
            ]
        });
    }
    async grantPermissions(params) {
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderController"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM);
        if (!provider) {
            throw new Error('Provider is undefined');
        }
        return await provider.request({
            method: 'wallet_grantPermissions',
            params
        });
    }
    async revokePermissions(params) {
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderController"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM);
        if (!provider) {
            throw new Error('Provider is undefined');
        }
        return await provider.request({
            method: 'wallet_revokePermissions',
            params: [
                params
            ]
        });
    }
    async walletGetAssets(params) {
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ProviderController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderController"].getProvider(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM);
        if (!provider) {
            throw new Error('Provider is undefined');
        }
        return await provider.request({
            method: 'wallet_getAssets',
            params: [
                params
            ]
        });
    }
    toChecksummedAddress(address) {
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address.toLowerCase());
        } catch  {
            return address;
        }
    }
} //# sourceMappingURL=client.js.map
}),
]);

//# sourceMappingURL=02930_%40reown_63d14ce0._.js.map