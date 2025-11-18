const { ethers } = require('ethers');

const EVVM_A = '0x09F862AD8D76054083bDa05BE32e6b305782cD19';

const ABI = [
    "function getEvvmID() external view returns (uint256)"
];

async function getEvvmID() {
    const provider = new ethers.providers.JsonRpcProvider({
        url: 'https://sepolia-rollup.arbitrum.io/rpc',
        timeout: 30000
    });
    
    await provider.ready;
    
    const evvmA = new ethers.Contract(EVVM_A, ABI, provider);
    
    console.log('🔍 Getting EVVM-A ID');
    console.log('');
    
    const evvmID = await evvmA.getEvvmID();
    console.log('EVVM-A ID:', evvmID.toString());
    
    return evvmID.toString();
}

getEvvmID().catch(console.error);
