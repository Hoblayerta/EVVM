'use client'

import { useState } from 'react'
import { useReadContract, useAccount, useChainId } from 'wagmi'
import { p2pSwapABI } from '@/contracts/p2pSwapABI'
import { CONTRACT_ADDRESSES, type SupportedChainId } from '@/contracts/addresses'
import { formatEther } from 'viem'

export function P2PSwapContract() {
  const { address } = useAccount()
  const chainId = useChainId() as SupportedChainId
  const [tokenA, setTokenA] = useState('')
  const [tokenB, setTokenB] = useState('')
  const [selectedMarket, setSelectedMarket] = useState<string>('')

  const p2pSwapAddress = CONTRACT_ADDRESSES[chainId]?.p2pSwap

  // Find market for token pair
  const { data: marketId } = useReadContract({
    address: p2pSwapAddress as `0x${string}`,
    abi: p2pSwapABI,
    functionName: 'findMarket',
    args: tokenA && tokenB ? [tokenA as `0x${string}`, tokenB as `0x${string}`] : undefined,
  })

  // Get all markets metadata
  const { data: allMarkets } = useReadContract({
    address: p2pSwapAddress as `0x${string}`,
    abi: p2pSwapABI,
    functionName: 'getAllMarketsMetadata',
  })

  // Get orders for selected market
  const { data: marketOrders } = useReadContract({
    address: p2pSwapAddress as `0x${string}`,
    abi: p2pSwapABI,
    functionName: 'getAllMarketOrders',
    args: selectedMarket ? [BigInt(selectedMarket)] : undefined,
  })

  // Get user's orders in selected market
  const { data: myOrders } = useReadContract({
    address: p2pSwapAddress as `0x${string}`,
    abi: p2pSwapABI,
    functionName: 'getMyOrdersInSpecificMarket',
    args: address && selectedMarket ? [address, BigInt(selectedMarket)] : undefined,
  })

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">P2P Swap Contract</h2>

      <div className="space-y-4">
        {/* Find Market Section */}
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-3">Find Market</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              value={tokenA}
              onChange={(e) => setTokenA(e.target.value)}
              placeholder="Token A Address (0x...)"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={tokenB}
              onChange={(e) => setTokenB(e.target.value)}
              placeholder="Token B Address (0x...)"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {marketId !== undefined && (
            <div className="mt-2 p-3 bg-blue-50 rounded-md">
              <p className="text-sm font-medium">Market ID: {marketId.toString()}</p>
            </div>
          )}
        </div>

        {/* All Markets */}
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-3">All Markets</h3>
          {allMarkets && allMarkets.length > 0 ? (
            <div className="space-y-2">
              {allMarkets.map((market, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMarket(index.toString())}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedMarket === index.toString()
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <p className="text-sm font-medium">Market #{index}</p>
                  <div className="text-xs text-gray-600 mt-1 space-y-1">
                    <p>Token A: {market.tokenA}</p>
                    <p>Token B: {market.tokenB}</p>
                    <p>Orders Available: {market.ordersAvailable.toString()}</p>
                    <p>Max Slot: {market.maxSlot.toString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No markets available</p>
          )}
        </div>

        {/* Market Orders */}
        {selectedMarket && (
          <div className="border-b pb-4">
            <h3 className="font-semibold mb-3">Market Orders</h3>
            {marketOrders && marketOrders.length > 0 ? (
              <div className="space-y-2">
                {marketOrders.map((order, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium">Order #{order.orderId.toString()}</p>
                    <div className="text-xs text-gray-600 mt-1 space-y-1">
                      <p>Seller: {order.seller}</p>
                      <p>Amount A: {formatEther(order.amountA)}</p>
                      <p>Amount B: {formatEther(order.amountB)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No orders in this market</p>
            )}
          </div>
        )}

        {/* My Orders */}
        {address && selectedMarket && (
          <div>
            <h3 className="font-semibold mb-3">My Orders in Market</h3>
            {myOrders && myOrders.length > 0 ? (
              <div className="space-y-2">
                {myOrders.map((order, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm font-medium">Order #{order.orderId.toString()}</p>
                    <div className="text-xs text-gray-600 mt-1 space-y-1">
                      <p>Amount A: {formatEther(order.amountA)}</p>
                      <p>Amount B: {formatEther(order.amountB)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">You have no orders in this market</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
