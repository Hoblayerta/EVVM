(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ConstantsUtil = {
    ACCOUNT_TABS: [
        {
            label: 'Tokens'
        },
        {
            label: 'Activity'
        }
    ],
    SECURE_SITE_ORIGIN: (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org',
    VIEW_DIRECTION: {
        Next: 'next',
        Prev: 'prev'
    },
    DEFAULT_CONNECT_METHOD_ORDER: [
        'email',
        'social',
        'wallet'
    ],
    ANIMATION_DURATIONS: {
        HeaderText: 120,
        ModalHeight: 150,
        ViewTransition: 150
    },
    VIEWS_WITH_LEGAL_FOOTER: [
        'Connect',
        'ConnectWallets',
        'OnRampTokenSelect',
        'OnRampFiatSelect',
        'OnRampProviders'
    ],
    VIEWS_WITH_DEFAULT_FOOTER: [
        'Networks'
    ]
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletUtil",
    ()=>WalletUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
const MANDATORY_WALLET_IDS_ON_MOBILE = [
    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE],
    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK],
    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT],
    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SOLFLARE_CONNECTOR_NAME],
    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].PHANTOM_CONNECTOR_NAME],
    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BINANCE_CONNECTOR_NAME]
];
const WalletUtil = {
    filterOutDuplicatesByRDNS (wallets) {
        const connectors = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEIP6963 ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors : [];
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const connectorRDNSs = connectors.map((connector)=>connector.info?.rdns).filter(Boolean);
        const recentRDNSs = recent.map((wallet)=>wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter((wallet)=>{
            if (wallet?.rdns && allRDNSs.includes(String(wallet.rdns))) {
                return false;
            }
            if (!wallet?.rdns) {
                const hasMatchingConnectorName = connectors.some((connector)=>connector.name === wallet.name);
                if (hasMatchingConnectorName) {
                    return false;
                }
            }
            return true;
        });
        return filtered;
    },
    filterOutDuplicatesByIds (wallets) {
        const connectors = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors.filter((connector)=>connector.type === 'ANNOUNCED' || connector.type === 'INJECTED' || connector.type === 'MULTI_CHAIN');
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const connectorIds = connectors.map((connector)=>connector.explorerId || connector.explorerWallet?.id || connector.id);
        const recentIds = recent.map((wallet)=>wallet.id);
        const allIds = connectorIds.concat(recentIds);
        const filtered = wallets.filter((wallet)=>!allIds.includes(wallet?.id));
        return filtered;
    },
    filterOutDuplicateWallets (wallets) {
        const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
        const uniqueWallets = this.filterOutDuplicatesByIds(uniqueByRDNS);
        return uniqueWallets;
    },
    markWalletsAsInstalled (wallets) {
        const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
        const { featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const installedWalletRdnsMap = connectors.filter((connector)=>connector.type === 'ANNOUNCED').reduce((rdnsMap, connector)=>{
            if (!connector.info?.rdns) {
                return rdnsMap;
            }
            rdnsMap[connector.info.rdns] = true;
            return rdnsMap;
        }, {});
        const walletsWithInstallationStatus = wallets.map((wallet)=>({
                ...wallet,
                installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ''])
            }));
        const sortedWallets = walletsWithInstallationStatus.sort((walletA, walletB)=>{
            const installationComparison = Number(walletB.installed) - Number(walletA.installed);
            if (installationComparison !== 0) {
                return installationComparison;
            }
            if (featuredWalletIds?.length) {
                const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
                const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
                if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) {
                    return walletAFeaturedIndex - walletBFeaturedIndex;
                }
                if (walletAFeaturedIndex !== -1) {
                    return -1;
                }
                if (walletBFeaturedIndex !== -1) {
                    return 1;
                }
            }
            return 0;
        });
        return sortedWallets;
    },
    getConnectOrderMethod (_features, _connectors) {
        const connectMethodOrder = _features?.connectMethodsOrder || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features?.connectMethodsOrder;
        const connectors = _connectors || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        if (connectMethodOrder) {
            return connectMethodOrder;
        }
        const { injected, announced } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].getConnectorsByType(connectors, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.recommended, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.featured);
        const shownInjected = injected.filter(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector);
        const shownAnnounced = announced.filter(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector);
        if (shownInjected.length || shownAnnounced.length) {
            return [
                'wallet',
                'email',
                'social'
            ];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded (wallet) {
        const isRDNSExcluded = Boolean(wallet.rdns) && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((w)=>w.rdns === wallet.rdns);
        const isNameExcluded = Boolean(wallet.name) && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((w)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(w.name, wallet.name));
        return isRDNSExcluded || isNameExcluded;
    },
    markWalletsWithDisplayIndex (wallets) {
        return wallets.map((w, index)=>({
                ...w,
                display_index: index
            }));
    },
    filterWalletsByWcSupport (wallets) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcBasic) {
            return wallets.filter((wallet)=>wallet.supports_wc);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            return wallets.filter((wallet)=>wallet.supports_wc || MANDATORY_WALLET_IDS_ON_MOBILE.includes(wallet.id));
        }
        return wallets;
    }
}; //# sourceMappingURL=WalletUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectorUtil",
    ()=>ConnectorUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$OptionsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/OptionsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
