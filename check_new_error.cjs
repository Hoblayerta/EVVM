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

console.log('Looking for error with selector: 0x5c758b7e');
console.log('');

for (const error of errors) {
    try {
        const iface = new ethers.utils.Interface([`error ${error}`]);
        const selector = iface.getSighash(error.split('(')[0] + '()');
        
        if (selector === '0x5c758b7e') {
            console.log('✅ MATCH FOUND!');
            console.log('Error:', error);
            console.log('Selector:', selector);
        }
    } catch (e) {
        // ignore
    }
}
