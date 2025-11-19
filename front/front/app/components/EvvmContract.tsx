'use client'

import { useState } from 'react'
import { useReadContract, useWriteContract, useAccount, useChainId } from 'wagmi'
import { evvmABI } from '@/contracts/evvmABI'
import { CONTRACT_ADDRESSES, type SupportedChainId } from '@/contracts/addresses'
import { parseEther, formatEther } from 'viem'

export function EvvmContract() {
  const { address } = useAccount()
  const chainId = useChainId() as SupportedChainId
  const [tokenAddress, setTokenAddress] = useState('')
  const [payTo, setPayTo] = useState('')
  const [payAmount, setPayAmount] = useState('')

  const evvmAddress = CONTRACT_ADDRESSES[chainId]?.evvm

  // Read EVVM Metadata
  const { data: metadata } = useReadContract({
    address: evvmAddress as `0x${string}`,
    abi: evvmABI,
    functionName: 'getEvvmMetadata',
  })

  // Read EVVM ID
  const { data: evvmId } = useReadContract({
    address: evvmAddress as `0x${string}`,
    abi: evvmABI,
    functionName: 'getEvvmID',
  })

  // Read user balance
  const { data: balance } = useReadContract({
    address: evvmAddress as `0x${string}`,
    abi: evvmABI,
    functionName: 'getBalance',
    args: address && tokenAddress ? [address, tokenAddress as `0x${string}`] : undefined,
  })

  const { writeContract, isPending } = useWriteContract()

  const handlePay = () => {
    if (!payTo || !payAmount || !tokenAddress) return

    writeContract({
      address: evvmAddress as `0x${string}`,
      abi: evvmABI,
      functionName: 'caPay',
      args: [payTo as `0x${string}`, tokenAddress as `0x${string}`, parseEther(payAmount)],
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">EVVM Contract</h2>

      {metadata && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">EVVM Metadata</h3>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Name:</span> {metadata.EvvmName}</p>
            <p><span className="font-medium">ID:</span> {evvmId?.toString()}</p>
            <p><span className="font-medium">Token:</span> {metadata.principalTokenName} ({metadata.principalTokenSymbol})</p>
            <p><span className="font-medium">Total Supply:</span> {formatEther(metadata.totalSupply)}</p>
            <p><span className="font-medium">Reward:</span> {formatEther(metadata.reward)}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Token Address
          </label>
          <input
            type="text"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            placeholder="0x..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {balance !== undefined && (
          <div className="p-3 bg-green-50 rounded-md">
            <p className="text-sm font-medium">Your Balance: {formatEther(balance)} tokens</p>
          </div>
        )}

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-3">Make Payment</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={payTo}
              onChange={(e) => setPayTo(e.target.value)}
              placeholder="Recipient address (0x...)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              placeholder="Amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handlePay}
              disabled={isPending || !address}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isPending ? 'Processing...' : 'Send Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
