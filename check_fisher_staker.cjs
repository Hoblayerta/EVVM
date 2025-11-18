const { ethers } = require('ethers');

const EVVM_A = '0x09F862AD8D76054083bDa05BE32e6b305782cD19';
const FISHER = '0x61643d97e10e681d5ea76218abc29036ef3463cc';

const ABI = [
    "function isAddressStaker(address user) external view returns (bool)"
];

async function checkStaker() {
    const provider = new ethers.providers.JsonRpcProvider({
        url: 'https://sepolia-rollup.arbitrum.io/rpc',
        timeout: 30000
    });
    
    await provider.ready;
    
    const evvmA = new ethers.Contract(EVVM_A, ABI, provider);
    
    console.log('🔍 Checking if fisher is staker');
    console.log('Fisher:', FISHER);
    console.log('');
    
    const isStaker = await evvmA.isAddressStaker(FISHER);
    console.log('Is Staker:', isStaker);
    
    if (!isStaker) {
        console.log('');
        console.log('⚠️  Fisher is NOT a staker!');
        console.log('   This means the priorityFee will NOT be transferred.');
        console.log('   But some EVVM versions still check for total balance.');
    } else {
        console.log('');
        console.log('✅ Fisher IS a staker!');
        console.log('   The priorityFee will be transferred to the fisher.');
    }
}

checkStaker().catch(console.error);