;
;
;
;
const ConnectorUtil = {
    getConnectorsByType (connectors, recommended, featured) {
        const { customWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const filteredRecommended = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].filterOutDuplicateWallets(recommended);
        const filteredFeatured = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].filterOutDuplicateWallets(featured);
        const multiChain = connectors.filter((connector)=>connector.type === 'MULTI_CHAIN');
        const announced = connectors.filter((connector)=>connector.type === 'ANNOUNCED');
        const injected = connectors.filter((connector)=>connector.type === 'INJECTED');
        const external = connectors.filter((connector)=>connector.type === 'EXTERNAL');
        return {
            custom: customWallets,
            recent,
            external,
            multiChain,
            announced,
            injected,
            recommended: filteredRecommended,
            featured: filteredFeatured
        };
    },
    showConnector (connector) {
        const rdns = connector.info?.rdns;
        const isRDNSExcluded = Boolean(rdns) && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((wallet)=>Boolean(wallet.rdns) && wallet.rdns === rdns);
        const isNameExcluded = Boolean(connector.name) && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((wallet)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(wallet.name, connector.name));
        if (connector.type === 'INJECTED') {
            const isBrowserWallet = connector.name === 'Browser Wallet';
            if (isBrowserWallet) {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
                    return false;
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile() && !rdns && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].checkInstalled()) {
                    return false;
                }
            }
            if (isRDNSExcluded || isNameExcluded) {
                return false;
            }
        }
        if ((connector.type === 'ANNOUNCED' || connector.type === 'EXTERNAL') && (isRDNSExcluded || isNameExcluded)) {
            return false;
        }
        return true;
    },
    getIsConnectedWithWC () {
        const chains = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.values());
        const isConnectedWithWC = chains.some((chain)=>{
            const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(chain.namespace);
            return connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT;
        });
        return isConnectedWithWC;
    },
    getConnectorTypeOrder ({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features?.connectorTypeOrder ?? [] }) {
        const allConnectors = [
            {
                type: 'walletConnect',
                isEnabled: true
            },
            {
                type: 'recent',
                isEnabled: recent.length > 0
            },
            {
                type: 'injected',
                isEnabled: [
                    ...injected,
                    ...announced,
                    ...multiChain
                ].length > 0
            },
            {
                type: 'featured',
                isEnabled: featured.length > 0
            },
            {
                type: 'custom',
                isEnabled: custom && custom.length > 0
            },
            {
                type: 'external',
                isEnabled: external.length > 0
            },
            {
                type: 'recommended',
                isEnabled: recommended.length > 0
            }
        ];
        const enabledConnectors = allConnectors.filter((option)=>option.isEnabled);
        const enabledConnectorTypes = new Set(enabledConnectors.map((option)=>option.type));
        const prioritizedConnectors = overriddenConnectors.filter((type)=>enabledConnectorTypes.has(type)).map((type)=>({
                type,
                isEnabled: true
            }));
        const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType })=>{
            const hasPrioritizedConnector = prioritizedConnectors.some(({ type: prioritizedConnectorType })=>prioritizedConnectorType === enabledConnectorType);
            return !hasPrioritizedConnector;
        });
        return Array.from(new Set([
            ...prioritizedConnectors,
            ...remainingConnectors
        ].map(({ type })=>type)));
    },
    sortConnectorsByExplorerWallet (connectors) {
        return [
            ...connectors
        ].sort((a, b)=>{
            if (a.explorerWallet && b.explorerWallet) {
                return (a.explorerWallet.order ?? 0) - (b.explorerWallet.order ?? 0);
            }
            if (a.explorerWallet) {
                return -1;
            }
            if (b.explorerWallet) {
                return 1;
            }
            return 0;
        });
    },
    getAuthName ({ email, socialUsername, socialProvider }) {
        if (socialUsername) {
            if (socialProvider && socialProvider === 'discord' && socialUsername.endsWith('0')) {
                return socialUsername.slice(0, -1);
            }
            return socialUsername;
        }
        return email.length > 30 ? `${email.slice(0, -3)}...` : email;
    },
    async fetchProviderData (connector) {
        try {
            if (connector.name === 'Browser Wallet' && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
                return {
                    accounts: [],
                    chainId: undefined
                };
            }
            if (connector.id === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH) {
                return {
                    accounts: [],
                    chainId: undefined
                };
            }
            const [accounts, chainId] = await Promise.all([
                connector.provider?.request({
                    method: 'eth_accounts'
                }),
                connector.provider?.request({
                    method: 'eth_chainId'
                }).then((hexChainId)=>Number(hexChainId))
            ]);
            return {
                accounts,
                chainId
            };
        } catch (err) {
            console.warn(`Failed to fetch provider data for ${connector.name}`, err);
            return {
                accounts: [],
                chainId: undefined
            };
        }
    },
    getFilteredCustomWallets (wallets) {
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const connectorRDNSs = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors.map((connector)=>connector.info?.rdns).filter(Boolean);
        const recentRDNSs = recent.map((wallet)=>wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter((wallet)=>!allRDNSs.includes(String(wallet?.rdns)));
        return filtered;
    },
    hasWalletConnector (wallet) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors.some((connector)=>connector.id === wallet.id || connector.name === wallet.name);
    },
    isWalletCompatibleWithCurrentChain (wallet) {
        const currentNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        if (currentNamespace && wallet.chains) {
            return wallet.chains.some((c)=>{
                const chainNamespace = c.split(':')[0];
                return currentNamespace === chainNamespace;
            });
        }
        return true;
    },
    getFilteredRecentWallets () {
        const recentWallets = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const filteredRecentWallets = recentWallets.filter((wallet)=>!__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].isExcluded(wallet)).filter((wallet)=>!this.hasWalletConnector(wallet)).filter((wallet)=>this.isWalletCompatibleWithCurrentChain(wallet));
        return filteredRecentWallets;
    },
    getCappedRecommendedWallets (wallets) {
        const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
        const { customWallets, featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const wcConnector = connectors.find((c)=>c.id === 'walletConnect');
        const injectedConnectors = connectors.filter((c)=>c.type === 'INJECTED' || c.type === 'ANNOUNCED' || c.type === 'MULTI_CHAIN');
        if (!wcConnector && !injectedConnectors.length && !customWallets?.length) {
            return [];
        }
        const isEmailEnabled = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$OptionsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsUtil"].isEmailEnabled();
        const isSocialsEnabled = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$OptionsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsUtil"].isSocialsEnabled();
        const injectedWallets = injectedConnectors.filter((i)=>i.name !== 'Browser Wallet' && i.name !== 'WalletConnect');
        const featuredWalletAmount = featuredWalletIds?.length || 0;
        const customWalletAmount = customWallets?.length || 0;
        const injectedWalletAmount = injectedWallets.length || 0;
        const emailWalletAmount = isEmailEnabled ? 1 : 0;
        const socialWalletAmount = isSocialsEnabled ? 1 : 0;
        const walletsDisplayed = featuredWalletAmount + customWalletAmount + injectedWalletAmount + emailWalletAmount + socialWalletAmount;
        const DISPLAYED_WALLETS_AMOUNT = 4;
        const sliceAmount = Math.max(0, DISPLAYED_WALLETS_AMOUNT - walletsDisplayed);
        if (sliceAmount <= 0) {
            return [];
        }
        const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].filterOutDuplicateWallets(wallets);
        return filtered.slice(0, sliceAmount);
    }
}; //# sourceMappingURL=ConnectorUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpersUtil",
    ()=>HelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
