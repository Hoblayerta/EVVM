// EVVM Cross-Chain Balancer - Frontend Logic with Reown

// ============================================
// STATE
// ============================================

let modal = null
let provider = null
let signer = null
let userAddress = null
let evvmA_Contract = null
let evvmB_Contract = null
let balancer_Contract = null

// Cache para balances
const balanceCache = {
    A: { value: null, timestamp: 0 },
    B: { value: null, timestamp: 0 }
}
const CACHE_TTL = 5000 // 5 segundos

// ============================================
// INICIALIZACIÓN
// ============================================

async function init() {
    try {
        // Verificar que ethers esté disponible
        if (typeof ethers === 'undefined') {
            throw new Error('Ethers.js not loaded')
        }

        // Inicializar Reown AppKit
        const { createAppKit } = window.Reown
        const { EthersAdapter } = window.ReownAdapters

        modal = createAppKit({
            adapters: [new EthersAdapter()],
            networks: [{
                chainId: 421614,
                name: 'Arbitrum Sepolia',
                currency: 'ETH',
                explorerUrl: 'https://sepolia.arbiscan.io',
                rpcUrl: CONFIG.NETWORK.rpcUrl
            }],
            projectId: CONFIG.REOWN_PROJECT_ID,
            metadata: {
                name: 'EVVM Cross-Chain Balancer',
                description: 'Transfer MATE tokens between EVVMs',
                url: window.location.origin,
                icons: ['https://avatars.githubusercontent.com/u/179229932']
            },
            features: {
                analytics: true
            }
        })

        // Escuchar eventos de wallet
        modal.subscribeProvider((newState) => {
            if (newState.isConnected) {
                initContracts()
            }
        })

        // Si ya está conectado
        const state = modal.getState()
        if (state.address) {
            await initContracts()
        }

        console.log('✅ App initialized')
        return true

    } catch (error) {
        console.error('Init error:', error)
        showStatus('error', '❌ Failed to initialize: ' + error.message)
        return false
    }
}

async function initContracts() {
    try {
        const walletProvider = modal.getWalletProvider()
        provider = new ethers.providers.Web3Provider(walletProvider)
        signer = provider.getSigner()
        userAddress = await signer.getAddress()

        // Inicializar contratos
        evvmA_Contract = new ethers.Contract(
            CONFIG.EVVM_A.address,
            CONFIG.ABI.EVVM,
            signer
        )

        evvmB_Contract = new ethers.Contract(
            CONFIG.EVVM_B.address,
            CONFIG.ABI.EVVM,
            signer
        )

        balancer_Contract = new ethers.Contract(
            CONFIG.BALANCER.address,
            CONFIG.ABI.BALANCER,
            signer
        )

        // Mostrar wallet conectada
        document.getElementById('walletStatus').style.display = 'block'
        document.getElementById('walletAddress').textContent =
            userAddress.substring(0, 6) + '...' + userAddress.substring(38)
        document.getElementById('connectBtn').style.display = 'none'

        // Cargar datos en paralelo
        await Promise.all([
            refreshBalances(),
            loadStats()
        ])

        console.log('✅ Contracts initialized')

    } catch (error) {
        console.error('Contract init error:', error)
        showStatus('error', '❌ Failed to initialize contracts: ' + error.message)
    }
}

// ============================================
// BALANCE Y STATS (OPTIMIZADO)
// ============================================

async function refreshBalances() {
    if (!userAddress) return

    try {
        const now = Date.now()

        // Usar cache si está fresco
        const balancesPromises = []

        if (now - balanceCache.A.timestamp > CACHE_TTL) {
            balancesPromises.push(
                evvmA_Contract.getBalance(userAddress, CONFIG.EVVM_A.principalToken)
                    .then(bal => {
                        balanceCache.A = { value: bal, timestamp: now }
                        return bal
                    })
            )
        } else {
            balancesPromises.push(Promise.resolve(balanceCache.A.value))
        }

        if (now - balanceCache.B.timestamp > CACHE_TTL) {
            balancesPromises.push(
                evvmB_Contract.getBalance(userAddress, CONFIG.EVVM_B.principalToken)
                    .then(bal => {
                        balanceCache.B = { value: bal, timestamp: now }
                        return bal
                    })
            )
        } else {
            balancesPromises.push(Promise.resolve(balanceCache.B.value))
        }

        const [balanceA, balanceB] = await Promise.all(balancesPromises)

        // Actualizar UI
        document.getElementById('balanceA').textContent =
            parseFloat(ethers.utils.formatEther(balanceA)).toFixed(4)
        document.getElementById('balanceB').textContent =
            parseFloat(ethers.utils.formatEther(balanceB)).toFixed(4)

    } catch (error) {
        console.error('Error refreshing balances:', error)
        document.getElementById('balanceA').textContent = 'Error'
        document.getElementById('balanceB').textContent = 'Error'
    }
}

