import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Web3ModalProvider } from '@/context/Web3Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EVVM Cross-Chain Balancer',
  description: 'Transfer MATE tokens between EVVMs on Arbitrum Sepolia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  )
}
