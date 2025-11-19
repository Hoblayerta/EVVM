module.exports = [
"[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit/dist/esm/exports/react.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit/dist/esm/src/library/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/exports/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$ethersproject$2f$contracts$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@ethersproject/contracts/lib.esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/frontend-next/config/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Home() {
    const { open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKit"])();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitAccount"])();
    const { walletProvider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitProvider"])('eip155');
    const [balanceA, setBalanceA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0.00');
    const [balanceB, setBalanceB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0.00');
    const [liquidityA, setLiquidityA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const [liquidityB, setLiquidityB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const [nonceA, setNonceA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const [nonceB, setNonceB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [priorityFee, setPriorityFee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0.001');
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('A→B');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: '',
        message: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Contracts
    const [evvmA, setEvvmA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [evvmB, setEvvmB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [balancer, setBalancer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cache para balances
    const [balanceCache, setBalanceCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        A: {
            value: '0',
            timestamp: 0
        },
        B: {
            value: '0',
            timestamp: 0
        }
    });
    const CACHE_TTL = 5000 // 5 segundos
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isConnected && walletProvider && address) {
            initContracts();
        }
    }, [
        isConnected,
        walletProvider,
        address
    ]);
    const initContracts = async ()=>{
        if (!walletProvider) return;
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserProvider"](walletProvider);
            const signer = await provider.getSigner();
            const evvmAContract = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$ethersproject$2f$contracts$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].EVVM_A.address, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].ABI.EVVM, signer);
            const evvmBContract = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$ethersproject$2f$contracts$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].EVVM_B.address, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].ABI.EVVM, signer);
            const balancerContract = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$ethersproject$2f$contracts$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].BALANCER.address, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].ABI.BALANCER, signer);
            setEvvmA(evvmAContract);
            setEvvmB(evvmBContract);
            setBalancer(balancerContract);
            // Cargar datos en paralelo
            await Promise.all([
                refreshBalances(evvmAContract, evvmBContract),
                loadStats(balancerContract)
            ]);
        } catch (error) {
            console.error('Contract init error:', error);
            showStatus('error', '❌ Failed to initialize contracts');
        }
    };
    const refreshBalances = async (contractA, contractB)=>{
        if (!address) return;
        const evvmAContract = contractA || evvmA;
        const evvmBContract = contractB || evvmB;
        if (!evvmAContract || !evvmBContract) return;
        try {
            const now = Date.now();
            const balancesPromises = [];
            // Check cache for EVVM-A
            if (now - balanceCache.A.timestamp > CACHE_TTL) {
                balancesPromises.push(evvmAContract.getBalance(address, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].EVVM_A.principalToken).then((bal)=>{
                    const formatted = (Number(bal) / 1e18).toFixed(4);
                    setBalanceCache((prev)=>({
                            ...prev,
                            A: {
                                value: formatted,
                                timestamp: now
                            }
                        }));
                    return formatted;
                }));
            } else {
                balancesPromises.push(Promise.resolve(balanceCache.A.value));
            }
            // Check cache for EVVM-B
            if (now - balanceCache.B.timestamp > CACHE_TTL) {
                balancesPromises.push(evvmBContract.getBalance(address, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$frontend$2d$next$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].EVVM_B.principalToken).then((bal)=>{
                    const formatted = (Number(bal) / 1e18).toFixed(4);
                    setBalanceCache((prev)=>({
                            ...prev,
                            B: {
                                value: formatted,
                                timestamp: now
                            }
                        }));
                    return formatted;
                }));
            } else {
                balancesPromises.push(Promise.resolve(balanceCache.B.value));
            }
            const [balA, balB] = await Promise.all(balancesPromises);
            setBalanceA(balA);
            setBalanceB(balB);
        } catch (error) {
            console.error('Error refreshing balances:', error);
            setBalanceA('Error');
            setBalanceB('Error');
        }
    };
    const loadStats = async (balancerContract)=>{
        if (!address) return;
        const contract = balancerContract || balancer;
        if (!contract) return;
        try {
            const [liquidity, nA, nB] = await Promise.all([
                contract.getTotalLiquidity(),
                contract.noncesA(address),
                contract.noncesB(address)
            ]);
            setLiquidityA((Number(liquidity.inA) / 1e18).toFixed(2));
            setLiquidityB((Number(liquidity.inB) / 1e18).toFixed(2));
            setNonceA(nA.toString());
            setNonceB(nB.toString());
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    };
    const initiateTransfer = async ()=>{
        if (!isConnected) {
            open();
            return;
        }
        if (!amount || parseFloat(amount) <= 0) {
            showStatus('error', '❌ Please enter valid amount');
            return;
        }
        if (!priorityFee || parseFloat(priorityFee) < 0.001) {
            showStatus('error', '❌ Priority fee must be at least 0.001 ETH');
            return;
        }
        if (!balancer || !address || !walletProvider) return;
        try {
            setLoading(true);
            showStatus('info', '🔄 Preparing transfer...');
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserProvider"](walletProvider);
            const signer = await provider.getSigner();
            const amountWei = BigInt(Math.floor(parseFloat(amount) * 1e18));
            const priorityFeeWei = BigInt(Math.floor(parseFloat(priorityFee) * 1e18));
            // Get nonce
            let nonce;
            if (direction === 'A→B') {
                nonce = await balancer.noncesA(address);
            } else {
                nonce = await balancer.noncesB(address);
            }
            // Create message hash
            const { solidityPackedKeccak256 } = await __turbopack_context__.A("[project]/frutero/evvm/cross-chain-balancer/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)");
            const messageHash = solidityPackedKeccak256([
                'address',
                'uint256',
                'string',
                'uint256',
                'uint256'
            ], [
                address,
                amountWei,
                direction,
                nonce,
                priorityFeeWei
            ]);
            showStatus('info', '✍️ Please sign the message in your wallet...');
            // Sign message
            const signature = await signer.signMessage(Buffer.from(messageHash.slice(2), 'hex'));
            // Save pending transfer
            const transfer = {
                user: address,
                amount: amount,
                direction: direction,
                nonce: nonce.toString(),
                priorityFee: priorityFee,
                signature: signature,
                timestamp: Date.now()
            };
            const pending = JSON.parse(localStorage.getItem('pendingTransfers') || '[]');
            pending.push(transfer);
            localStorage.setItem('pendingTransfers', JSON.stringify(pending));
            showStatus('success', '✅ Transfer signed! Fisher will execute it soon.');
            setAmount('');
            setTimeout(()=>{
                refreshBalances();
                loadStats();
            }, 2000);
        } catch (error) {
            console.error('Transfer error:', error);
            showStatus('error', `❌ Transfer failed: ${error.message}`);
        } finally{
            setLoading(false);
        }
    };
    const showStatus = (type, message)=>{
        setStatus({
            type,
            message
        });
        if (type === 'success' || type === 'error') {
            setTimeout(()=>{
                setStatus({
                    type: '',
                    message: ''
                });
            }, 5000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "🔄 EVVM Cross-Chain Balancer"
                    }, void 0, false, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "Transfer MATE tokens between EVVM-A and EVVM-B on the same host chain"
                    }, void 0, false, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    isConnected && address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connected-wallet",
                        children: [
                            "Connected: ",
                            address.substring(0, 6),
                            "...",
                            address.substring(38)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>open(),
                        className: "connect-btn",
                        children: "🔗 Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cards",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "📍 EVVM-A"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "balance-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "balance-label",
                                        children: "Your Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "balance-amount",
                                        children: balanceA
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "balance-token",
                                        children: "MATE"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>refreshBalances(),
                                children: "🔄 Refresh"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "💸 Transfer"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: direction,
                                onChange: (e)=>setDirection(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "A→B",
                                        children: "Transfer A → B"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "B→A",
                                        children: "Transfer B → A"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: amount,
                                onChange: (e)=>setAmount(e.target.value),
                                placeholder: "Amount to transfer",
                                step: "0.01"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: priorityFee,
                                onChange: (e)=>setPriorityFee(e.target.value),
                                placeholder: "Priority Fee (min 0.001 ETH)",
                                step: "0.001"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: initiateTransfer,
                                disabled: loading,
                                children: "🚀 Initiate Transfer"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fee-info",
                                children: "Fisher Fee: 0.1% • Priority Fee: Customizable"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            status.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `status ${status.type}`,
                                children: status.message
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "📍 EVVM-B"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "balance-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "balance-label",
                                        children: "Your Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "balance-amount",
                                        children: balanceB
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "balance-token",
                                        children: "MATE"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>refreshBalances(),
                                children: "🔄 Refresh"
                            }, void 0, false, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "📊 Balancer Stats"
                    }, void 0, false, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-label",
                                        children: "Total Liquidity A"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-value",
                                        children: liquidityA
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-label",
                                        children: "Total Liquidity B"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-value",
                                        children: liquidityB
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-label",
                                        children: "Your Nonce A"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-value",
                                        children: nonceA
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-label",
                                        children: "Your Nonce B"
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-value",
                                        children: nonceB
                                    }, void 0, false, {
                                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frutero/evvm/cross-chain-balancer/frontend-next/app/page.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
}),
"[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit/dist/esm/src/library/react/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAppKit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAppKit"],
    "useAppKit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAppKit"],
    "useAppKitAccount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitAccount"],
    "useAppKitConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitConnection"],
    "useAppKitConnections",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitConnections"],
    "useAppKitEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAppKitEvents"],
    "useAppKitNetworkCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitNetworkCore"],
    "useAppKitProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppKitProvider"],
    "useAppKitState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAppKitState"],
    "useAppKitTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAppKitTheme"],
    "useDisconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"],
    "useWalletInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWalletInfo"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$src$2f$library$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit/dist/esm/src/library/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frutero$2f$evvm$2f$cross$2d$chain$2d$balancer$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frutero/evvm/cross-chain-balancer/node_modules/@reown/appkit-controllers/dist/esm/exports/react.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=frutero_evvm_cross-chain-balancer_0f3df038._.js.map