const { ethers } = require('ethers');

// Datos de la transacción del error
const txData = "0x89b9516b00000000000000000000000061643d97e10e681d5ea76218abc29036ef3463cc0000000000000000000000000000000000000000000000008ac7230489e8000000000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000415f9c4fd12e35ce457b12101299af0ff5c18ed50550bbdafe50158ad65a5f99ed0a3f764026b97300fbe25ee6c566d8ed5acbd5d99fdd8207117689db0c22bda01c00000000000000000000000000000000000000000000000000000000000000";

const iface = new ethers.utils.Interface([
    "function depositToBalancerFromA(address user, uint256 amount, uint256 priorityFee, uint256 nonce, bytes calldata signature) external returns (bytes32 transferId)"
]);

const decoded = iface.parseTransaction({ data: txData });

console.log('📋 Transaction Details:');
console.log('Function:', decoded.name);
console.log('');
console.log('Parameters:');
console.log('  user:', decoded.args.user);
console.log('  amount:', ethers.utils.formatEther(decoded.args.amount), 'MATE');
console.log('  priorityFee:', ethers.utils.formatEther(decoded.args.priorityFee), 'ETH');
console.log('  nonce:', decoded.args.nonce.toString());
console.log('  signature:', decoded.args.signature);
console.log('');

// Verificar la firma
const messageHash = ethers.utils.solidityKeccak256(
    ['address', 'uint256', 'string', 'uint256', 'uint256'],
    [
        decoded.args.user,
        decoded.args.amount,
        'A→B',
        decoded.args.nonce,
        decoded.args.priorityFee
    ]
);

console.log('�� Signature Verification:');
console.log('Message Hash:', messageHash);
console.log('');

// Recuperar el firmante
const messageHashBytes = ethers.utils.arrayify(messageHash);
const recoveredAddress = ethers.utils.verifyMessage(messageHashBytes, decoded.args.signature);

console.log('Recovered Signer:', recoveredAddress);
console.log('Expected User:', decoded.args.user);
console.log('Match:', recoveredAddress.toLowerCase() === decoded.args.user.toLowerCase());