const HelpersUtil = {
    getTabsByNamespace (namespace) {
        const isEVM = Boolean(namespace) && namespace === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
        if (!isEVM) {
            return [];
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures?.activity === false) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ACCOUNT_TABS.filter((tab)=>tab.label !== 'Activity');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ACCOUNT_TABS;
    },
    isValidReownName (name) {
        return /^[a-zA-Z0-9]+$/gu.test(name);
    },
    isValidEmail (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(email);
    },
    validateReownName (name) {
        const sanitizedName = name.replace(/\^/gu, '').toLowerCase();
        return sanitizedName.replace(/[^a-zA-Z0-9]/gu, '');
    },
    hasFooter () {
        const view = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.view;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].VIEWS_WITH_LEGAL_FOOTER.includes(view)) {
            const { termsConditionsUrl, privacyPolicyUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
            const legalCheckbox = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features?.legalCheckbox;
            const showOnlyBranding = !termsConditionsUrl && !privacyPolicyUrl || legalCheckbox;
            if (showOnlyBranding) {
                return false;
            }
            return true;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].VIEWS_WITH_DEFAULT_FOOTER.includes(view);
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectionUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionUtil",
    ()=>ConnectionUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
;
;
;
const ConnectionUtil = {
    getAuthData (connection) {
        const isAuth = connection.connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH;
        if (!isAuth) {
            return {
                isAuth: false,
                icon: undefined,
                iconSize: undefined,
                name: undefined
            };
        }
        const socialProvider = connection?.auth?.name ?? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialProvider();
        const socialUsername = connection?.auth?.username ?? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialUsername();
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        const email = authConnector?.provider.getEmail() ?? '';
        return {
            isAuth: true,
            icon: socialProvider ?? 'mail',
            iconSize: socialProvider ? 'xl' : 'md',
            name: isAuth ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].getAuthName({
                email,
                socialUsername,
                socialProvider
            }) : undefined
        };
    }
}; //# sourceMappingURL=ConnectionUtil.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing })=>spacing['1']} * -1);
    bottom: calc(${({ spacing })=>spacing['1']} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations })=>durations['lg']};
    transition-timing-function: ${({ easings })=>easings['ease-out-power-2']};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing })=>spacing['4']};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings })=>easings['ease-out-power-2']} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWidget",
    ()=>W3mConnectingWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$loading$2d$thumbnail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$wallet$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
