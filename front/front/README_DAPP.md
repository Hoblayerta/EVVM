# EVVM DApp

A Next.js application with Tailwind CSS to connect and interact with EVVM smart contracts using Reown AppKit (WalletConnect).

## Features

- Wallet connection via Reown AppKit
- Interact with three main contracts:
  - **EVVM Contract**: View metadata, check balances, and make payments
  - **Staking Contract**: View staking information and user stakes
  - **P2P Swap Contract**: Browse markets and orders

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Reown Project ID:

```env
NEXT_PUBLIC_PROJECT_ID=your_project_id_here
```

Get your Project ID from [https://dashboard.reown.com](https://dashboard.reown.com)

### 3. Update Contract Addresses

Edit `contracts/addresses.ts` and replace the placeholder addresses with your deployed contract addresses:

```typescript
export const CONTRACT_ADDRESSES = {
  // Mainnet
  1: {
    evvm: '0xYourEvvmContractAddress',
    staking: '0xYourStakingContractAddress',
    p2pSwap: '0xYourP2PSwapContractAddress',
  },
  // Sepolia
  11155111: {
    evvm: '0xYourEvvmContractAddress',
    staking: '0xYourStakingContractAddress',
    p2pSwap: '0xYourP2PSwapContractAddress',
  },
  // Base Sepolia
  84532: {
    evvm: '0xYourEvvmContractAddress',
    staking: '0xYourStakingContractAddress',
    p2pSwap: '0xYourP2PSwapContractAddress',
  },
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
front/
├── app/
│   ├── components/
│   │   ├── EvvmContract.tsx      # EVVM contract interaction
│   │   ├── StakingContract.tsx    # Staking contract interaction
│   │   └── P2PSwapContract.tsx    # P2P Swap contract interaction
│   ├── layout.tsx                 # Root layout with Web3 provider
│   └── page.tsx                   # Main page
├── config/
│   └── index.tsx                  # Wagmi & AppKit configuration
├── context/
│   └── index.tsx                  # AppKit context provider
├── contracts/
│   ├── addresses.ts               # Contract addresses by chain
│   ├── evvmABI.ts                # EVVM contract ABI
│   ├── stakingABI.ts             # Staking contract ABI
│   └── p2pSwapABI.ts             # P2P Swap contract ABI
└── next.config.ts                 # Next.js configuration
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Reown AppKit** - Wallet connection modal
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript interface for Ethereum
- **TypeScript** - Type-safe development

## Contract Interactions

### EVVM Contract

- View EVVM metadata (name, ID, token info)
- Check token balances
- Make payments (caPay function)

### Staking Contract

- View staking price
- Check your staked amount
- View presale staker status
- See total presale staker count

### P2P Swap Contract

- Find markets by token pairs
- Browse all available markets
- View market orders
- See your orders in specific markets

## Network Support

The app is configured to work with:

- Ethereum Mainnet
- Sepolia Testnet
- Base Sepolia

You can add more networks by editing `config/index.tsx`.

## Important Notes

1. Make sure to update contract addresses before deploying
2. Get a Reown Project ID from the dashboard
3. Test on testnets before mainnet deployment
4. Some functions require additional signatures and parameters

## Build for Production

```bash
npm run build
npm start
```

## License

EVVM-NONCOMMERCIAL-1.0
