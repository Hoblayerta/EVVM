(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-account-settings-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAccountSettingsView",
    ()=>W3mAccountSettingsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-avatar.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$notice$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-notice-card.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$account$2d$auth$2d$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-auth-button/index.js [app-client] (ecmascript)");
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
let W3mAccountSettingsView = class W3mAccountSettingsView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.usubscribe = [];
        this.networkImages = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.networkImages;
        this.address = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData()?.address;
        this.profileImage = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData()?.profileImage;
        this.profileName = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData()?.profileName;
        this.network = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        this.disconnecting = false;
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.usubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', (val)=>{
                if (val) {
                    this.address = val.address;
                    this.profileImage = val.profileImage;
                    this.profileName = val.profileName;
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeCaipNetwork', (val)=>{
                if (val?.id) {
                    this.network = val;
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>{
                this.remoteFeatures = val;
            })
        ]);
    }
    disconnectedCallback() {
        this.usubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        if (!this.address) {
            throw new Error('w3m-account-settings-view: No account provided');
        }
        const networkImage = this.networkImages[this.network?.assets?.imageId ?? ''];
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[
            '0',
            '5',
            '3',
            '5'
        ]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UiHelperUtil"].getTruncateString({
            string: this.address,
            charsStart: 4,
            charsEnd: 6,
            truncate: 'middle'
        })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[
            '6',
            '4',
            '3',
            '4'
        ]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${true}
            ?rounded=${true}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name ?? 'Unknown'}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${true}
            icon="power"
            iconColor="error"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    chooseNameButtonTemplate() {
        const namespace = this.network?.chainNamespace;
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(namespace);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        const hasNetworkSupport = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].checkIfNamesSupported();
        if (!hasNetworkSupport || !authConnector || connectorId !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH || this.profileName) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        icon="id"
        ?rounded=${true}
        ?chevron=${true}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(this.network?.chainNamespace);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        const { origin } = location;
        if (!authConnector || connectorId !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH || origin.includes(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SECURE_SITE)) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    isAllowedNetworkSwitch() {
        const requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
        const isValidNetwork = requestedCaipNetworks?.find(({ id })=>id === this.network?.id);
        return isMultiNetwork || !isValidNetwork;
    }
    onCopyAddress() {
        try {
            if (this.address) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].copyToClopboard(this.address);
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Address copied');
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to copy');
        }
    }
    smartAccountSettingsTemplate() {
        const namespace = this.network?.chainNamespace;
        const isNetworkEnabled = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].checkIfSmartAccountEnabled();
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(namespace);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        if (!authConnector || connectorId !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH || !isNetworkEnabled) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        icon="user"
        ?rounded=${true}
        ?chevron=${true}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `;
    }
    onChooseName() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ChooseAccountName');
    }
    onNetworks() {
        if (this.isAllowedNetworkSwitch()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('Networks');
        }
    }
    async onDisconnect() {
        try {
            this.disconnecting = true;
            const namespace = this.network?.chainNamespace;
            const connectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].getConnections(namespace);
            const hasConnections = connectionsByNamespace.length > 0;
            const connectorId = namespace && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.activeConnectorIds[namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].disconnect(isMultiWalletEnabled ? {
                id: connectorId,
                namespace
            } : {});
            if (hasConnections && isMultiWalletEnabled) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ProfileWallets');
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Wallet deleted');
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'DISCONNECT_ERROR',
                properties: {
                    message: 'Failed to disconnect'
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to disconnect');
        } finally{
            this.disconnecting = false;
        }
    }
    onGoToUpgradeView() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'EMAIL_UPGRADE_FROM_MODAL'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('UpgradeEmailWallet');
    }
    onSmartAccountSettings() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('SmartAccountSettings');
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountSettingsView.prototype, "address", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountSettingsView.prototype, "profileName", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountSettingsView.prototype, "network", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountSettingsView.prototype, "remoteFeatures", void 0);
W3mAccountSettingsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-account-settings-view')
], W3mAccountSettingsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-account-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAccountView",
    ()=>W3mAccountView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$account$2d$default$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$account$2d$wallet$2d$features$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/index.js [app-client] (ecmascript)");
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
let W3mAccountView = class W3mAccountView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.namespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeChain', (namespace)=>{
            this.namespace = namespace;
        }));
    }
    render() {
        if (!this.namespace) {
            return null;
        }
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(this.namespace);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      ${authConnector && connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `;
    }
    walletFeaturesTemplate() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
    }
    defaultTemplate() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-account-default-widget></w3m-account-default-widget>`;
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAccountView.prototype, "namespace", void 0);
W3mAccountView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-account-view')
], W3mAccountView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-wallets-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ easings })=>easings['ease-out-power-1']}
      ${({ durations })=>durations['md']};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({ tokens })=>tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius })=>borderRadius['4']};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({ spacing })=>spacing['4']};
    background-color: ${({ tokens })=>tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius })=>borderRadius['4']};
  }

  wui-separator {
    margin: ${({ spacing })=>spacing['2']} 0 ${({ spacing })=>spacing['2']} 0;
  }

  .active-connection {
    padding: ${({ spacing })=>spacing['2']};
  }

  .recent-connection {
    padding: ${({ spacing })=>spacing['2']} 0 ${({ spacing })=>spacing['2']} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-wallets-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mProfileWalletsView",
    ()=>W3mProfileWalletsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$class$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/class-map.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$class$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/class-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectionControllerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/MathUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$active$2d$profile$2d$wallet$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-active-profile-wallet-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$balance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-balance.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$inactive$2d$profile$2d$wallet$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-inactive-profile-wallet-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-tabs.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectionUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$profile$2d$wallets$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-wallets-view/styles.js [app-client] (ecmascript)");
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
;
;
;
;
;
const UI_CONFIG = {
    ADDRESS_DISPLAY: {
        START: 4,
        END: 6
    },
    BADGE: {
        SIZE: 'md',
        ICON: 'lightbulb'
    },
    SCROLL_THRESHOLD: 50,
    OPACITY_RANGE: [
        0,
        1
    ]
};
const NAMESPACE_ICONS = {
    eip155: 'ethereum',
    solana: 'solana',
    bip122: 'bitcoin',
    ton: 'ton'
};
const NAMESPACE_TABS = [
    {
        namespace: 'eip155',
        icon: NAMESPACE_ICONS.eip155,
        label: 'EVM'
    },
    {
        namespace: 'solana',
        icon: NAMESPACE_ICONS.solana,
        label: 'Solana'
    },
    {
        namespace: 'bip122',
        icon: NAMESPACE_ICONS.bip122,
        label: 'Bitcoin'
    },
    {
        namespace: 'ton',
        icon: NAMESPACE_ICONS.ton,
        label: 'Ton'
    }
];
const CHAIN_LABELS = {
    eip155: {
        title: 'Add EVM Wallet',
        description: 'Add your first EVM wallet'
    },
    solana: {
        title: 'Add Solana Wallet',
        description: 'Add your first Solana wallet'
    },
    bip122: {
        title: 'Add Bitcoin Wallet',
        description: 'Add your first Bitcoin wallet'
    },
    ton: {
        title: 'Add TON Wallet',
        description: 'Add your first TON wallet'
    }
};
let W3mProfileWalletsView = class W3mProfileWalletsView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribers = [];
        this.currentTab = 0;
        this.namespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        this.namespaces = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.keys());
        this.caipAddress = undefined;
        this.profileName = undefined;
        this.activeConnectorIds = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.activeConnectorIds;
        this.lastSelectedAddress = '';
        this.lastSelectedConnectorId = '';
        this.isSwitching = false;
        this.caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        this.user = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData()?.user;
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.currentTab = this.namespace ? this.namespaces.indexOf(this.namespace) : 0;
        this.caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(this.namespace)?.caipAddress;
        this.profileName = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(this.namespace)?.profileName;
        this.unsubscribers.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('connections', ()=>this.onConnectionsChange()),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('recentConnections', ()=>this.requestUpdate()),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('activeConnectorIds', (ids)=>{
                this.activeConnectorIds = ids;
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeCaipNetwork', (val)=>this.caipNetwork = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', (val)=>{
                this.user = val?.user;
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>this.remoteFeatures = val)
        ]);
        this.chainListener = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', (accountState)=>{
            this.caipAddress = accountState?.caipAddress;
            this.profileName = accountState?.profileName;
        }, this.namespace);
    }
    disconnectedCallback() {
        this.unsubscribers.forEach((unsubscribe)=>unsubscribe());
        this.resizeObserver?.disconnect();
        this.removeScrollListener();
        this.chainListener?.();
    }
    firstUpdated() {
        const walletListEl = this.shadowRoot?.querySelector('.wallet-list');
        if (!walletListEl) {
            return;
        }
        const handleScroll = ()=>this.updateScrollOpacity(walletListEl);
        requestAnimationFrame(handleScroll);
        walletListEl.addEventListener('scroll', handleScroll);
        this.resizeObserver = new ResizeObserver(handleScroll);
        this.resizeObserver.observe(walletListEl);
        handleScroll();
    }
    render() {
        const namespace = this.namespace;
        if (!namespace) {
            throw new Error('Namespace is not set');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" .padding=${[
            '0',
            '4',
            '4',
            '4'
        ]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(namespace)} ${this.renderConnections(namespace)}
        ${this.renderAddConnectionButton(namespace)}
      </wui-flex>
    `;
    }
    renderTabs() {
        const availableTabs = NAMESPACE_TABS.filter((tab)=>this.namespaces.includes(tab.namespace));
        const tabCount = availableTabs.length;
        if (tabCount > 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <wui-tabs
          .onTabChange=${(index)=>this.handleTabChange(index)}
          .activeTab=${this.currentTab}
          .tabs=${availableTabs}
        ></wui-tabs>
      `;
        }
        return null;
    }
    renderHeader(namespace) {
        const connections = this.getActiveConnections(namespace);
        const totalConnections = connections.flatMap(({ accounts })=>accounts).length + (this.caipAddress ? 1 : 0);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${NAMESPACE_ICONS[namespace] ?? NAMESPACE_ICONS.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${totalConnections > 1 ? 'Wallets' : 'Wallet'}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${totalConnections}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].disconnect({
                namespace
            })}
          ?disabled=${!this.hasAnyConnections(namespace)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `;
    }
    renderConnections(namespace) {
        const hasConnections = this.hasAnyConnections(namespace);
        const classes = {
            'wallet-list': true,
            'active-wallets-box': hasConnections,
            'empty-wallet-list-box': !hasConnections
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" class=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$class$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classMap"])(classes)} rowgap="3">
        ${hasConnections ? this.renderActiveConnections(namespace) : this.renderEmptyState(namespace)}
      </wui-flex>
    `;
    }
    renderActiveConnections(namespace) {
        const connections = this.getActiveConnections(namespace);
        const connectorId = this.activeConnectorIds[namespace];
        const plainAddress = this.getPlainAddress();
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      ${plainAddress || connectorId || connections.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-flex
            flexDirection="column"
            .padding=${[
            '4',
            '0',
            '4',
            '0'
        ]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(namespace)} ${this.renderActiveConnectionsList(namespace)}
          </wui-flex>` : null}
      ${this.renderRecentConnections(namespace)}
    `;
    }
    renderActiveProfile(namespace) {
        const connectorId = this.activeConnectorIds[namespace];
        if (!connectorId) {
            return null;
        }
        const { connections } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsData(namespace);
        const connector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorById(connectorId);
        const connectorImage = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector);
        const plainAddress = this.getPlainAddress();
        if (!plainAddress) {
            return null;
        }
        const isBitcoin = namespace === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.BITCOIN;
        const authData = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionUtil"].getAuthData({
            connectorId,
            accounts: []
        });
        const shouldShowSeparator = this.getActiveConnections(namespace).flatMap((connection)=>connection.accounts).length > 0;
        const connection = connections.find((c)=>c.connectorId === connectorId);
        const account = connection?.accounts.filter((a)=>!__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(a.address, plainAddress));
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" .padding=${[
            '0',
            '4',
            '0',
            '4'
        ]}>
        <wui-active-profile-wallet-item
          address=${plainAddress}
          alt=${connector?.name}
          .content=${this.getProfileContent({
            address: plainAddress,
            connections,
            connectorId,
            namespace
        })}
          .charsStart=${UI_CONFIG.ADDRESS_DISPLAY.START}
          .charsEnd=${UI_CONFIG.ADDRESS_DISPLAY.END}
          .icon=${authData.icon}
          .iconSize=${authData.iconSize}
          .iconBadge=${this.isSmartAccount(plainAddress) ? UI_CONFIG.BADGE.ICON : undefined}
          .iconBadgeSize=${this.isSmartAccount(plainAddress) ? UI_CONFIG.BADGE.SIZE : undefined}
          imageSrc=${connectorImage}
          ?enableMoreButton=${authData.isAuth}
          @copy=${()=>this.handleCopyAddress(plainAddress)}
          @disconnect=${()=>this.handleDisconnect(namespace, connectorId)}
          @switch=${()=>{
            if (isBitcoin && connection && account?.[0]) {
                this.handleSwitchWallet(connection, account[0].address, namespace);
            }
        }}
          @externalLink=${()=>this.handleExternalLink(plainAddress)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${shouldShowSeparator ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-separator></wui-separator>` : null}
      </wui-flex>
    `;
    }
    renderActiveConnectionsList(namespace) {
        const connections = this.getActiveConnections(namespace);
        if (connections.length === 0) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" .padding=${[
            '0',
            '2',
            '0',
            '2'
        ]}>
        ${this.renderConnectionList(connections, false, namespace)}
      </wui-flex>
    `;
    }
    renderRecentConnections(namespace) {
        const { recentConnections } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsData(namespace);
        const allAccounts = recentConnections.flatMap((connection)=>connection.accounts);
        if (allAccounts.length === 0) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" .padding=${[
            '0',
            '2',
            '0',
            '2'
        ]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${[
            '0',
            '2',
            '0',
            '2'
        ]}>
          ${this.renderConnectionList(recentConnections, true, namespace)}
        </wui-flex>
      </wui-flex>
    `;
    }
    renderConnectionList(connections, isRecentConnections, namespace) {
        return connections.filter((connection)=>connection.accounts.length > 0).map((connection, connectionIdx)=>{
            const connector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorById(connection.connectorId);
            const connectorImage = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector) ?? '';
            const authData = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionUtil"].getAuthData(connection);
            return connection.accounts.map((account, accountIdx)=>{
                const shouldShowSeparator = connectionIdx !== 0 || accountIdx !== 0;
                const isLoading = this.isAccountLoading(connection.connectorId, account.address);
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
            <wui-flex flexDirection="column">
              ${shouldShowSeparator ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-separator></wui-separator>` : null}
              <wui-inactive-profile-wallet-item
                address=${account.address}
                alt=${connection.connectorId}
                buttonLabel=${isRecentConnections ? 'Connect' : 'Switch'}
                buttonVariant=${isRecentConnections ? 'neutral-secondary' : 'accent-secondary'}
                rightIcon=${isRecentConnections ? 'bin' : 'power'}
                rightIconSize="sm"
                class=${isRecentConnections ? 'recent-connection' : 'active-connection'}
                data-testid=${isRecentConnections ? 'recent-connection' : 'active-connection'}
                imageSrc=${connectorImage}
                .iconBadge=${this.isSmartAccount(account.address) ? UI_CONFIG.BADGE.ICON : undefined}
                .iconBadgeSize=${this.isSmartAccount(account.address) ? UI_CONFIG.BADGE.SIZE : undefined}
                .icon=${authData.icon}
                .iconSize=${authData.iconSize}
                .loading=${isLoading}
                .showBalance=${false}
                .charsStart=${UI_CONFIG.ADDRESS_DISPLAY.START}
                .charsEnd=${UI_CONFIG.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(connection, account.address, namespace)}
                @iconClick=${()=>this.handleWalletAction({
                        connection,
                        address: account.address,
                        isRecentConnection: isRecentConnections,
                        namespace
                    })}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `;
            });
        });
    }
    renderAddConnectionButton(namespace) {
        if (!this.isMultiWalletEnabled() && this.caipAddress) {
            return null;
        }
        if (!this.hasAnyConnections(namespace)) {
            return null;
        }
        const { title } = this.getChainLabelInfo(namespace);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${true}
        @click=${()=>this.handleAddConnection(namespace)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${title}</wui-text>
      </wui-list-item>
    `;
    }
    renderEmptyState(namespace) {
        const { title, description } = this.getChainLabelInfo(namespace);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${description}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(namespace)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${title}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
    }
    handleTabChange(index) {
        const nextNamespace = this.namespaces[index];
        if (nextNamespace) {
            this.chainListener?.();
            this.currentTab = this.namespaces.indexOf(nextNamespace);
            this.namespace = nextNamespace;
            this.caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(nextNamespace)?.caipAddress;
            this.profileName = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAccountData(nextNamespace)?.profileName;
            this.chainListener = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeChainProp('accountState', (accountState)=>{
                this.caipAddress = accountState?.caipAddress;
            }, nextNamespace);
        }
    }
    async handleSwitchWallet(connection, address, namespace) {
        try {
            this.isSwitching = true;
            this.lastSelectedConnectorId = connection.connectorId;
            this.lastSelectedAddress = address;
            const isDifferentNamespace = this.caipNetwork?.chainNamespace !== namespace;
            if (isDifferentNamespace && connection?.caipNetwork) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setFilterByNamespace(namespace);
                await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].switchActiveNetwork(connection?.caipNetwork);
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].switchConnection({
                connection,
                address,
                namespace,
                closeModalOnConnect: false,
                onChange ({ hasSwitchedAccount, hasSwitchedWallet }) {
                    if (hasSwitchedWallet) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Wallet switched');
                    } else if (hasSwitchedAccount) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Account switched');
                    }
                }
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to switch wallet');
        } finally{
            this.isSwitching = false;
        }
    }
    handleWalletAction(params) {
        const { connection, address, isRecentConnection, namespace } = params;
        if (isRecentConnection) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].deleteAddressFromConnection({
                connectorId: connection.connectorId,
                address,
                namespace
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].syncStorageConnections();
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Wallet deleted');
        } else {
            this.handleDisconnect(namespace, connection.connectorId);
        }
    }
    async handleDisconnect(namespace, id) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].disconnect({
                id,
                namespace
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Wallet disconnected');
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to disconnect wallet');
        }
    }
    handleCopyAddress(address) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].copyToClopboard(address);
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Address copied');
    }
    handleMore() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('AccountSettings');
    }
    handleExternalLink(address) {
        const explorerUrl = this.caipNetwork?.blockExplorers?.default.url;
        if (explorerUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(`${explorerUrl}/address/${address}`, '_blank');
        }
    }
    handleAddConnection(namespace) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setFilterByNamespace(namespace);
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('Connect', {
            addWalletForNamespace: namespace
        });
    }
    getChainLabelInfo(namespace) {
        return CHAIN_LABELS[namespace] ?? {
            title: 'Add Wallet',
            description: 'Add your first wallet'
        };
    }
    isSmartAccount(address) {
        if (!this.namespace) {
            return false;
        }
        const smartAccount = this.user?.accounts?.find((account)=>account.type === 'smartAccount');
        if (smartAccount && address) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(smartAccount.address, address);
        }
        return false;
    }
    getPlainAddress() {
        return this.caipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(this.caipAddress) : undefined;
    }
    getActiveConnections(namespace) {
        const connectorId = this.activeConnectorIds[namespace];
        const { connections } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsData(namespace);
        const [connectedConnection] = connections.filter((connection)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(connection.connectorId, connectorId));
        if (!connectorId) {
            return connections;
        }
        const isBitcoin = namespace === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.BITCOIN;
        const { address } = this.caipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ParseUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUtil"].parseCaipAddress(this.caipAddress) : {};
        let addresses = [
            ...address ? [
                address
            ] : []
        ];
        if (isBitcoin && connectedConnection) {
            addresses = connectedConnection.accounts.map((account)=>account.address) || [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].excludeConnectorAddressFromConnections({
            connectorId,
            addresses,
            connections
        });
    }
    hasAnyConnections(namespace) {
        const connections = this.getActiveConnections(namespace);
        const { recentConnections } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsData(namespace);
        return Boolean(this.caipAddress) || connections.length > 0 || recentConnections.length > 0;
    }
    isAccountLoading(connectorId, address) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(this.lastSelectedConnectorId, connectorId) && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(this.lastSelectedAddress, address) && this.isSwitching;
    }
    getProfileContent(params) {
        const { address, connections, connectorId, namespace } = params;
        const [connectedConnection] = connections.filter((connection)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(connection.connectorId, connectorId));
        if (namespace === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.BITCOIN && connectedConnection?.accounts.every((account)=>typeof account.type === 'string')) {
            return this.getBitcoinProfileContent(connectedConnection.accounts, address);
        }
        const authData = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionUtil"].getAuthData({
            connectorId,
            accounts: []
        });
        return [
            {
                address,
                tagLabel: 'Active',
                tagVariant: 'success',
                enableButton: true,
                profileName: this.profileName,
                buttonType: 'disconnect',
                buttonLabel: 'Disconnect',
                buttonVariant: 'neutral-secondary',
                ...authData.isAuth ? {
                    description: this.isSmartAccount(address) ? 'Smart Account' : 'EOA Account'
                } : {}
            }
        ];
    }
    getBitcoinProfileContent(accounts, address) {
        const hasMultipleAccounts = accounts.length > 1;
        const plainAddress = this.getPlainAddress();
        return accounts.map((account)=>{
            const isConnected = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(account.address, plainAddress);
            let label = 'PAYMENT';
            if (account.type === 'ordinal') {
                label = 'ORDINALS';
            }
            return {
                address: account.address,
                tagLabel: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(account.address, address) ? 'Active' : undefined,
                tagVariant: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(account.address, address) ? 'success' : undefined,
                enableButton: true,
                ...hasMultipleAccounts ? {
                    label,
                    alignItems: 'flex-end',
                    buttonType: isConnected ? 'disconnect' : 'switch',
                    buttonLabel: isConnected ? 'Disconnect' : 'Switch',
                    buttonVariant: isConnected ? 'neutral-secondary' : 'accent-secondary'
                } : {
                    alignItems: 'center',
                    buttonType: 'disconnect',
                    buttonLabel: 'Disconnect',
                    buttonVariant: 'neutral-secondary'
                }
            };
        });
    }
    removeScrollListener() {
        const connectEl = this.shadowRoot?.querySelector('.wallet-list');
        if (connectEl) {
            connectEl.removeEventListener('scroll', ()=>this.handleConnectListScroll());
        }
    }
    handleConnectListScroll() {
        const walletListEl = this.shadowRoot?.querySelector('.wallet-list');
        if (walletListEl) {
            this.updateScrollOpacity(walletListEl);
        }
    }
    isMultiWalletEnabled() {
        return Boolean(this.remoteFeatures?.multiWallet);
    }
    updateScrollOpacity(element) {
        element.style.setProperty('--connect-scroll--top-opacity', __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtil"].interpolate([
            0,
            UI_CONFIG.SCROLL_THRESHOLD
        ], UI_CONFIG.OPACITY_RANGE, element.scrollTop).toString());
        element.style.setProperty('--connect-scroll--bottom-opacity', __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtil"].interpolate([
            0,
            UI_CONFIG.SCROLL_THRESHOLD
        ], UI_CONFIG.OPACITY_RANGE, element.scrollHeight - element.scrollTop - element.offsetHeight).toString());
    }
    onConnectionsChange() {
        if (this.isMultiWalletEnabled()) {
            if (this.namespace) {
                const { connections } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsData(this.namespace);
                if (connections.length === 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('ProfileWallets');
                }
            }
        }
        this.requestUpdate();
    }
};
W3mProfileWalletsView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$profile$2d$wallets$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "currentTab", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "namespace", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "namespaces", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "caipAddress", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "profileName", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "activeConnectorIds", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "lastSelectedAddress", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "lastSelectedConnectorId", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "isSwitching", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "caipNetwork", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "user", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mProfileWalletsView.prototype, "remoteFeatures", void 0);
W3mProfileWalletsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-profile-wallets-view')
], W3mProfileWalletsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-fund-wallet-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mFundWalletView",
    ()=>W3mFundWalletView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ExchangeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
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
let W3mFundWalletView = class W3mFundWalletView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.activeCaipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        this.features = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features;
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.exchangesLoading = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].state.isLoading;
        this.exchanges = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].state.exchanges;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('features', (val)=>this.features = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>this.remoteFeatures = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeCaipNetwork', (val)=>{
                this.activeCaipNetwork = val;
                this.setDefaultPaymentAsset();
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].subscribeKey('isLoading', (val)=>this.exchangesLoading = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].subscribeKey('exchanges', (val)=>this.exchanges = val)
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    async firstUpdated() {
        const isPayWithExchangeSupported = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].isPayWithExchangeSupported();
        if (isPayWithExchangeSupported) {
            await this.setDefaultPaymentAsset();
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].fetchExchanges();
        }
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" .padding=${[
            '1',
            '3',
            '3',
            '3'
        ]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `;
    }
    async setDefaultPaymentAsset() {
        if (!this.activeCaipNetwork) {
            return;
        }
        const assets = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId);
        const usdc = assets.find((asset)=>asset.metadata.symbol === 'USDC') || assets[0];
        if (usdc) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].setPaymentAsset(usdc);
        }
    }
    onrampTemplate() {
        if (!this.activeCaipNetwork) {
            return null;
        }
        const isOnrampEnabled = this.remoteFeatures?.onramp;
        const hasNetworkSupport = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);
        if (!isOnrampEnabled || !hasNetworkSupport) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `;
    }
    depositFromExchangeTemplate() {
        if (!this.activeCaipNetwork) {
            return null;
        }
        const isPayWithExchangeSupported = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].isPayWithExchangeSupported();
        if (!isPayWithExchangeSupported) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading || !this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `;
    }
    receiveTemplate() {
        const isReceiveEnabled = Boolean(this.features?.receive);
        if (!isReceiveEnabled) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `;
    }
    onBuyCrypto() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('OnRampProviders');
    }
    onReceive() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('WalletReceive');
    }
    onDepositFromExchange() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ExchangeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeController"].reset();
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('PayWithExchange', {
            redirectView: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.redirectView
        });
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mFundWalletView.prototype, "activeCaipNetwork", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mFundWalletView.prototype, "features", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mFundWalletView.prototype, "remoteFeatures", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mFundWalletView.prototype, "exchangesLoading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mFundWalletView.prototype, "exchanges", void 0);
W3mFundWalletView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-fund-wallet-view')
], W3mFundWalletView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsView",
    ()=>W3mAllWalletsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$certified$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-certified-switch.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$search$2d$bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-search-bar.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$search$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js [app-client] (ecmascript)");
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
let W3mAllWalletsView = class W3mAllWalletsView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super(...arguments);
        this.search = '';
        this.badge = undefined;
        this.onDebouncedSearch = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].debounce((value)=>{
            this.search = value;
        });
    }
    render() {
        const isSearch = this.search.length >= 2;
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex .padding=${[
            '1',
            '3',
            '3',
            '3'
        ]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === 'certified'}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>` : __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `;
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    onCertifiedSwitchChange(event) {
        if (event.detail) {
            this.badge = 'certified';
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSvg('Only WalletConnect certified', {
                icon: 'walletConnectBrown',
                iconColor: 'accent-100'
            });
        } else {
            this.badge = undefined;
        }
    }
    qrButtonTemplate() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
        }
        return null;
    }
    onWalletConnectQr() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect');
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsView.prototype, "search", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-all-wallets-view')
], W3mAllWalletsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ durations })=>durations['lg']}
      ${({ easings })=>easings['ease-out-power-2']};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({ durations })=>durations['lg']}
      ${({ easings })=>easings['ease-out-power-2']};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({ spacing })=>spacing['3']} calc(${({ spacing })=>spacing['3']} * -1);
    width: calc(100% + ${({ spacing })=>spacing['3']} * 2);
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectView",
    ()=>W3mConnectView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators/state.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$class$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/class-map.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$class$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/class-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/MathUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$ux$2d$by$2d$reown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$email$2d$login$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$legal$2d$checkbox$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$social$2d$login$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$wallet$2d$login$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-login-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connect$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/styles.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
