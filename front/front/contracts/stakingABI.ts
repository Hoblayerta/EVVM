export const stakingABI = [
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'getUserAmountStaked',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'priceOfStaking',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getPresaleStakerCount',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'getPresaleStaker',
    outputs: [
      { name: '', type: 'bool' },
      { name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: 'user', type: 'address' },
      { name: 'isStaking', type: 'bool' },
      { name: 'nonce', type: 'uint256' },
      { name: 'signature', type: 'bytes' },
      { name: 'priorityFee_EVVM', type: 'uint256' },
      { name: 'nonce_EVVM', type: 'uint256' },
      { name: 'priorityFlag_EVVM', type: 'bool' },
      { name: 'signature_EVVM', type: 'bytes' }
    ],
    name: 'presaleStaking',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { name: 'user', type: 'address' },
      { name: 'isStaking', type: 'bool' },
      { name: 'amountOfStaking', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'signature', type: 'bytes' },
      { name: 'priorityFee_EVVM', type: 'uint256' },
      { name: 'nonce_EVVM', type: 'uint256' },
      { name: 'priorityFlag_EVVM', type: 'bool' },
      { name: 'signature_EVVM', type: 'bytes' }
    ],
    name: 'publicStaking',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const