async function loadStats() {
    if (!userAddress) return

    try {
        // Cargar todo en paralelo
        const [liquidity, nonceA, nonceB] = await Promise.all([
            balancer_Contract.getTotalLiquidity(),
            balancer_Contract.noncesA(userAddress),
            balancer_Contract.noncesB(userAddress)
        ])

        document.getElementById('liquidityA').textContent =
            parseFloat(ethers.utils.formatEther(liquidity.inA)).toFixed(2)
        document.getElementById('liquidityB').textContent =
            parseFloat(ethers.utils.formatEther(liquidity.inB)).toFixed(2)
        document.getElementById('nonceA').textContent = nonceA.toString()
        document.getElementById('nonceB').textContent = nonceB.toString()

    } catch (error) {
        console.error('Error loading stats:', error)
    }
}

// ============================================
// TRANSFER
// ============================================

async function initiateTransfer() {
    if (!userAddress) {
        modal.open()
        return
    }

    const amount = document.getElementById('amount').value
    const priorityFee = document.getElementById('priorityFee').value
    const direction = document.getElementById('direction').value

    if (!amount || parseFloat(amount) <= 0) {
        showStatus('error', '❌ Please enter valid amount')
        return
    }

    if (!priorityFee || parseFloat(priorityFee) < 0.001) {
        showStatus('error', '❌ Priority fee must be at least 0.001 ETH')
        return
    }

    try {
        document.getElementById('transferBtn').disabled = true
        showStatus('info', '🔄 Preparing transfer...')

        const amountWei = ethers.utils.parseEther(amount)
        const priorityFeeWei = ethers.utils.parseEther(priorityFee)

        // Obtener nonce
        let nonce
        if (direction === 'A→B') {
            nonce = await balancer_Contract.noncesA(userAddress)
        } else {
            nonce = await balancer_Contract.noncesB(userAddress)
        }

        // Crear mensaje para firmar
        const messageHash = ethers.utils.solidityKeccak256(
            ['address', 'uint256', 'string', 'uint256', 'uint256'],
            [userAddress, amountWei, direction, nonce, priorityFeeWei]
        )

        showStatus('info', '✍️ Please sign the message in your wallet...')

        // Firmar mensaje
        const signature = await signer.signMessage(ethers.utils.arrayify(messageHash))

        // Guardar transfer pendiente
        const transfer = {
            user: userAddress,
            amount: amount,
            direction: direction,
            nonce: nonce.toString(),
            priorityFee: priorityFee,
            signature: signature,
            timestamp: Date.now()
        }

        const pending = JSON.parse(localStorage.getItem('pendingTransfers') || '[]')
        pending.push(transfer)
        localStorage.setItem('pendingTransfers', JSON.stringify(pending))

        showStatus('success', '✅ Transfer signed! Fisher will execute it soon.')

        // Limpiar form
        document.getElementById('amount').value = ''

        // Refresh balances después de un delay
        setTimeout(() => {
            refreshBalances()
            loadStats()
        }, 2000)

    } catch (error) {
        console.error('Transfer error:', error)
        showStatus('error', '❌ Transfer failed: ' + error.message)
    } finally {
        document.getElementById('transferBtn').disabled = false
    }
}

// ============================================
// HELPERS
// ============================================

function showStatus(type, message) {
    const statusEl = document.getElementById('transferStatus')
    statusEl.className = `status ${type}`
    statusEl.textContent = message

    if (type === 'success' || type === 'error') {
        setTimeout(() => {
            statusEl.style.display = 'none'
        }, 5000)
    }
}

// ============================================
// AUTO INIT
// ============================================

window.addEventListener('DOMContentLoaded', init)

// Export functions to window
window.refreshBalances = refreshBalances
window.initiateTransfer = initiateTransfer
window.connectWallet = () => modal.open()
