'use client'

import { useReadContract, useAccount, useChainId } from 'wagmi'
import { stakingABI } from '@/contracts/stakingABI'
import { CONTRACT_ADDRESSES, type SupportedChainId } from '@/contracts/addresses'
import { formatEther } from 'viem'

export function StakingContract() {
  const { address } = useAccount()
  const chainId = useChainId() as SupportedChainId

  const stakingAddress = CONTRACT_ADDRESSES[chainId]?.staking

  // Read user staked amount
  const { data: stakedAmount } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: stakingABI,
    functionName: 'getUserAmountStaked',
    args: address ? [address] : undefined,
  })

  // Read staking price
  const { data: stakingPrice } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: stakingABI,
    functionName: 'priceOfStaking',
  })

  // Read presale staker count
  const { data: presaleCount } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: stakingABI,
    functionName: 'getPresaleStakerCount',
  })

  // Check if user is presale staker
  const { data: presaleInfo } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: stakingABI,
    functionName: 'getPresaleStaker',
    args: address ? [address] : undefined,
  })

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Staking Contract</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Staking Price</p>
            <p className="text-2xl font-bold text-purple-600">
              {stakingPrice ? formatEther(stakingPrice) : '0'} tokens
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Presale Stakers</p>
            <p className="text-2xl font-bold text-indigo-600">
              {presaleCount?.toString() || '0'}
            </p>
          </div>
        </div>

        {address && (
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Your Staking Info</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-md">
                <p className="text-sm text-gray-600">Your Staked Amount</p>
                <p className="text-xl font-bold text-green-600">
                  {stakedAmount ? formatEther(stakedAmount) : '0'} tokens
                </p>
              </div>

              {presaleInfo && (
                <div className="p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-gray-600">Presale Staker Status</p>
                  <p className="text-lg font-semibold text-blue-600">
                    {presaleInfo[0] ? 'Yes' : 'No'}
                  </p>
                  {presaleInfo[0] && (
                    <p className="text-sm text-gray-600 mt-1">
                      Amount: {formatEther(presaleInfo[1])} tokens
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Note:</span> Staking operations require signatures and additional parameters.
            Use the contract interface directly for staking/unstaking operations.
          </p>
        </div>
      </div>
    </div>
  )
}
