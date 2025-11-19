'use client'

import { useEffect, useState } from 'react'
import { useAppKit, useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { BrowserProvider, Contract, formatEther, parseEther } from 'ethers'
import { CONFIG } from '@/config'

export default function Home() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')

  const [balanceA, setBalanceA] = useState('0.00')
  const [balanceB, setBalanceB] = useState('0.00')
  const [liquidityA, setLiquidityA] = useState('0')
  const [liquidityB, setLiquidityB] = useState('0')
  const [nonceA, setNonceA] = useState('0')
  const [nonceB, setNonceB] = useState('0')

  const [amount, setAmount] = useState('')
  const [priorityFee, setPriorityFee] = useState('0.001')
  const [direction, setDirection] = useState('A→B')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  // Contracts
  const [evvmA, setEvvmA] = useState<Contract | null>(null)
  const [evvmB, setEvvmB] = useState<Contract | null>(null)
  const [balancer, setBalancer] = useState<Contract | null>(null)
  const [networkReady, setNetworkReady] = useState(false)

  // Cache para balances
  const [balanceCache, setBalanceCache] = useState({
    A: { value: '0', timestamp: 0 },
    B: { value: '0', timestamp: 0 }
  })
  const CACHE_TTL = 5000 // 5 segundos

  useEffect(() => {
    if (isConnected && walletProvider && address) {
      console.log('🔄 Wallet connected, initializing contracts...')
      setNetworkReady(false)
      initContracts()
    } else {
      console.log('👋 Wallet disconnected, clearing contracts')
      setEvvmA(null)
      setEvvmB(null)
      setBalancer(null)
      setNetworkReady(false)
    }
  }, [isConnected, walletProvider, address])

  const initContracts = async () => {
    if (!walletProvider) {
      console.log('❌ No wallet provider available')
      return
    }

    try {
      console.log('🔧 Creating browser provider...')
      const provider = new BrowserProvider(walletProvider as any)

      // Check network before proceeding
      const network = await provider.getNetwork()
      console.log('🌐 Connected to network:', network.chainId.toString(), network.name)

      if (network.chainId !== BigInt(CONFIG.NETWORK.chainId)) {
        console.warn(`⚠️ Wrong network! Expected ${CONFIG.NETWORK.chainId}, got ${network.chainId}`)
        showStatus('error', `❌ Please switch to ${CONFIG.NETWORK.chainName}`)
        return
      }

      console.log('✅ Network verification successful')
      const signer = await provider.getSigner()

      const evvmAContract = new Contract(
        CONFIG.EVVM_A.address,
        CONFIG.ABI.EVVM,
        signer
      )

      const evvmBContract = new Contract(
        CONFIG.EVVM_B.address,
        CONFIG.ABI.EVVM,
        signer
      )

      const balancerContract = new Contract(
        CONFIG.BALANCER.address,
        CONFIG.ABI.BALANCER,
        signer
      )

      console.log('✅ Contracts initialized successfully')
      setEvvmA(evvmAContract)
      setEvvmB(evvmBContract)
      setBalancer(balancerContract)
      setNetworkReady(true)

      // Cargar datos en paralelo
      console.log('📊 Loading balances and stats...')
      await Promise.all([
        refreshBalances(evvmAContract, evvmBContract),
        loadStats(balancerContract)
      ])

      console.log('🎉 Frontend fully initialized')

    } catch (error) {
      console.error('Contract init error:', error)
      showStatus('error', '❌ Failed to initialize contracts')
    }
  }

  const refreshBalances = async (contractA?: Contract, contractB?: Contract) => {
    if (!address) {
      console.log('📍 No address connected')
      return
    }

    const evvmAContract = contractA || evvmA
    const evvmBContract = contractB || evvmB

    if (!evvmAContract || !evvmBContract) {
      console.log('⚠️ Contracts not initialized yet')
      return
    }

    if (!networkReady) {
      console.log('⚠️ Network not ready yet')
      return
    }

    try {
      const now = Date.now()
      const balancesPromises = []

      console.log('Fetching balances for:', address)
      console.log('EVVM-A:', CONFIG.EVVM_A.address)
      console.log('EVVM-B:', CONFIG.EVVM_B.address)
      console.log('Principal Token:', CONFIG.EVVM_A.principalToken)

      // Check cache for EVVM-A
      if (now - balanceCache.A.timestamp > CACHE_TTL) {
        balancesPromises.push(
          evvmAContract.getBalance(address, CONFIG.EVVM_A.principalToken)
            .then((bal: any) => {
              console.log('✅ Balance A (raw):', bal.toString())
              const formatted = parseFloat(formatEther(bal || 0)).toFixed(4)
              console.log('✅ Balance A (formatted):', formatted, 'MATE')
              setBalanceCache(prev => ({
                ...prev,
                A: { value: formatted, timestamp: now }
              }))
              return formatted
            })
            .catch((err: any) => {
              console.error('❌ Error fetching balance A:', err)
              if (err.code === 'NETWORK_ERROR' || err.message.includes('network changed')) {
                console.log('🔄 Network change detected - reinitializing...')
                setNetworkReady(false)
                setTimeout(() => initContracts(), 1000)
              }
              console.error('📍 Contract:', CONFIG.EVVM_A.address)
              console.error('👤 User:', address)
              console.error('🪙 Token:', CONFIG.EVVM_A.principalToken)
              // Return 0 instead of throwing to show 0 balance
              const defaultBalance = '0.0000'
              setBalanceCache(prev => ({
                ...prev,
                A: { value: defaultBalance, timestamp: now }
              }))
              return defaultBalance
            })
        )
      } else {
        balancesPromises.push(Promise.resolve(balanceCache.A.value))
      }

      // Check cache for EVVM-B
      if (now - balanceCache.B.timestamp > CACHE_TTL) {
        balancesPromises.push(
          evvmBContract.getBalance(address, CONFIG.EVVM_B.principalToken)
            .then((bal: any) => {
              console.log('✅ Balance B (raw):', bal.toString())
              const formatted = parseFloat(formatEther(bal || 0)).toFixed(4)
              console.log('✅ Balance B (formatted):', formatted, 'MATE')
              setBalanceCache(prev => ({
                ...prev,
                B: { value: formatted, timestamp: now }
              }))
              return formatted
            })
            .catch((err: any) => {
              console.error('❌ Error fetching balance B:', err)
              console.error('❌ Contract address:', CONFIG.EVVM_B.address)
              console.error('❌ User address:', address)
              console.error('❌ Token address:', CONFIG.EVVM_B.principalToken)
              // Return 0 instead of throwing to show 0 balance
              const defaultBalance = '0.0000'
              setBalanceCache(prev => ({
                ...prev,
                B: { value: defaultBalance, timestamp: now }
              }))
              return defaultBalance
            })
        )
      } else {
        balancesPromises.push(Promise.resolve(balanceCache.B.value))
      }

      const [balA, balB] = await Promise.all(balancesPromises)
      setBalanceA(balA)
      setBalanceB(balB)

    } catch (error: any) {
      console.error('❌ Error refreshing balances:', error)
      console.error('❌ Error details:', error.message)
      // Set balances to 0 instead of "Error" for better UX
      setBalanceA('0.0000')
      setBalanceB('0.0000')
      console.log('📝 Note: Showing 0 balance - check console for details')
    }
  }

  const loadStats = async (balancerContract?: Contract) => {
    if (!address) return

    const contract = balancerContract || balancer
    if (!contract) return

    try {
      // For simplified contract, we only need nonces
      const [nonces, protocolFee] = await Promise.all([
        contract.getUserNonces(address),
        contract.protocolFee()
      ])

      setNonceA(nonces.nonceA.toString())
      setNonceB(nonces.nonceB.toString())

      // Set liquidity to placeholder values for simplified contract
      setLiquidityA("Direct Transfer")
      setLiquidityB(`Fee: ${protocolFee / 100}%`)

    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  const initiateTransfer = async () => {
    if (!isConnected) {
      open()
      return
    }

    if (!amount || parseFloat(amount) <= 0) {
      showStatus('error', '❌ Please enter valid amount')
      return
    }

    if (!priorityFee || parseFloat(priorityFee) < 0.001) {
      showStatus('error', '❌ Priority fee must be at least 0.001 ETH')
      return
    }

    if (!balancer || !address || !walletProvider) return

    try {
      setLoading(true)
      showStatus('info', '🔄 Preparing direct transfer...')

      const provider = new BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()

      const amountWei = parseEther(amount)
      const priorityFeeWei = parseEther(priorityFee)

      // Get current nonces for the user
      const nonces = await balancer.getUserNonces(address)

      showStatus('info', '✍️ Please sign the transaction in your wallet...')

      let tx
      if (direction === 'A→B') {
        // Direct transfer from EVVM-A to EVVM-B
        tx = await balancer.directTransferAtoB(
          address,
          amountWei,
          priorityFeeWei,
          nonces.nonceA,
          "0x" // Empty signature placeholder - handled by simplified contract
        )
      } else {
        // Direct transfer from EVVM-B to EVVM-A
        tx = await balancer.directTransferBtoA(
          address,
          amountWei,
          priorityFeeWei,
          nonces.nonceB,
          "0x" // Empty signature placeholder - handled by simplified contract
        )
      }

      showStatus('info', '⏳ Transaction submitted, waiting for confirmation...')
      console.log('Transaction hash:', tx.hash)

      // Wait for transaction confirmation
      const receipt = await tx.wait()
      console.log('Transaction confirmed:', receipt)

      showStatus('success', '✅ Transfer completed successfully!')

      setAmount('')

      // Refresh balances after successful transfer
      setTimeout(() => {
        refreshBalances()
        loadStats()
      }, 1000)

    } catch (error: any) {
      console.error('Transfer error:', error)

      // Handle specific error types
      if (error.code === 'ACTION_REJECTED') {
        showStatus('error', '❌ Transaction was rejected by user')
      } else if (error.reason) {
        showStatus('error', `❌ Transfer failed: ${error.reason}`)
      } else {
        showStatus('error', `❌ Transfer failed: ${error.message}`)
      }
    } finally {
      setLoading(false)
    }
  }

  const showStatus = (type: string, message: string) => {
    setStatus({ type, message })

    if (type === 'success' || type === 'error') {
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
    }
  }

  const requestFaucet = async (evvmType: 'A' | 'B') => {
    if (!address || !walletProvider) return

    const contract = evvmType === 'A' ? evvmA : evvmB
    if (!contract) return

    try {
      setLoading(true)
      showStatus('info', '🚰 Requesting MATE tokens from faucet...')

      const provider = new BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const contractWithSigner = contract.connect(signer) as any

      const tokenAddress = evvmType === 'A' ? CONFIG.EVVM_A.principalToken : CONFIG.EVVM_B.principalToken
      const amount = parseEther('100')

      console.log(`🚰 Faucet request for EVVM-${evvmType}:`)
      console.log('  Contract:', contract.target || contract.address)
      console.log('  User:', address)
      console.log('  Token:', tokenAddress)
      console.log('  Amount:', amount.toString(), '(100 MATE)')

      const tx = await contractWithSigner.addBalance(address, tokenAddress, amount)
      console.log('🔄 Transaction submitted:', tx.hash)

      showStatus('info', '⏳ Waiting for transaction confirmation...')
      const receipt = await tx.wait()
      console.log('✅ Transaction confirmed:', receipt.hash)

      showStatus('success', '✅ 100 MATE tokens added to your balance!')

      // Clear cache to force refresh
      setBalanceCache({
        A: { value: '0', timestamp: 0 },
        B: { value: '0', timestamp: 0 }
      })

      // Refresh balances after confirmation
      setTimeout(() => {
        refreshBalances()
      }, 1000)

    } catch (error: any) {
      console.error('Faucet error:', error)
      showStatus('error', `❌ Faucet failed: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🔄 EVVM Cross-Chain Balancer</h1>
        <p className="subtitle">Direct transfer of MATE tokens between EVVM-A and EVVM-B • No fishers required</p>

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          {isConnected && address ? (
            <div className="connected-wallet">
              Connected: {address.substring(0, 6)}...{address.substring(38)}
            </div>
          ) : (
            <button onClick={() => open()} className="connect-btn">
              🔗 Connect Wallet
            </button>
          )}

          {isConnected && (
            <div style={{
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '12px',
              backgroundColor: networkReady ? '#e8f5e8' : '#fff3cd',
              color: networkReady ? '#155724' : '#856404',
              border: networkReady ? '1px solid #c3e6cb' : '1px solid #ffeaa7'
            }}>
              {networkReady ? '✅ Network Ready' : '⏳ Initializing...'}
            </div>
          )}

        </div>
      </div>

      {/* Network Status Message */}
      {isConnected && !networkReady && (
        <div style={{
          padding: '15px',
          margin: '20px 0',
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeaa7',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          🔄 Initializing contracts... Please wait while we connect to Ethereum Sepolia.
        </div>
      )}

      {/* Main Cards */}
      <div className="cards">
        {/* EVVM-A Balance */}
        <div className="card">
          <h2>📍 EVVM-A</h2>
          <div className="balance-box">
            <div className="balance-label">Your Balance</div>
            <div className="balance-amount">{balanceA}</div>
            <div className="balance-token">MATE</div>
          </div>
          <button
            onClick={() => refreshBalances()}
            disabled={!networkReady || loading}
            style={{ marginBottom: '10px' }}
          >
            🔄 Refresh
          </button>
          <button
            onClick={() => requestFaucet('A')}
            disabled={!networkReady || loading}
          >
            🚰 Get 100 MATE
          </button>
        </div>

        {/* Transfer Section */}
        <div className="card">
          <h2>💸 Transfer</h2>

          <select value={direction} onChange={(e) => setDirection(e.target.value)}>
            <option value="A→B">Transfer A → B</option>
            <option value="B→A">Transfer B → A</option>
          </select>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to transfer"
            step="0.01"
          />

          <input
            type="number"
            value={priorityFee}
            onChange={(e) => setPriorityFee(e.target.value)}
            placeholder="Priority Fee (min 0.001 ETH)"
            step="0.001"
          />

          <button
            onClick={initiateTransfer}
            disabled={!networkReady || loading}
          >
            🚀 Execute Direct Transfer
          </button>

          <div className="fee-info">
            Protocol Fee: 0.1% • Direct Transfer • No Fisher Required
          </div>

          {status.message && (
            <div className={`status ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>

        {/* EVVM-B Balance */}
        <div className="card">
          <h2>📍 EVVM-B</h2>
          <div className="balance-box">
            <div className="balance-label">Your Balance</div>
            <div className="balance-amount">{balanceB}</div>
            <div className="balance-token">MATE</div>
          </div>
          <button
            onClick={() => refreshBalances()}
            disabled={!networkReady || loading}
            style={{ marginBottom: '10px' }}
          >
            🔄 Refresh
          </button>
          <button
            onClick={() => requestFaucet('B')}
            disabled={!networkReady || loading}
          >
            🚰 Get 100 MATE
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="card">
        <h2>📊 Balancer Stats</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-label">Total Liquidity A</div>
            <div className="stat-value">{liquidityA}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Total Liquidity B</div>
            <div className="stat-value">{liquidityB}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Your Nonce A</div>
            <div className="stat-value">{nonceA}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Your Nonce B</div>
            <div className="stat-value">{nonceB}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
