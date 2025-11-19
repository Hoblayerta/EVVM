const { ethers } = require('ethers');

const errors = [
    "InvalidSignature()",
    "SenderIsNotTheExecutor()",
    "UpdateBalanceFailed()",
    "InvalidAsyncNonce()",
    "NotAnStaker()",
    "InsufficientBalance()",
    "NotAnCA()",
    "SenderIsNotTreasury()",
    "WindowToChangeEvvmIDExpired()"
];

console.log('Checking all error selectors:');
console.log('');

for (const error of errors) {
    try {
        const iface = new ethers.utils.Interface([`error ${error}`]);
        const selector = iface.getSighash(error.split('(')[0] + '()');
        console.log(error.padEnd(35), '→', selector);
        
        if (selector === '0x5c758b7e') {
            console.log('  ✅ MATCH!');
        }
    } catch (e) {
        console.log(error.padEnd(35), '→ Error calculating');
    }
}
