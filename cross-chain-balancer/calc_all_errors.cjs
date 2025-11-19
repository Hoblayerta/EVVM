const { ethers } = require('ethers');

const errors = [
    "InvalidSignature()",
    "SenderIsNotTheExecutor()",
    "UpdateBalanceFailed()",
    "InvalidAsyncNonce()",
    "NotAnStaker()",
    "InsufficientBalance()",
    "InvalidAmount(uint256,uint256)",
    "NotAnCA()",
    "SenderIsNotTreasury()",
    "WindowToChangeEvvmIDExpired()"
];

console.log('Looking for error with selector: 0x8baa579f');
console.log('');

for (const error of errors) {
    try {
        const iface = new ethers.utils.Interface([`error ${error}`]);
        const selector = iface.getSighash(error.split('(')[0] + '()');
        
        if (selector === '0x8baa579f') {
            console.log('✅ MATCH FOUND!');
            console.log('Error:', error);
            console.log('Selector:', selector);
        } else {
            console.log(error.padEnd(35), '→', selector);
        }
    } catch (e) {
        console.log(error.padEnd(35), '→ Failed to calculate');
    }
}
