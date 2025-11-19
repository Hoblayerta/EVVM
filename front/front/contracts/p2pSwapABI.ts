export const p2pSwapABI = [
  {
    inputs: [
      { name: 'tokenA', type: 'address' },
      { name: 'tokenB', type: 'address' }
    ],
    name: 'findMarket',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllMarketsMetadata',
    outputs: [
      {
        components: [
          { name: 'tokenA', type: 'address' },
          { name: 'tokenB', type: 'address' },
          { name: 'maxSlot', type: 'uint256' },
          { name: 'ordersAvailable', type: 'uint256' }
        ],
        name: 'orders',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'market', type: 'uint256' }],
    name: 'getAllMarketOrders',
    outputs: [
      {
        components: [
          { name: 'marketId', type: 'uint256' },
          { name: 'orderId', type: 'uint256' },
          { name: 'seller', type: 'address' },
          { name: 'amountA', type: 'uint256' },
          { name: 'amountB', type: 'uint256' }
        ],
        name: 'orders',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: 'user', type: 'address' },
      { name: 'market', type: 'uint256' }
    ],
    name: 'getMyOrdersInSpecificMarket',
    outputs: [
      {
        components: [
          { name: 'marketId', type: 'uint256' },
          { name: 'orderId', type: 'uint256' },
          { name: 'seller', type: 'address' },
          { name: 'amountA', type: 'uint256' },
          { name: 'amountB', type: 'uint256' }
        ],
        name: 'orders',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const
