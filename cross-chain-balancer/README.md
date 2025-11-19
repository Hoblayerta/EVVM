# EVVM

🌉 **EVVM Cross-Chain Balancer** - Transfer MATE tokens seamlessly between EVVM-A and EVVM-B on Ethereum Sepolia

## 🚀 Live Demo

**Frontend**: [Deploy your own or run locally]
**Network**: Ethereum Sepolia (Chain ID: 11155111)

## 📊 Contract Addresses

### **Deployed Contracts (Ethereum Sepolia)**
```javascript
EVVM_A:    0xcdFde01B0A41914B076D8aF8f50c4eCbe8E3E639
EVVM_B:    0x4B2CB8a51C8522f18234Aa7b441725106248B432
BALANCER:  0x20492001407c5C2a64D9Aa1c5bA00A2825B75044
```

### **Principal Token**
```javascript
MATE_TOKEN: 0x0000000000000000000000000000000000000001
```

## 🔗 Live Transaction Example

**Successful Transfer Between EVVM-A → EVVM-B**:
[View on Etherscan](https://sepolia.etherscan.io/tx/0x54849d9ac1d475c5e9b210b88ac3b56335a92ea9c02493f99c7b4b4f4bf64b9e#eventlog)

This transaction demonstrates the cross-chain balancing mechanism working in real-time.

## 🎯 What is EVVM?

EVVM (Ethereum Virtual Virtual Machine) is a cross-chain balancing system that allows users to:

- **Transfer MATE tokens** between different virtual machines (EVVM-A and EVVM-B)
- **Maintain balances** across multiple execution environments
- **Use faucets** to obtain test MATE tokens for development
- **Experience seamless** cross-chain token management

## ✨ Features

### 🌐 **Network Resilience**
- ✅ Auto-detects network switching
- ✅ Graceful error recovery
- ✅ Real-time status indicators
- ✅ Seamless wallet integration

### 💰 **MATE Token Management**
- 🚰 **Faucet System**: Get 100 MATE tokens per click
- 📊 **Balance Tracking**: Real-time balance updates
- 🔄 **Cross-Chain Transfers**: Move tokens between EVVMs
- 📈 **Transaction History**: Track all operations

### 🎨 **User Experience**
- 🔗 **WalletConnect Integration**: Connect with any wallet
- 📱 **Responsive Design**: Works on desktop and mobile
- ⚡ **Fast Operations**: Optimized for speed
- 🛡️ **Secure**: Built with security best practices

## 🚀 Quick Start

### **Prerequisites**
- MetaMask or compatible wallet
- Ethereum Sepolia testnet configured
- Sepolia ETH for gas fees

### **1. Connect to Sepolia**
```javascript
Network: Ethereum Sepolia
Chain ID: 11155111
RPC: https://ethereum-sepolia-rpc.publicnode.com
```

### **2. Run Frontend**
```bash
cd frontend-next
npm install
npm run dev
```

### **3. Start Using**
1. Connect your wallet
2. Wait for network initialization
3. Use faucets to get MATE tokens
4. Transfer between EVVM-A and EVVM-B
5. Monitor balances in real-time

## 📁 Project Structure

```
cross-chain-balancer/
├── 📄 README.md                    # This file
├── 📄 FRONTEND_IMPROVEMENTS_SUMMARY.md  # Technical improvements
├── 📄 MATE_TOKEN_GUIDE.md          # MATE token documentation
├── 📄 DEPLOYMENT_TEST_RESULTS.md   # Contract deployment results
├── 📂 contracts/                   # Smart contracts
│   ├── SimplifiedEVVMBalancer.sol  # Main balancer contract
│   ├── MockEVVM.sol               # EVVM implementation
│   └── deploy.js                  # Deployment script
└── 📂 frontend-next/              # Next.js frontend
    ├── 📂 app/
    │   ├── page.tsx               # Main application
    │   ├── layout.tsx             # App layout
    │   └── globals.css            # Global styles
    ├── 📂 components/             # React components
    ├── 📂 config/                 # Configuration
    └── 📂 context/               # React context
```

## 🔧 Technical Architecture

### **Smart Contract Design**
```solidity
SimplifiedEVVMBalancer {
  - directTransfer(fromEVVM, toEVVM, amount)
  - protocolFee: 0.5% (50 basis points)
  - Multi-EVVM support
}

MockEVVM {
  - addBalance(user, token, amount)  // Faucet function
  - getBalance(user, token)          // Balance query
  - Internal balance mapping
}
```

### **Frontend Architecture**
- **Framework**: Next.js 14 with TypeScript
- **Wallet**: Reown AppKit (WalletConnect v2)
- **Blockchain**: ethers.js v6
- **State**: React hooks with caching
- **Styling**: CSS-in-JS with responsive design

## 💡 How MATE Tokens Work

### **⚠️ Important: MATE ≠ ERC20**

MATE tokens are **internal contract balances**, not standard ERC20 tokens:

❌ **Won't appear in**: Etherscan token lists, MetaMask assets
✅ **Will appear in**: Frontend application, contract calls

### **Checking Balances**

**Frontend (Recommended)**:
- Connect wallet and view balances directly

**Command Line**:
```bash
# Check EVVM-A balance
cast call 0xcdFde01B0A41914B076D8aF8f50c4eCbe8E3E639 \
  "getBalance(address,address)" \
  YOUR_ADDRESS \
  0x0000000000000000000000000000000000000001 \
  --rpc-url https://ethereum-sepolia-rpc.publicnode.com

# Check EVVM-B balance
cast call 0x4B2CB8a51C8522f18234Aa7b441725106248B432 \
  "getBalance(address,address)" \
  YOUR_ADDRESS \
  0x0000000000000000000000000000000000000001 \
  --rpc-url https://ethereum-sepolia-rpc.publicnode.com
```

## 🧪 Testing & Development

### **Faucet Usage**
- Each faucet click adds **100 MATE tokens**
- Unlimited usage for testing
- Immediate balance updates

### **Transfer Testing**
1. Ensure you have MATE tokens in source EVVM
2. Use the transfer interface
3. Confirm transaction in wallet
4. Verify balance changes in both EVVMs

### **Network Switching**
The frontend automatically handles:
- Network change detection
- Contract reinitialization
- Graceful error recovery
- User feedback during transitions

## 🛠️ Deployment

### **Smart Contracts**
```bash
# Deploy to Sepolia
cd contracts
npx hardhat run deploy.js --network sepolia
```

### **Frontend**
```bash
# Build and deploy
cd frontend-next
npm run build
npm start
```

## 🔍 Verification & Monitoring

### **Contract Verification**
- All contracts deployed on Ethereum Sepolia
- Verified source code on Etherscan
- Public ABI available for integration

### **Transaction Monitoring**
- View transfers: [Example Transaction](https://sepolia.etherscan.io/tx/0x54849d9ac1d475c5e9b210b88ac3b56335a92ea9c02493f99c7b4b4f4bf64b9e#eventlog)
- Monitor balances in real-time
- Track faucet operations

## 📚 Documentation

- **[Frontend Improvements](./FRONTEND_IMPROVEMENTS_SUMMARY.md)**: Technical implementation details
- **[MATE Token Guide](./MATE_TOKEN_GUIDE.md)**: Complete token documentation
- **[Deployment Results](./DEPLOYMENT_TEST_RESULTS.md)**: Contract deployment verification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🎯 Roadmap

- [ ] Multi-chain support (Polygon, BSC)
- [ ] Enhanced UI/UX improvements
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Governance token integration

---

**Built with ❤️ for the Ethereum ecosystem**

🔗 **Links**:
- [Etherscan Contract](https://sepolia.etherscan.io/address/0x20492001407c5C2a64D9Aa1c5bA00A2825B75044)
- [Example Transaction](https://sepolia.etherscan.io/tx/0x54849d9ac1d475c5e9b210b88ac3b56335a92ea9c02493f99c7b4b4f4bf64b9e#eventlog)
- [Frontend Demo](#) (Deploy your own)