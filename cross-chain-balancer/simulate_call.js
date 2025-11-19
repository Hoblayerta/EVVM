const { ethers } = require('ethers');

const EVVM_A = '0x09F862AD8D76054083bDa05BE32e6b305782cD19';
const BALANCER = '0x3277E63bc6Abde65fA4290a5b6fE2b4628d0bc7c';
const USER = '0x61643d97e10e681d5ea76218abc29036ef3463cc';
const PRINCIPAL_TOKEN = '0x0000000000000000000000000000000000000001';

const EVVM_ABI = [
    "function getBalance(address user, address token) external view returns (uint256)",
    "function pay(address from, address to_address, string memory to_identity, address token, uint256 amount, uint256 priorityFee, uint256 nonce, bool priorityFlag, address executor, bytes memory signature) external"
];

async function simulatePayCall() {
    const provider = new ethers.providers.JsonRpcProvider({
        url: 'https://sepolia-rollup.arbitrum.io/rpc',
        timeout: 30000
    });
    
    await provider.ready;
    
    const evvmA = new ethers.Contract(EVVM_A, EVVM_ABI, provider);
    
    console.log('🔍 Simulating pay() call from Balancer contract');
    console.log('');
    console.log('Parameters:');
    console.log('  from (user):', USER);
    console.log('  to (balancer):', BALANCER);
    console.log('  token:', PRINCIPAL_TOKEN);
    console.log('  amount: 10 MATE');
    console.log('');
    
    // Check user balance
    const balance = await evvmA.getBalance(USER, PRINCIPAL_TOKEN);
    console.log('✅ User Balance in EVVM-A:', ethers.utils.formatEther(balance), 'MATE');
    console.log('');
    
    // Create the same signature that was used
    const signature = '0x5f9c4fd12e35ce457b12101299af0ff5c18ed50550bbdafe50158ad65a5f99ed0a3f764026b97300fbe25ee6c566d8ed5acbd5d99fdd8207117689db0c22bda01c';
    const amount = ethers.utils.parseEther('10');
    const priorityFee = ethers.utils.parseEther('0.001');
    const nonce = 0;
    
    // Try to simulate the call
    try {
        console.log('🔄 Attempting to simulate pay() call...');
        
        // Simulate from the Balancer address
        const calldata = evvmA.interface.encodeFunctionData('pay', [
            USER,                // from
            BALANCER,           // to_address
            '',                 // to_identity
            PRINCIPAL_TOKEN,    // token
            amount,             // amount
            priorityFee,        // priorityFee
            nonce,              // nonce
            true,               // priorityFlag
            USER,               // executor (the fisher wallet)
            signature           // signature
        ]);
        
        const result = await provider.call({
            to: EVVM_A,
            data: calldata,
            from: BALANCER  // Simulate call from Balancer contract
        });
        
        console.log('✅ Call succeeded!');
        console.log('Result:', result);
        
    } catch (e) {
        console.log('❌ Call failed:', e.message);
        
        if (e.data) {
            console.log('Error data:', e.data);
        }
        
        // Check if it's the InsufficientBalance error
        if (e.data === '0x8baa579f' || (e.message && e.message.includes('0x8baa579f'))) {
            console.log('');
            console.log('📌 This is the InsufficientBalance error!');
            console.log('   The EVVM contract is checking the balance and finding it insufficient.');
            console.log('   But we verified the user has 200 MATE...');
            console.log('');
            console.log('🔍 Possible causes:');
            console.log('   1. The EVVM contract might be checking a different balance');
            console.log('   2. There might be a bug in the EVVM pay() function');
            console.log('   3. The signature verification might be failing silently');
        }
    }
}

simulatePayCall().catch(console.error);
