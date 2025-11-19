const { ethers } = require('ethers');

const EVVM_A = '0x09F862AD8D76054083bDa05BE32e6b305782cD19';
const EVVM_B = '0xA1559Cf40E3f3d8364Aa21c6A2C8014e1e1c3f53';
const PRINCIPAL_TOKEN = '0x0000000000000000000000000000000000000001';
const USER = '0x61643d97e10e681d5ea76218abc29036ef3463cc';

const ABI = [
    "function getBalance(address user, address token) external view returns (uint256)"
];

async function checkBalances() {
    const provider = new ethers.providers.JsonRpcProvider('https://sepolia-rollup.arbitrum.io/rpc');
    
    const evvmA = new ethers.Contract(EVVM_A, ABI, provider);
    const evvmB = new ethers.Contract(EVVM_B, ABI, provider);
    
    console.log('🔍 Checking balances for:', USER);
    console.log('');
    
    try {
        const balA = await evvmA.getBalance(USER, PRINCIPAL_TOKEN);
        console.log('📍 EVVM-A Balance:', ethers.utils.formatEther(balA), 'MATE');
        console.log('   Raw:', balA.toString());
    } catch (e) {
        console.log('❌ Error EVVM-A:', e.message);
    }
    
    console.log('');
    
    try {
        const balB = await evvmB.getBalance(USER, PRINCIPAL_TOKEN);
        console.log('📍 EVVM-B Balance:', ethers.utils.formatEther(balB), 'MATE');
        console.log('   Raw:', balB.toString());
    } catch (e) {
        console.log('❌ Error EVVM-B:', e.message);
    }
}

checkBalances().catch(console.error);
