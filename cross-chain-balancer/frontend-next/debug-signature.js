// Debug utility to compare Node.js vs MetaMask signature creation
// Run with: node debug-signature.js

const { ethers } = require('ethers')

async function debugSignatures() {
  // Test parameters - using the exact same values from the browser
  const evvmID = '0'
  const balancerAddress = '0xf0882824c4dea8d2a1881ad323b3babb26fb8caa'
  const principalToken = '0x0000000000000000000000000000000000000001'
  const amount = '100000000000000000000'
  const priorityFee = '10000000000000000'
  const nonce = '0'

  // Test addresses - both checksummed and lowercase
  const addressChecksummed = '0x61643d97e10E681d5EA76218abC29036Ef3463Cc'
  const addressLowercase = '0x61643d97e10e681d5ea76218abc29036ef3463cc'

  // Create message
  const message = `${evvmID},pay,${balancerAddress.toLowerCase()},${principalToken.toLowerCase()},${amount},${priorityFee},${nonce},true,0x0000000000000000000000000000000000000000`

  console.log('🔍 Signature Debug Analysis')
  console.log('=' .repeat(50))
  console.log('Message:', message)
  console.log('Address (checksummed):', addressChecksummed)
  console.log('Address (lowercase):', addressLowercase)
  console.log('')

  // Create a mock wallet with the test private key (for testing only)
  // Note: This is a test key, never use in production
  const wallet = new ethers.Wallet('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef')
  console.log('Test wallet address:', wallet.address)
  console.log('')

  try {
    // Sign with ethers.js
    const signature = await wallet.signMessage(message)
    console.log('✅ Node.js ethers.js signature:', signature)

    // Verify signature
    const recoveredAddress = ethers.verifyMessage(message, signature)
    console.log('✅ Recovered address:', recoveredAddress)
    console.log('✅ Match with wallet:', recoveredAddress.toLowerCase() === wallet.address.toLowerCase())
    console.log('')

    // Test message hash creation
    const messageHash = ethers.hashMessage(message)
    console.log('📝 Message hash:', messageHash)
    console.log('')

    // Test with different v values
    const sig = ethers.Signature.from(signature)
    console.log('🔢 Signature components:')
    console.log('  r:', sig.r)
    console.log('  s:', sig.s)
    console.log('  v:', sig.v)
    console.log('  recoveryParam:', sig.recoveryParam)

  } catch (error) {
    console.error('❌ Error in Node.js signing:', error)
  }
}

debugSignatures()