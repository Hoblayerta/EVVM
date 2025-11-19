'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CONFIG } from '@/config'

// Setup queryClient
const queryClient = new QueryClient()

// Get projectId from config
const projectId = CONFIG.REOWN_PROJECT_ID

// Create the modal
const metadata = {
  name: 'EVVM Cross-Chain Balancer',
  description: 'Transfer MATE tokens between EVVMs on Ethereum Sepolia',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [sepolia],
  metadata,
  projectId,
  features: {
    analytics: true
  }
})

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