;
;
;
;
class W3mConnectingWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.wallet;
        this.connector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.connector;
        this.timeout = undefined;
        this.secondaryBtnIcon = 'refresh';
        this.onConnect = undefined;
        this.onRender = undefined;
        this.onAutoConnect = undefined;
        this.isWalletConnect = true;
        this.unsubscribe = [];
        this.imageSrc = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(this.connector) ?? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet);
        this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet';
        this.isRetrying = false;
        this.uri = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
        this.error = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcError;
        this.ready = false;
        this.showRetry = false;
        this.label = undefined;
        this.secondaryBtnLabel = 'Try again';
        this.secondaryLabel = 'Accept connection request in the wallet';
        this.isLoading = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>{
                this.uri = val;
                if (this.isRetrying && this.onRetry) {
                    this.isRetrying = false;
                    this.onConnect?.();
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcError', (val)=>this.error = val)
        ]);
        if ((__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafari()) && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos() && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri) {
            this.onConnect?.();
        }
    }
    firstUpdated() {
        this.onAutoConnect?.();
        this.showRetry = !this.onAutoConnect;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        clearTimeout(this.timeout);
    }
    render() {
        this.onRender?.();
        this.onShowRetry();
        const subLabel = this.error ? 'Connection can be declined if a previous request is still active' : this.secondaryLabel;
        let label = '';
        if (this.label) {
            label = this.label;
        } else {
            label = `Continue in ${this.name}`;
            if (this.error) {
                label = 'Connection declined';
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        data-error=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[
            '10',
            '5',
            '5',
            '5'
        ]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[
            '2',
            '0',
            '0',
            '0'
        ]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error ? 'error' : 'primary'}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              ` : null}
      </wui-flex>

      ${this.isWalletConnect ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
              <wui-flex .padding=${[
            '0',
            '5',
            '5',
            '5'
        ]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `;
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onTryAgain() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        if (this.onRetry) {
            this.isRetrying = true;
            this.onRetry?.();
        } else {
            this.onConnect?.();
        }
    }
    loaderTemplate() {
        const borderRadiusMaster = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
        try {
            if (this.uri) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].copyToClopboard(this.uri);
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Link copied');
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to copy');
        }
    }
}
W3mConnectingWidget.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "label", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "isLoading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Boolean
    })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectingWidget.prototype, "onRetry", void 0); //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=b572f_%40reown_appkit-scaffold-ui_dist_esm_src_utils_be8aa189._.js.map