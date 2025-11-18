const { ethers } = require('ethers');

// Calculate error selector for InsufficientBalance()
const iface = new ethers.utils.Interface([
    "error InsufficientBalance()"
]);

const selector = iface.getSighash("InsufficientBalance()");
console.log('InsufficientBalance() selector:', selector);
console.log('Expected from error:', '0x8baa579f');
console.log('Match:', selector === '0x8baa579f');
