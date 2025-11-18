'use client'

import { useEffect, useState } from 'react'
import { useAppKit, useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { BrowserProvider, Contract, formatEther, parseEther } from 'ethers'
import { CONFIG } from '@/config'
import Link from 'next/link'

export default function Fisher() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')

  const [liquidityA, setLiquidityA] = useState('0')
  const [liquidityB, setLiquidityB] = useState('0')
  const [rewardsEarned, setRewardsEarned] = useState('0')
  const [transfersExecuted, setTransfersExecuted] = useState('0')

  const [pendingTransfers, setPendingTransfers] = useState<any[]>([])
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const [balancer, setBalancer] = useState<Contract | null>(null)

  // Pool cache
  const [poolCache, setPoolCache] = useState({ value: null, timestamp: 0 })
  const CACHE_TTL = 10000 // 10 segundos

  useEffect(() => {
    if (isConnected && walletProvider && address) {
      initContracts()
    }
  }, [isConnected, walletProvider, address])

  useEffect(() => {
    // Load pending transfers from localStorage
    const loadPending = () => {
      const pending = JSON.parse(localStorage.getItem('pendingTransfers') || '[]')
      setPendingTransfers(pending)
    }

    loadPending()
    const interval = setInterval(loadPending, 5000)
    return () => clearInterval(interval)
  }, [])

  const initContracts = async () => {
    if (!walletProvider) return

    try {
      const provider = new BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()

      const balancerContract = new Contract(
        CONFIG.BALANCER.address,
        CONFIG.ABI.BALANCER,
        signer
      )

      setBalancer(balancerContract)
      await loadFisherPool(balancerContract)

    } catch (error) {
      console.error('Contract init error:', error)
      showStatus('error', '❌ Failed to initialize contracts')
    }
  }

  const loadFisherPool = async (balancerContract?: Contract) => {
    if (!address) return

    const contract = balancerContract || balancer
    if (!contract) return

    try {
      const now = Date.now()

      if (now - poolCache.timestamp > CACHE_TTL || !poolCache.value) {
        const pool = await contract.getFisherPool(address)

        setLiquidityA(parseFloat(formatEther(pool.liquidityInA)).toFixed(4))
        setLiquidityB(parseFloat(formatEther(pool.liquidityInB)).toFixed(4))
        setRewardsEarned(parseFloat(formatEther(pool.rewardsEarned)).toFixed(6))
        setTransfersExecuted(pool.transfersExecuted.toString())

        setPoolCache({ value: pool, timestamp: now })
      }

    } catch (error) {
      console.error('Error loading fisher pool:', error)
    }
  }

  const executeTransfer = async (transfer: any) => {
    if (!balancer || !address || !walletProvider) return

    try {
      setLoading(true)
      showStatus('info', '🔄 Executing transfer...')

      const provider = new BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()

      const balancerWithSigner = balancer.connect(signer) as any

      // Debug logging for signature verification
      console.log('🔍 Fisher executing transfer with parameters:')
      console.log('  User:', transfer.user)
      console.log('  Amount:', transfer.amount, '=>', parseEther(transfer.amount).toString())
      console.log('  Priority Fee:', transfer.priorityFee, '=>', parseEther(transfer.priorityFee).toString())
      console.log('  Nonce:', transfer.nonce)
      console.log('  Signature:', transfer.signature)
      console.log('  Direction:', transfer.direction)

      let tx
      if (transfer.direction === 'A→B') {
        tx = await balancerWithSigner.depositToBalancerFromA(
          transfer.user,
          parseEther(transfer.amount),
          parseEther(transfer.priorityFee),
          transfer.nonce,
          transfer.signature
        )
      } else {
        tx = await balancerWithSigner.depositToBalancerFromB(
          transfer.user,
          parseEther(transfer.amount),
          parseEther(transfer.priorityFee),
          transfer.nonce,
          transfer.signature
        )
      }

      showStatus('info', '⏳ Waiting for confirmation...')
      await tx.wait()

      showStatus('success', '✅ Transfer executed! Earned fees: ' + transfer.priorityFee + ' ETH')

      // Remove from pending
      const pending = JSON.parse(localStorage.getItem('pendingTransfers') || '[]')
      const updated = pending.filter((t: any) => t.timestamp !== transfer.timestamp)
      localStorage.setItem('pendingTransfers', JSON.stringify(updated))
      setPendingTransfers(updated)

      setTimeout(() => {
        loadFisherPool()
      }, 2000)

    } catch (error: any) {
      console.error('Execute error:', error)

      let errorMsg = error.message

      // Decode EVVM error codes
      if (error.data === '0x8baa579f' || errorMsg.includes('0x8baa579f')) {
        errorMsg = 'Invalid signature - user signature verification failed'
      } else if (error.data === '0x5c758b7e' || errorMsg.includes('0x5c758b7e')) {
        errorMsg = 'Executor mismatch - signature executor does not match caller'
      } else if (error.data === '0xf4d678b8' || errorMsg.includes('0xf4d678b8')) {
        errorMsg = 'Insufficient MATE balance in source EVVM'
      } else if (error.data === '0x2860e19a' || errorMsg.includes('0x2860e19a')) {
        errorMsg = 'Balance update failed - insufficient funds'
      }

      showStatus('error', `❌ Execution failed: ${errorMsg}`)
    } finally {
      setLoading(false)
    }
  }

  const addLiquidity = async (evvm: 'A' | 'B', amount: string) => {
    if (!balancer || !address || !walletProvider) return
    if (!amount || parseFloat(amount) <= 0) {
      showStatus('error', '❌ Please enter valid amount')
      return
    }

    try {
      setLoading(true)
      showStatus('info', '🔄 Adding liquidity...')

      const provider = new BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()

      // This would need to be implemented in the balancer contract
      showStatus('error', '❌ Not implemented yet - need addLiquidity function in contract')

    } catch (error: any) {
      console.error('Add liquidity error:', error)
      showStatus('error', `❌ Failed: ${error.message}`)
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

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🎣 Fisher Dashboard</h1>
        <p className="subtitle">Execute gasless transfers and earn rewards</p>

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <Link href="/">
            <button style={{ maxWidth: '200px' }}>← Back to Balancer</button>
          </Link>

          {isConnected && address ? (
            <div className="connected-wallet">
              Fisher: {address.substring(0, 6)}...{address.substring(38)}
            </div>
          ) : (
            <button onClick={() => open()} className="connect-btn">
              🔗 Connect Wallet
            </button>
          )}
        </div>
      </div>

      {/* Fisher Stats */}
      <div className="card">
        <h2>📊 Your Fisher Pool</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-label">Liquidity in A</div>
            <div className="stat-value">{liquidityA} MATE</div>
          </div>
          <div className="stat">
            <div className="stat-label">Liquidity in B</div>
            <div className="stat-value">{liquidityB} MATE</div>
          </div>
          <div className="stat">
            <div className="stat-label">Rewards Earned</div>
            <div className="stat-value">{rewardsEarned} ETH</div>
          </div>
          <div className="stat">
            <div className="stat-label">Transfers Executed</div>
            <div className="stat-value">{transfersExecuted}</div>
          </div>
        </div>
        <button onClick={() => loadFisherPool()} style={{ marginTop: '15px' }}>
          🔄 Refresh Stats
        </button>
      </div>

      {/* Pending Transfers */}
      <div className="card">
        <h2>📋 Pending Transfers ({pendingTransfers.length})</h2>

        {pendingTransfers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            No pending transfers. Users need to sign transfers first.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {pendingTransfers.map((transfer, idx) => (
              <div key={idx} style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e0e0e0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <strong>{transfer.direction}: {transfer.amount} MATE</strong>
                  <span style={{ color: '#667eea' }}>Fee: {transfer.priorityFee} ETH</span>
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                  User: {transfer.user.substring(0, 6)}...{transfer.user.substring(38)}
                </div>
                <div style={{ fontSize: '12px', color: '#999', marginBottom: '10px' }}>
                  Nonce: {transfer.nonce} | Time: {new Date(transfer.timestamp).toLocaleString()}
                </div>
                <button
                  onClick={() => executeTransfer(transfer)}
                  disabled={loading}
                  style={{ width: '100%' }}
                >
                  ⚡ Execute & Earn {transfer.priorityFee} ETH
                </button>
              </div>
            ))}
          </div>
        )}

        {status.message && (
          <div className={`status ${status.type}`} style={{ marginTop: '15px' }}>
            {status.message}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="card">
        <h2>📚 How it Works</h2>
        <div style={{ lineHeight: '1.8' }}>
          <p><strong>1. Users sign transfers off-chain</strong></p>
          <p style={{ marginLeft: '20px', color: '#666' }}>
            Users create gasless transfer requests with their wallet signature
          </p>

          <p style={{ marginTop: '15px' }}><strong>2. You execute them on-chain</strong></p>
          <p style={{ marginLeft: '20px', color: '#666' }}>
            Click "Execute" to process pending transfers and earn priority fees
          </p>

          <p style={{ marginTop: '15px' }}><strong>3. Earn rewards</strong></p>
          <p style={{ marginLeft: '20px', color: '#666' }}>
            Get 0.1% fisher fee + user's priority fee for each transfer
          </p>
        </div>
      </div>
    </div>
  )
}
