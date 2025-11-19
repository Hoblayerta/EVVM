export const evvmABI = [
  {
    inputs: [
      { name: 'user', type: 'address' },
      { name: 'token', type: 'address' }
    ],
    name: 'getBalance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getEvvmID',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getEvvmMetadata',
    outputs: [
      {
        components: [
          { name: 'EvvmName', type: 'string' },
          { name: 'EvvmID', type: 'uint256' },
          { name: 'principalTokenName', type: 'string' },
          { name: 'principalTokenSymbol', type: 'string' },
          { name: 'principalTokenAddress', type: 'address' },
          { name: 'totalSupply', type: 'uint256' },
          { name: 'eraTokens', type: 'uint256' },
          { name: 'reward', type: 'uint256' }
        ],
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: 'user', type: 'address' },
      { name: 'token', type: 'address' },
      { name: 'quantity', type: 'uint256' }
    ],
    name: 'addBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'token', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    name: 'caPay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const
