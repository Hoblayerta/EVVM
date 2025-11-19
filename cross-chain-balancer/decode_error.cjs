const { ethers } = require('ethers');

// From the previous calculation we know:
const knownErrors = {
    '0x8baa579f': 'InvalidSignature()',
    '0x5c758b7e': 'SenderIsNotTheExecutor()',
    '0x2860e19a': 'UpdateBalanceFailed()',
    '0x1849850b': 'InvalidAsyncNonce()',
    '0x530cc182': 'NotAnStaker()',
    '0xf4d678b8': 'InsufficientBalance()'
};

const errorCode = '0x5c758b7e';
console.log('Error code:', errorCode);
console.log('Error name:', knownErrors[errorCode]);
console.log('');
console.log('This error means: The executor (fisher) is not msg.sender');
console.log('');
console.log('The EVVM pay() function checks:');
console.log('  if (executor != address(0)) {');
console.log('    if (msg.sender != executor)');
console.log('      revert ErrorsLib.SenderIsNotTheExecutor();');
console.log('  }');