const SCROLL_THRESHOLD = 470;
let W3mConnectView = class W3mConnectView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.authConnector = this.connectors.find((c)=>c.type === 'AUTH');
        this.features = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features;
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.enableWallets = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableWallets;
        this.noAdapters = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters;
        this.walletGuide = 'get-started';
        this.checked = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsStateController"].state.isLegalCheckboxChecked;
        this.isEmailEnabled = this.remoteFeatures?.email && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters;
        this.isSocialEnabled = this.remoteFeatures?.socials && this.remoteFeatures.socials.length > 0 && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters;
        this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>{
            this.connectors = val;
            this.authConnector = this.connectors.find((c)=>c.type === 'AUTH');
            this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
        }), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('features', (val)=>{
            this.features = val;
        }), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>{
            this.remoteFeatures = val;
            this.setEmailAndSocialEnableCheck(this.noAdapters, this.remoteFeatures);
        }), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('enableWallets', (val)=>this.enableWallets = val), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('noAdapters', (val)=>this.setEmailAndSocialEnableCheck(val, this.remoteFeatures)), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsStateController"].subscribeKey('isLegalCheckboxChecked', (val)=>this.checked = val));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
        this.resizeObserver?.disconnect();
        const connectEl = this.shadowRoot?.querySelector('.connect');
        connectEl?.removeEventListener('scroll', this.handleConnectListScroll.bind(this));
    }
    firstUpdated() {
        const connectEl = this.shadowRoot?.querySelector('.connect');
        if (connectEl) {
            requestAnimationFrame(this.handleConnectListScroll.bind(this));
            connectEl?.addEventListener('scroll', this.handleConnectListScroll.bind(this));
            this.resizeObserver = new ResizeObserver(()=>{
                this.handleConnectListScroll();
            });
            this.resizeObserver?.observe(connectEl);
            this.handleConnectListScroll();
        }
    }
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const isLegalCheckbox = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features?.legalCheckbox;
        const legalUrl = termsConditionsUrl || privacyPolicyUrl;
        const isShowLegalCheckbox = Boolean(legalUrl) && Boolean(isLegalCheckbox) && this.walletGuide === 'get-started';
        const isDisabled = isShowLegalCheckbox && !this.checked;
        const classes = {
            connect: true,
            disabled: isDisabled
        };
        const isEnableWalletGuide = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableWalletGuide;
        const isEnableWallets = this.enableWallets;
        const socialOrEmailLoginEnabled = this.isSocialEnabled || this.authConnector;
        const tabIndex = isDisabled ? -1 : undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${[
            '0',
            '0',
            '4',
            '0'
        ]}
          class=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$class$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classMap"])(classes)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${socialOrEmailLoginEnabled && isEnableWallets && isEnableWalletGuide && this.walletGuide === 'get-started' ? [
            '0',
            '3',
            '0',
            '3'
        ] : [
            '0',
            '3',
            '3',
            '3'
        ]}
          >
            ${this.renderConnectMethod(tabIndex)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
    }
    reownBrandingTemplate() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].hasFooter()) {
            return null;
        }
        if (!this.remoteFeatures?.reownBranding) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    setEmailAndSocialEnableCheck(noAdapters, remoteFeatures) {
        this.isEmailEnabled = remoteFeatures?.email && !noAdapters;
        this.isSocialEnabled = remoteFeatures?.socials && remoteFeatures.socials.length > 0 && !noAdapters;
        this.remoteFeatures = remoteFeatures;
        this.noAdapters = noAdapters;
    }
    checkIfAuthEnabled(connectors) {
        const namespacesWithAuthConnector = connectors.filter((c)=>c.type === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_AUTH).map((i)=>i.chain);
        const authSupportedNamespaces = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS;
        return authSupportedNamespaces.some((ns)=>namespacesWithAuthConnector.includes(ns));
    }
    renderConnectMethod(tabIndex) {
        const connectMethodsOrder = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].getConnectOrderMethod(this.features, this.connectors);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`${connectMethodsOrder.map((method, index)=>{
            switch(method){
                case 'email':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`${this.emailTemplate(tabIndex)} ${this.separatorTemplate(index, 'email')}`;
                case 'social':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`${this.socialListTemplate(tabIndex)}
          ${this.separatorTemplate(index, 'social')}`;
                case 'wallet':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`${this.walletListTemplate(tabIndex)}
          ${this.separatorTemplate(index, 'wallet')}`;
                default:
                    return null;
            }
        })}`;
    }
    checkMethodEnabled(name) {
        switch(name){
            case 'wallet':
                return this.enableWallets;
            case 'social':
                return this.isSocialEnabled && this.isAuthEnabled;
            case 'email':
                return this.isEmailEnabled && this.isAuthEnabled;
            default:
                return null;
        }
    }
    checkIsThereNextMethod(currentIndex) {
        const connectMethodsOrder = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].getConnectOrderMethod(this.features, this.connectors);
        const nextMethod = connectMethodsOrder[currentIndex + 1];
        if (!nextMethod) {
            return undefined;
        }
        const isNextMethodEnabled = this.checkMethodEnabled(nextMethod);
        if (isNextMethodEnabled) {
            return nextMethod;
        }
        return this.checkIsThereNextMethod(currentIndex + 1);
    }
    separatorTemplate(index, type) {
        const nextEnabledMethod = this.checkIsThereNextMethod(index);
        const isExplore = this.walletGuide === 'explore';
        switch(type){
            case 'wallet':
                {
                    const isWalletEnable = this.enableWallets;
                    return isWalletEnable && nextEnabledMethod && !isExplore ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-separator data-testid="wui-separator" text="or"></wui-separator>` : null;
                }
            case 'email':
                {
                    const isNextMethodSocial = nextEnabledMethod === 'social';
                    return this.isAuthEnabled && this.isEmailEnabled && !isNextMethodSocial && nextEnabledMethod ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>` : null;
                }
            case 'social':
                {
                    const isNextMethodEmail = nextEnabledMethod === 'email';
                    return this.isAuthEnabled && this.isSocialEnabled && !isNextMethodEmail && nextEnabledMethod ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-separator data-testid="wui-separator" text="or"></wui-separator>` : null;
                }
            default:
                return null;
        }
    }
    emailTemplate(tabIndex) {
        if (!this.isEmailEnabled || !this.isAuthEnabled) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-email-login-widget tabIdx=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(tabIndex)}></w3m-email-login-widget>`;
    }
    socialListTemplate(tabIndex) {
        if (!this.isSocialEnabled || !this.isAuthEnabled) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(tabIndex)}
    ></w3m-social-login-widget>`;
    }
    walletListTemplate(tabIndex) {
        const isEnableWallets = this.enableWallets;
        const isCollapseWalletsOldProp = this.features?.emailShowWallets === false;
        const isCollapseWallets = this.features?.collapseWallets;
        const shouldCollapseWallets = isCollapseWalletsOldProp || isCollapseWallets;
        if (!isEnableWallets) {
            return null;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() && (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafari() || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos())) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].connectWalletConnect().catch((_e)=>({}));
        }
        if (this.walletGuide === 'explore') {
            return null;
        }
        const hasOtherMethods = this.isAuthEnabled && (this.isEmailEnabled || this.isSocialEnabled);
        if (hasOtherMethods && shouldCollapseWallets) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(tabIndex)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-wallet-login-list tabIdx=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(tabIndex)}></w3m-wallet-login-list>`;
    }
    legalCheckboxTemplate() {
        if (this.walletGuide === 'explore') {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
    }
    handleConnectListScroll() {
        const connectEl = this.shadowRoot?.querySelector('.connect');
        if (!connectEl) {
            return;
        }
        const shouldApplyMask = connectEl.scrollHeight > SCROLL_THRESHOLD;
        if (shouldApplyMask) {
            connectEl.style.setProperty('--connect-mask-image', `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`);
            connectEl.style.setProperty('--connect-scroll--top-opacity', __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtil"].interpolate([
                0,
                50
            ], [
                0,
                1
            ], connectEl.scrollTop).toString());
            connectEl.style.setProperty('--connect-scroll--bottom-opacity', __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtil"].interpolate([
                0,
                50
            ], [
                0,
                1
            ], connectEl.scrollHeight - connectEl.scrollTop - connectEl.offsetHeight).toString());
        } else {
            connectEl.style.setProperty('--connect-mask-image', 'none');
            connectEl.style.setProperty('--connect-scroll--top-opacity', '0');
            connectEl.style.setProperty('--connect-scroll--bottom-opacity', '0');
        }
    }
    onContinueWalletClick() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectWallets');
    }
};
W3mConnectView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connect$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "connectors", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "authConnector", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "features", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "remoteFeatures", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "enableWallets", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "noAdapters", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectView.prototype, "walletGuide", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "checked", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "isEmailEnabled", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "isSocialEnabled", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectView.prototype, "isAuthEnabled", void 0);
W3mConnectView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-view')
], W3mConnectView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-external-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingExternalView",
    ()=>W3mConnectingExternalView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConnectionControllerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)");
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
let W3mConnectingExternalView = class W3mConnectingExternalView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWidget"] {
    constructor(){
        super();
        this.externalViewUnsubscribe = [];
        this.connectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].getConnections(this.connector?.chain);
        this.hasMultipleConnections = this.connectionsByNamespace.length > 0;
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.currentActiveConnectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.activeConnectorIds[this.connector?.chain];
        if (!this.connector) {
            throw new Error('w3m-connecting-view: No connector provided');
        }
        const namespace = this.connector?.chain;
        if (this.isAlreadyConnected(this.connector)) {
            this.secondaryBtnLabel = undefined;
            this.label = `This account is already linked, change your account in ${this.connector.name}`;
            this.secondaryLabel = `To link a new account, open ${this.connector.name} and switch to the account you want to link`;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.connector.name ?? 'Unknown',
                platform: 'browser',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet?.order,
                view: __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.view
            }
        });
        this.onConnect = this.onConnectProxy.bind(this);
        this.onAutoConnect = this.onConnectProxy.bind(this);
        this.isWalletConnect = false;
        this.externalViewUnsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('activeConnectorIds', (val)=>{
            const newActiveConnectorId = val[namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            const { redirectView } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data ?? {};
            if (newActiveConnectorId !== this.currentActiveConnectorId) {
                if (this.hasMultipleConnections && isMultiWalletEnabled) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('ProfileWallets');
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('New Wallet Added');
                } else if (redirectView) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace(redirectView);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
                }
            }
        }), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('connections', this.onConnectionsChange.bind(this)));
    }
    disconnectedCallback() {
        this.externalViewUnsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    async onConnectProxy() {
        try {
            this.error = false;
            if (this.connector) {
                if (this.isAlreadyConnected(this.connector)) {
                    return;
                }
                if (this.connector.id !== __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK || !this.error) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].connectExternal(this.connector, this.connector.chain);
                }
            }
        } catch (error) {
            const isUserRejectedRequestError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppKitError"] && error.originalName === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: {
                        message: error.message
                    }
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: {
                        message: error?.message ?? 'Unknown'
                    }
                });
            }
            this.error = true;
        }
    }
    onConnectionsChange(connections) {
        if (this.connector?.chain && connections.get(this.connector.chain) && this.isAlreadyConnected(this.connector)) {
            const newConnections = connections.get(this.connector.chain) ?? [];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            if (newConnections.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('Connect');
            } else {
                const accounts = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsByConnectorId(this.connectionsByNamespace, this.connector.id).flatMap((c)=>c.accounts);
                const newAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectionControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionControllerUtil"].getConnectionsByConnectorId(newConnections, this.connector.id).flatMap((c)=>c.accounts);
                if (newAccounts.length === 0) {
                    if (this.hasMultipleConnections && isMultiWalletEnabled) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('ProfileWallets');
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Wallet deleted');
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
                    }
                } else {
                    const isAllAccountsSame = accounts.every((a)=>newAccounts.some((b)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(a.address, b.address)));
                    if (!isAllAccountsSame && isMultiWalletEnabled) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('ProfileWallets');
                    }
                }
            }
        }
    }
    isAlreadyConnected(connector) {
        return Boolean(connector) && this.connectionsByNamespace.some((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(c.connectorId, connector.id));
    }
};
W3mConnectingExternalView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-external-view')
], W3mConnectingExternalView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingMultiChainView",
    ()=>W3mConnectingMultiChainView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$wallet$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$multi$2d$chain$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/styles.js [app-client] (ecmascript)");
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
let W3mConnectingMultiChainView = class W3mConnectingMultiChainView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.activeConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.activeConnector;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('activeConnector', (val)=>this.activeConnector = val)
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
            '3',
            '5',
            '5',
            '5'
        ]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[
            '0',
            '3',
            '0',
            '3'
        ]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[
            '2',
            '0',
            '2',
            '0'
        ]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
    }
    networksTemplate() {
        return this.activeConnector?.connectors?.map((connector, index)=>connector.name ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
            <w3m-list-wallet
              displayIndex=${index}
              imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getChainImage(connector.chain))}
              name=${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP[connector.chain]}
              @click=${()=>this.onConnector(connector)}
              size="sm"
              data-testid="wui-list-chain-${connector.chain}"
              rdnsId=${connector.explorerWallet?.rdns}
            ></w3m-list-wallet>
          ` : null);
    }
    onConnector(provider) {
        const connector = this.activeConnector?.connectors?.find((p)=>p.chain === provider.chain);
        const redirectView = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.redirectView;
        if (!connector) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to find connector');
            return;
        }
        if (connector.id === 'walletConnect') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('AllWallets');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect', {
                    redirectView
                });
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingExternal', {
                connector,
                redirectView,
                wallet: this.activeConnector?.explorerWallet
            });
        }
    }
};
W3mConnectingMultiChainView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$multi$2d$chain$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingMultiChainView.prototype, "activeConnector", void 0);
W3mConnectingMultiChainView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-multi-chain-view')
], W3mConnectingMultiChainView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcView",
    ()=>W3mConnectingWcView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$header$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$desktop$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$mobile$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$qrcode$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$unsupported$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$web$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/styles.js [app-client] (ecmascript)");
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
let W3mConnectingWcView = class W3mConnectingWcView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.wallet;
        this.unsubscribe = [];
        this.platform = undefined;
        this.platforms = [];
        this.isSiwxEnabled = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx);
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.displayBranding = true;
        this.basic = false;
        this.determinePlatforms();
        this.initializeConnection();
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>this.remoteFeatures = val));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableMobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
    }
    reownBrandingTemplate() {
        if (!this.remoteFeatures?.reownBranding || !this.displayBranding) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    async initializeConnection(retry = false) {
        if (this.platform === 'browser' || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.manualWCControl && !retry) {
            return;
        }
        try {
            const { wcPairingExpiry, status } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state;
            const { redirectView } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data ?? {};
            if (retry || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEmbedded || __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isPairingExpired(wcPairingExpiry) || status === 'connecting') {
                const connectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].getConnections(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
                const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
                const hasConnections = connectionsByNamespace.length > 0;
                await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].connectWalletConnect({
                    cache: 'never'
                });
                if (!this.isSiwxEnabled) {
                    if (hasConnections && isMultiWalletEnabled) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('ProfileWallets');
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('New Wallet Added');
                    } else if (redirectView) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace(redirectView);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
                    }
                }
            }
        } catch (error) {
            if (error instanceof Error && error.message.includes('An error occurred when attempting to switch chain') && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableNetworkSwitch) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveCaipNetwork(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$CaipNetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaipNetworksUtil"].getUnsupportedNetwork(`${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain}:${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork?.id}`));
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].showUnsupportedChainUI();
                    return;
                }
            }
            const isUserRejectedRequestError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$withErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppKitError"] && error.originalName === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ErrorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorUtil"].PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: {
                        message: error.message
                    }
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: {
                        message: error?.message ?? 'Unknown'
                    }
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError(error.message ?? 'Connection error');
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetWcConnection();
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].goBack();
        }
    }
    determinePlatforms() {
        if (!this.wallet) {
            this.platforms.push('qrcode');
            this.platform = 'qrcode';
            return;
        }
        if (this.platform) {
            return;
        }
        const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
        const injectedIds = injected?.map(({ injected_id })=>injected_id).filter(Boolean);
        const browserIds = [
            ...rdns ? [
                rdns
            ] : injectedIds ?? []
        ];
        const isBrowser = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.isUniversalProvider ? false : browserIds.length;
        const hasMobileWCLink = mobile_link;
        const isWebWc = webapp_link;
        const isBrowserInstalled = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].checkInstalled(browserIds);
        const isBrowserWc = isBrowser && isBrowserInstalled;
        const isDesktopWc = desktop_link && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile();
        if (isBrowserWc && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters) {
            this.platforms.push('browser');
        }
        if (hasMobileWCLink) {
            this.platforms.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile() ? 'mobile' : 'qrcode');
        }
        if (isWebWc) {
            this.platforms.push('web');
        }
        if (isDesktopWc) {
            this.platforms.push('desktop');
        }
        if (!isBrowserWc && isBrowser && !__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters) {
            this.platforms.push('unsupported');
        }
        this.platform = this.platforms[0];
    }
    platformTemplate() {
        switch(this.platform){
            case 'browser':
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
            case 'web':
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
            case 'desktop':
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
            case 'mobile':
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
            case 'qrcode':
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
        }
    }
    headerTemplate() {
        const multiPlatform = this.platforms.length > 1;
        if (!multiPlatform) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
    }
    async onSelectPlatform(platform) {
        const container = this.shadowRoot?.querySelector('div');
        if (container) {
            await container.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.platform = platform;
            container.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mConnectingWcView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "platforms", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Boolean
    })
], W3mConnectingWcView.prototype, "displayBranding", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Boolean
    })
], W3mConnectingWcView.prototype, "basic", void 0);
W3mConnectingWcView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-view')
], W3mConnectingWcView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcBasicView",
    ()=>W3mConnectingWcBasicView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connector$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js [app-client] (ecmascript)");
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
let W3mConnectingWcBasicView = class W3mConnectingWcBasicView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.isMobile = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile();
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>this.remoteFeatures = val));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        if (this.isMobile) {
            const { featured, recommended } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state;
            const { customWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
            const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
            const showConnectors = featured.length || recommended.length || customWallets?.length || recent.length;
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-flex flexDirection="column" gap="2" .margin=${[
                '1',
                '3',
                '3',
                '3'
            ]}>
        ${showConnectors ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-flex flexDirection="column" .padding=${[
            '0',
            '0',
            '4',
            '0'
        ]}>
        <w3m-connecting-wc-view ?basic=${true} .displayBranding=${false}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${[
            '0',
            '3',
            '0',
            '3'
        ]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
    }
    reownBrandingTemplate() {
        if (!this.remoteFeatures?.reownBranding) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]` <wui-flex flexDirection="column" .padding=${[
            '1',
            '0',
            '1',
            '0'
        ]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`;
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcBasicView.prototype, "remoteFeatures", void 0);
W3mConnectingWcBasicView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-basic-view')
], W3mConnectingWcBasicView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  .continue-button-container {
    width: 100%;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mChooseAccountNameView",
    ()=>W3mChooseAccountNameView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NavigationUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/NavigationUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$choose$2d$account$2d$name$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/styles.js [app-client] (ecmascript)");
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
let W3mChooseAccountNameView = class W3mChooseAccountNameView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super(...arguments);
        this.loading = false;
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[
            '0',
            '0',
            '4',
            '0'
        ]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NavigationUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationUtil"].URLS.FAQ, '_blank');
        }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
    }
    onboardingTemplate() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[
            '0',
            '6',
            '0',
            '6'
        ]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
    }
    buttonsTemplate() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-flex
      .padding=${[
            '0',
            '8',
            '0',
            '8'
        ]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
    }
    handleContinue() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('RegisterAccountName');
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'OPEN_ENS_FLOW',
            properties: {
                isSmartAccount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreferredAccountType"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain) === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT
            }
        });
    }
};
W3mChooseAccountNameView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$choose$2d$account$2d$name$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mChooseAccountNameView.prototype, "loading", void 0);
W3mChooseAccountNameView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-choose-account-name-view')
], W3mChooseAccountNameView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mDownloadsView",
    ()=>W3mDownloadsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
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
let W3mDownloadsView = class W3mDownloadsView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super(...arguments);
        this.wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.wallet;
    }
    render() {
        if (!this.wallet) {
            throw new Error('w3m-downloads-view');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex gap="2" flexDirection="column" .padding=${[
            '3',
            '3',
            '4',
            '3'
        ]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
    }
    chromeTemplate() {
        if (!this.wallet?.chrome_store) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`;
    }
    iosTemplate() {
        if (!this.wallet?.app_store) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`;
    }
    androidTemplate() {
        if (!this.wallet?.play_store) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`;
    }
    homepageTemplate() {
        if (!this.wallet?.homepage) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `;
    }
    openStore(params) {
        if (params.href && this.wallet) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'GET_WALLET',
                properties: {
                    name: this.wallet.name,
                    walletRank: this.wallet.order,
                    explorerId: this.wallet.id,
                    type: params.type
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(params.href, '_blank');
        }
    }
    onChromeStore() {
        if (this.wallet?.chrome_store) {
            this.openStore({
                href: this.wallet.chrome_store,
                type: 'chrome_store'
            });
        }
    }
    onAppStore() {
        if (this.wallet?.app_store) {
            this.openStore({
                href: this.wallet.app_store,
                type: 'app_store'
            });
        }
    }
    onPlayStore() {
        if (this.wallet?.play_store) {
            this.openStore({
                href: this.wallet.play_store,
                type: 'play_store'
            });
        }
    }
    onHomePage() {
        if (this.wallet?.homepage) {
            this.openStore({
                href: this.wallet.homepage,
                type: 'homepage'
            });
        }
    }
};
W3mDownloadsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-downloads-view')
], W3mDownloadsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-get-wallet-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mGetWalletView",
    ()=>W3mGetWalletView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
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
const EXPLORER = 'https://walletconnect.com/explorer';
let W3mGetWalletView = class W3mGetWalletView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex flexDirection="column" .padding=${[
            '0',
            '3',
            '3',
            '3'
        ]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref('https://walletconnect.com/explorer?type=wallet', '_blank');
        }}
        ></w3m-list-wallet>
      </wui-flex>
    `;
    }
    recommendedWalletsTemplate() {
        const { recommended, featured } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state;
        const { customWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const wallets = [
            ...featured,
            ...customWallets ?? [],
            ...recommended
        ].slice(0, 4);
        return wallets.map((wallet, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <w3m-list-wallet
          displayIndex=${index}
          name=${wallet.name ?? 'Unknown'}
          tagVariant="accent"
          size="sm"
          imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(wallet))}
          @click=${()=>{
                this.onWalletClick(wallet);
            }}
        ></w3m-list-wallet>
      `);
    }
    onWalletClick(wallet) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'GET_WALLET',
            properties: {
                name: wallet.name,
                walletRank: undefined,
                explorerId: wallet.id,
                type: 'homepage'
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(wallet.homepage ?? EXPLORER, '_blank');
    }
};
W3mGetWalletView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-get-wallet-view')
], W3mGetWalletView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mWhatIsAWalletView",
    ()=>W3mWhatIsAWalletView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$help$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-help-widget/index.js [app-client] (ecmascript)");
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
const data = [
    {
        images: [
            'login',
            'profile',
            'lock'
        ],
        title: 'One login for all of web3',
        text: 'Log in to any app by connecting your wallet. Say goodbye to countless passwords!'
    },
    {
        images: [
            'defi',
            'nft',
            'eth'
        ],
        title: 'A home for your digital assets',
        text: 'A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.'
    },
    {
        images: [
            'browser',
            'noun',
            'dao'
        ],
        title: 'Your gateway to a new web',
        text: 'With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.'
    }
];
let W3mWhatIsAWalletView = class W3mWhatIsAWalletView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        .padding=${[
            '6',
            '5',
            '5',
            '5'
        ]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
    }
    onGetWallet() {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'CLICK_GET_WALLET_HELP'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('GetWallet');
    }
};
W3mWhatIsAWalletView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-what-is-a-wallet-view')
], W3mWhatIsAWalletView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({ durations })=>durations['lg']}
      ${({ easings })=>easings['ease-out-power-2']};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectWalletsView",
    ()=>W3mConnectWalletsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$legal$2d$checkbox$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$wallet$2d$login$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-login-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connect$2d$wallets$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/styles.js [app-client] (ecmascript)");
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
let W3mConnectWalletsView = class W3mConnectWalletsView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.checked = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsStateController"].state.isLegalCheckboxChecked;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsStateController"].subscribeKey('isLegalCheckboxChecked', (val)=>{
            this.checked = val;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const legalCheckbox = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features?.legalCheckbox;
        const legalUrl = termsConditionsUrl || privacyPolicyUrl;
        const showLegalCheckbox = Boolean(legalUrl) && Boolean(legalCheckbox);
        const disabled = showLegalCheckbox && !this.checked;
        const tabIndex = disabled ? -1 : undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${showLegalCheckbox ? [
            '0',
            '3',
            '3',
            '3'
        ] : '3'}
        gap="2"
        class=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(disabled ? 'disabled' : undefined)}
      >
        <w3m-wallet-login-list tabIdx=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(tabIndex)}></w3m-wallet-login-list>
      </wui-flex>
    `;
    }
};
W3mConnectWalletsView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connect$2d$wallets$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectWalletsView.prototype, "checked", void 0);
W3mConnectWalletsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-wallets-view')
], W3mConnectWalletsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mNetworkSwitchView",
    ()=>W3mNetworkSwitchView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$loading$2d$hexagon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-hexagon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$network$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-network-image.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$network$2d$switch$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/styles.js [app-client] (ecmascript)");
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
let W3mNetworkSwitchView = class W3mNetworkSwitchView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.network = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.network;
        this.unsubscribe = [];
        this.showRetry = false;
        this.error = false;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    firstUpdated() {
        this.onSwitchNetwork();
    }
    render() {
        if (!this.network) {
            throw new Error('w3m-network-switch-view: No network provided');
        }
        this.onShowRetry();
        const label = this.getLabel();
        const subLabel = this.getSubLabel();
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${[
            '10',
            '5',
            '10',
            '5'
        ]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${label}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
    }
    getSubLabel() {
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        if (authConnector && connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH) {
            return '';
        }
        return this.error ? 'Switch can be declined if chain is not supported by a wallet or previous request is still active' : 'Accept connection request in your wallet';
    }
    getLabel() {
        const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain);
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        if (authConnector && connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH) {
            return `Switching to ${this.network?.name ?? 'Unknown'} network...`;
        }
        return this.error ? 'Switch declined' : 'Approve in wallet';
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
    async onSwitchNetwork() {
        try {
            this.error = false;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain !== this.network?.chainNamespace) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setIsSwitchingNamespace(true);
            }
            if (this.network) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].switchActiveNetwork(this.network);
                const isAuthenticated = await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].isAuthenticated();
                if (isAuthenticated) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].goBack();
                }
            }
        } catch (error) {
            this.error = true;
        }
    }
};
W3mNetworkSwitchView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$network$2d$switch$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-network-switch-view')
], W3mNetworkSwitchView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mNetworksView",
    ()=>W3mNetworksView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$input$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-input-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-network.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$networks$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/styles.js [app-client] (ecmascript)");
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
let W3mNetworksView = class W3mNetworksView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
        this.network = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        this.requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getCaipNetworks();
        this.search = '';
        this.onDebouncedSearch = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].debounce((value)=>{
            this.search = value;
        }, 100);
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].subscribeNetworkImages(()=>this.requestUpdate()), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeCaipNetwork', (val)=>this.network = val), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribe(()=>{
            this.requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${[
            '0',
            '3',
            '3',
            '3'
        ]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `;
    }
    templateSearchInput() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex gap="2" .padding=${[
            '0',
            '3',
            '3',
            '3'
        ]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    networksTemplate() {
        const approvedCaipNetworkIds = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllApprovedCaipNetworkIds();
        const sortedNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].sortRequestedNetworks(approvedCaipNetworkIds, this.requestedCaipNetworks);
        if (this.search) {
            this.filteredNetworks = sortedNetworks?.filter((network)=>network?.name?.toLowerCase().includes(this.search.toLowerCase()));
        } else {
            this.filteredNetworks = sortedNetworks;
        }
        return this.filteredNetworks?.map((network)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <wui-list-network
          .selected=${this.network?.id === network.id}
          imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${()=>this.onSwitchNetwork(network)}
          .disabled=${__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].isCaipNetworkDisabled(network)}
          data-testid=${`w3m-network-switch-${network.name ?? network.id}`}
        ></wui-list-network>
      `);
    }
    onSwitchNetwork(network) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].onSwitchNetwork({
            network
        });
    }
};
W3mNetworksView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$networks$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mNetworksView.prototype, "network", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mNetworksView.prototype, "requestedCaipNetworks", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mNetworksView.prototype, "filteredNetworks", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mNetworksView.prototype, "search", void 0);
W3mNetworksView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-networks-view')
], W3mNetworksView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({ borderRadius })=>borderRadius['1']} * 9 - ${({ borderRadius })=>borderRadius['3']}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({ borderRadius })=>borderRadius['1']} * 9 - ${({ borderRadius })=>borderRadius['3']}
    );
    box-shadow: inset 0 0 0 1px ${({ tokens })=>tokens.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing })=>spacing['1']} * -1);
    bottom: calc(${({ spacing })=>spacing['1']} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({ durations })=>durations['lg']} ${({ easings })=>easings['ease-out-power-2']},
      transform ${({ durations })=>durations['lg']}
        ${({ easings })=>easings['ease-out-power-2']};
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

  wui-link {
    padding: ${({ spacing })=>spacing['01']} ${({ spacing })=>spacing['2']};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mSwitchActiveChainView",
    ()=>W3mSwitchActiveChainView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$switch$2d$active$2d$chain$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/styles.js [app-client] (ecmascript)");
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
const chainIconNameMap = {
    eip155: 'eth',
    solana: 'solana',
    bip122: 'bitcoin',
    polkadot: undefined
};
let W3mSwitchActiveChainView = class W3mSwitchActiveChainView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super(...arguments);
        this.unsubscribe = [];
        this.switchToChain = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.switchToChain;
        this.caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.network;
        this.activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
    }
    firstUpdated() {
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].subscribeKey('activeChain', (val)=>this.activeChain = val));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const switchedChainNameString = this.switchToChain ? __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP[this.switchToChain] : 'supported';
        if (!this.switchToChain) {
            return null;
        }
        const nextChainName = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP[this.switchToChain];
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
            '4',
            '2',
            '2',
            '2'
        ]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(chainIconNameMap[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${nextChainName}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${nextChainName}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${switchedChainNameString} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
    }
    async switchActiveChain() {
        if (!this.switchToChain) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setIsSwitchingNamespace(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setFilterByNamespace(this.switchToChain);
        if (this.caipNetwork) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].switchActiveNetwork(this.caipNetwork);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveNamespace(this.switchToChain);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Connect');
    }
};
W3mSwitchActiveChainView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$switch$2d$active$2d$chain$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mSwitchActiveChainView.prototype, "activeChain", void 0);
W3mSwitchActiveChainView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-switch-active-chain-view')
], W3mSwitchActiveChainView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-network-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mWhatIsANetworkView",
    ()=>W3mWhatIsANetworkView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$help$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-help-widget/index.js [app-client] (ecmascript)");
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
const data = [
    {
        images: [
            'network',
            'layers',
            'system'
        ],
        title: 'The system’s nuts and bolts',
        text: 'A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.'
    },
    {
        images: [
            'noun',
            'defiAlt',
            'dao'
        ],
        title: 'Designed for different uses',
        text: 'Each network is designed differently, and may therefore suit certain apps and experiences.'
    }
];
let W3mWhatIsANetworkView = class W3mWhatIsANetworkView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        .padding=${[
            '6',
            '5',
            '5',
            '5'
        ]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref('https://ethereum.org/en/developers/docs/networks/', '_blank');
        }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
};
W3mWhatIsANetworkView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-what-is-a-network-view')
], W3mWhatIsANetworkView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mUnsupportedChainView",
    ()=>W3mUnsupportedChainView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-network.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-separator.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$unsupported$2d$chain$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/styles.js [app-client] (ecmascript)");
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
let W3mUnsupportedChainView = class W3mUnsupportedChainView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.swapUnsupportedChain = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.swapUnsupportedChain;
        this.unsubscribe = [];
        this.disconnecting = false;
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].subscribeNetworkImages(()=>this.requestUpdate()), __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>{
            this.remoteFeatures = val;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${[
            '3',
            '5',
            '2',
            '5'
        ]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    descriptionTemplate() {
        if (this.swapUnsupportedChain) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
    }
    networksTemplate() {
        const requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const approvedCaipNetworkIds = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllApprovedCaipNetworkIds();
        const sortedNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        const filteredNetworks = this.swapUnsupportedChain ? sortedNetworks.filter((network)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SWAP_SUPPORTED_NETWORKS.includes(network.caipNetworkId)) : sortedNetworks;
        return filteredNetworks.map((network)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <wui-list-network
          imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getNetworkImage(network))}
          name=${network.name ?? 'Unknown'}
          @click=${()=>this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
    }
    async onDisconnect() {
        try {
            this.disconnecting = true;
            const namespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
            const connectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].getConnections(namespace);
            const hasConnections = connectionsByNamespace.length > 0;
            const connectorId = namespace && __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.activeConnectorIds[namespace];
            const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].disconnect(isMultiWalletEnabled ? {
                id: connectorId,
                namespace
            } : {});
            if (hasConnections && isMultiWalletEnabled) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ProfileWallets');
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Wallet deleted');
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'DISCONNECT_ERROR',
                properties: {
                    message: 'Failed to disconnect'
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to disconnect');
        } finally{
            this.disconnecting = false;
        }
    }
    async onSwitchNetwork(network) {
        const caipAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getActiveCaipAddress();
        const approvedCaipNetworkIds = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllApprovedCaipNetworkIds();
        const shouldSupportAllNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getNetworkProp('supportsAllNetworks', network.chainNamespace);
        const routerData = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data;
        if (caipAddress) {
            if (approvedCaipNetworkIds?.includes(network.caipNetworkId)) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].switchActiveNetwork(network);
            } else if (shouldSupportAllNetworks) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('SwitchNetwork', {
                    ...routerData,
                    network
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('SwitchNetwork', {
                    ...routerData,
                    network
                });
            }
        } else if (!caipAddress) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].setActiveCaipNetwork(network);
            __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('Connect');
        }
    }
};
W3mUnsupportedChainView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$unsupported$2d$chain$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mUnsupportedChainView.prototype, "disconnecting", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mUnsupportedChainView.prototype, "remoteFeatures", void 0);
W3mUnsupportedChainView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-unsupported-chain-view')
], W3mUnsupportedChainView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
 //# sourceMappingURL=styles.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mWalletCompatibleNetworksView",
    ()=>W3mWalletCompatibleNetworksView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ChainControllerUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$banner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-banner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-network.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$wallet$2d$compatible$2d$networks$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js [app-client] (ecmascript)");
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
let W3mWalletCompatibleNetworksView = class W3mWalletCompatibleNetworksView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super();
        this.unsubscribe = [];
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]` <wui-flex flexDirection="column" .padding=${[
            '2',
            '3',
            '3',
            '3'
        ]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
    }
    networkTemplate() {
        const requestedCaipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const approvedCaipNetworkIds = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllApprovedCaipNetworkIds();
        const caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeCaipNetwork;
        const isNetworkEnabledForSmartAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].checkIfSmartAccountEnabled();
        let sortedNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        if (isNetworkEnabledForSmartAccounts && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ChainControllerUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreferredAccountType"])(caipNetwork?.chainNamespace) === __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.SMART_ACCOUNT) {
            if (!caipNetwork) {
                return null;
            }
            sortedNetworks = [
                caipNetwork
            ];
        }
        const namespaceNetworks = sortedNetworks.filter((network)=>network.chainNamespace === caipNetwork?.chainNamespace);
        return namespaceNetworks.map((network)=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
        <wui-list-network
          imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getNetworkImage(network))}
          name=${network.name ?? 'Unknown'}
          ?transparent=${true}
        >
        </wui-list-network>
      `);
    }
};
W3mWalletCompatibleNetworksView.styles = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$wallet$2d$compatible$2d$networks$2d$view$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
W3mWalletCompatibleNetworksView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-wallet-compatible-networks-view')
], W3mWalletCompatibleNetworksView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-siwx-sign-message-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mSIWXSignMessageView",
    ()=>W3mSIWXSignMessageView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$siwx$2d$sign$2d$message$2d$thumbnails$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-siwx-sign-message-thumbnails/index.js [app-client] (ecmascript)");
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
let W3mSIWXSignMessageView = class W3mSIWXSignMessageView extends __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    constructor(){
        super(...arguments);
        this.dappName = __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.metadata?.name;
        this.isCancelling = false;
        this.isSigning = false;
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex justifyContent="center" .padding=${[
            '8',
            '0',
            '6',
            '0'
        ]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[
            '0',
            '20',
            '5',
            '20'
        ]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName ?? 'Dapp'} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
            '0',
            '10',
            '4',
            '10'
        ]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
            '4',
            '5',
            '5',
            '5'
        ]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? 'Cancelling...' : 'Cancel'}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? 'Signing...' : 'Sign'}
        </wui-button>
      </wui-flex>
    `;
    }
    async onSign() {
        this.isSigning = true;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].requestSignMessage();
        } catch (error) {
            if (error instanceof Error && error.message.includes('OTP is required')) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError({
                    message: 'Something went wrong. We need to verify your account again.'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].replace('DataCapture');
                return;
            }
            throw error;
        } finally{
            this.isSigning = false;
        }
    }
    async onCancel() {
        this.isCancelling = true;
        await __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$SIWXUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIWXUtil"].cancelSignMessage().finally(()=>this.isCancelling = false);
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mSIWXSignMessageView.prototype, "isCancelling", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mSIWXSignMessageView.prototype, "isSigning", void 0);
W3mSIWXSignMessageView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-siwx-sign-message-view')
], W3mSIWXSignMessageView);
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=b572f_%40reown_appkit-scaffold-ui_dist_esm_src_views_288406b2._.js.map