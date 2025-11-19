'use client'

import { EvvmContract } from './components/EvvmContract'
import { StakingContract } from './components/StakingContract'
import { P2PSwapContract } from './components/P2PSwapContract'
import { useAccount } from 'wagmi'

export default function Home() {
  const { address, isConnected } = useAccount()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">EVVM DApp</h1>
            <appkit-button />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isConnected ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to EVVM DApp
            </h2>
            <p className="text-gray-600 mb-6">
              Connect your wallet to interact with EVVM smart contracts
            </p>
            <div className="flex justify-center">
              <appkit-button />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 bg-white rounded-lg shadow-md p-4">
              <p className="text-sm text-gray-600">
                Connected Address:{' '}
                <span className="font-mono font-semibold text-gray-900">
                  {address}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* EVVM Contract */}
              <div className="lg:col-span-2">
                <EvvmContract />
              </div>

              {/* Staking Contract */}
              <StakingContract />

              {/* P2P Swap Contract */}
              <P2PSwapContract />
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <span className="font-semibold">Important:</span> Update the
                    contract addresses in{' '}
                    <code className="bg-yellow-100 px-1 rounded">
                      contracts/addresses.ts
                    </code>{' '}
                    with your deployed contract addresses.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            EVVM DApp - Powered by Reown AppKit & Wagmi
          </p>
        </div>
      </footer>
    </div>
  )
}
