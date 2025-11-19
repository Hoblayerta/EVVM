# EVVM Cross-Chain Balancer - Investigation Report

## Problem Summary

The EVVM Cross-Chain Balancer system was experiencing persistent `InvalidSignature` errors (error code `0x8baa579f`) when users attempted to sign transfer requests and fishers tried to execute them. Despite correct implementation of the signature format, EVVM was rejecting all signatures when called through the Balancer contract.

---

## Initial Architecture

### System Components

1. **Two EVVM Instances** (deployed on Arbitrum Sepolia):
   - **EVVM-A**: `0x09F862AD8D76054083bDa05BE32e6b305782cD19` (name: "scarf")
   - **EVVM-B**: `0xA1559Cf40E3f3d8364Aa21c6A2C8014e1e1c3f53` (name: "EVVM-B")
   - Both use EVVM ID: `0`
   - Both use Principal Token: `0x0000000000000000000000000000000000000001` (MATE)

2. **Balancer Contract**: EVVMLocalBalancer.sol
   - Facilitates token transfers between EVVM-A and EVVM-B
   - Uses signature-based gasless transactions
   - Deployed at: `0xF0882824C4DEA8d2a1881ad323b3BabB26FB8CAA` (fixed version)

3. **Frontend Application** (Next.js):
   - User interface for signing transfer requests
   - Fisher dashboard for executing pending transfers
   - Uses Reown AppKit (WalletConnect) for wallet connection

### Transfer Flow

1. **User signs transfer off-chain**:
   - Creates signature for: `{evvmID},pay,{balancerAddress},{token},{amount},{priorityFee},{nonce},{priorityFlag},{executor}`
   - Stores signed transfer in localStorage

2. **Fisher executes transfer on-chain**:
   - Calls `Balancer.depositToBalancerFromA(user, amount, priorityFee, nonce, signature)`
   - Balancer calls `EVVM.pay(...)` with the user's signature
   - Balancer transfers tokens to user in destination EVVM
   - Fisher earns priority fee + 0.1% fisher fee

---

## Root Cause Analysis

### The Core Issue: Executor Parameter Mismatch

**Problem**: The original Balancer contract passed `msg.sender` (the fisher's address) as the `executor` parameter when calling EVVM's `pay()` function.

```solidity
// ORIGINAL CODE (BROKEN)
IEvvm(evvmA_Address).pay(
    user,
    address(this),
    "",
    principalTokenA,
    amount,
    priorityFee,
    nonce,
    true,
    msg.sender,  // ❌ PROBLEM: Fisher's address as executor
    signature
);
```

**Why this fails**:

1. When users sign the transfer, they don't know which fisher will execute it
2. EVVM's signature verification constructs: `"0,pay,{receiver},{token},{amount},{priorityFee},{nonce},true,{executor}"`
3. User signed with `executor = 0x0000...0000` (unknown fisher)
4. Balancer passes `executor = msg.sender` (fisher's actual address)
5. EVVM verifies signature against a message containing the fisher's address
6. **Mismatch**: User signed `executor=0x0`, EVVM verifies against `executor={fisherAddress}`
7. Result: `InvalidSignature` error

### EVVM's Executor Verification

EVVM code (Evvm.sol:375-378):
```solidity
if (executor != address(0)) {
    if (msg.sender != executor)
        revert ErrorsLib.SenderIsNotTheExecutor();
}
```

When `executor = address(0)`, EVVM **bypasses executor verification**, allowing any address to execute the transaction.

---

## Solutions Implemented

### Solution 1: Fix Balancer Contract ✅

**Change**: Modified Balancer to pass `address(0)` as executor instead of `msg.sender`

**Files Modified**:
- `/home/scarf/frutero/evvm/cross-chain-balancer/src/EVVMLocalBalancer.sol`

**Changes**:
```solidity
// Line 208 (depositToBalancerFromA)
IEvvm(evvmA_Address).pay(
    user,
    address(this),
    "",
    principalTokenA,
    amount,
    priorityFee,
    nonce,
    true,
    address(0),  // ✅ FIXED: Use address(0) to allow any fisher
    signature
);

// Line 318 (depositToBalancerFromB) - Same fix
IEvvm(evvmB_Address).pay(
    user,
    address(this),
    "",
    principalTokenB,
    amount,
    priorityFee,
    nonce,
    true,
    address(0),  // ✅ FIXED: Use address(0) to allow any fisher
    signature
);
```

### Solution 2: Redeploy Balancer Contract ✅

**Deployment**:
```bash
forge script script/Deploy.s.sol:DeployBalancer \
  --rpc-url https://sepolia-rollup.arbitrum.io/rpc \
  --broadcast --slow
```

**New Address**: `0xF0882824C4DEA8d2a1881ad323b3BabB26FB8CAA`

### Solution 3: Update Frontend Configuration ✅

**File Modified**: `/home/scarf/frutero/evvm/cross-chain-balancer/frontend-next/config/index.ts`

```typescript
// Line 32
BALANCER: {
    address: '0xF0882824C4DEA8d2a1881ad323b3BabB26FB8CAA', // Updated to new deployment
},
```

**Frontend signature format** (already correct):
```typescript
// page.tsx:217
const message = `${evvmID},pay,${CONFIG.BALANCER.address.toLowerCase()},${principalToken.toLowerCase()},${amountWei.toString()},${priorityFeeWei.toString()},${nonce.toString()},true,0x0000000000000000000000000000000000000000`
//                                                                                                                                                                                         ^^^^ executor = address(0)
```

---

## Verification & Testing

### Test 1: EVVM ID Verification ✅

**Result**: Both EVVM-A and EVVM-B use ID = `0`

```javascript
// Query results:
EVVM-A: { name: "scarf", EvvmID: 0, ... }
EVVM-B: { name: "EVVM-B", EvvmID: 0, ... }
```

### Test 2: Signature Format Validation ✅

**User signed message**:
```
0,pay,0xf0882824c4dea8d2a1881ad323b3babb26fb8caa,0x0000000000000000000000000000000000000001,99950000000000000000,1000000000000000,0,true,0x0000000000000000000000000000000000000000
```

**EVVM constructs message** (simulated):
```
0,pay,0xf0882824c4dea8d2a1881ad323b3babb26fb8caa,0x0000000000000000000000000000000000000001,99950000000000000000,1000000000000000,0,true,0x0000000000000000000000000000000000000000
```

**Result**: ✅ Messages match perfectly

### Test 3: Signature Recovery ✅

```javascript
const recoveredAddress = ethers.utils.verifyMessage(message, signature);
// Expected: 0x61643d97e10E681d5EA76218abC29036Ef3463Cc
// Recovered: 0x61643d97e10E681d5EA76218abC29036Ef3463Cc
// Match: ✅ YES
```

### Test 4: Direct EVVM Call ✅

```javascript
// Calling EVVM.pay() directly with user's signature
const gasEstimate = await evvmA.estimateGas.pay(...);
// Result: 152,577 gas ✅ SUCCESS
```

### Test 5: Balancer Call Simulation ✅

```javascript
// Calling Balancer.depositToBalancerFromA() with user's signature
const gasEstimate = await balancer.estimateGas.depositToBalancerFromA(...);
// Result: 256,290 gas ✅ SUCCESS
```

### Test 6: User Balance Check ✅

```
Balance in EVVM-A: 300.0 MATE ✅
Required: 100.001 MATE (transfer + fee)
Sufficient: YES
```

### Test 7: Nonce Verification ✅

```
Balancer nonce for user: 0
EVVM async nonce used: false
Nonce valid: ✅ YES
```

---

## Current Status

### ✅ Working (Verified via Command-Line Tests)

1. **Signature generation**: Correct format, valid recovery
2. **Direct EVVM calls**: Gas estimation succeeds
3. **Balancer contract calls**: Gas estimation succeeds (in Node.js)
4. **Contract deployment**: New Balancer deployed successfully
5. **Configuration**: Frontend updated with new contract address

### ❌ Still Failing (In Browser/MetaMask)

**Error**: `0x8baa579f` (InvalidSignature) when executing from browser

**Discrepancy**:
- Command-line tests with ethers.js: ✅ Work perfectly
- Browser tests with MetaMask: ❌ Fail with InvalidSignature

---

## Possible Remaining Issues

### Hypothesis 1: MetaMask Signature Format Difference

**Theory**: MetaMask might be signing messages differently than `ethers.signMessage()` in Node.js

**Evidence**:
- Same message, different environments produce different results
- Node.js signature: Works
- MetaMask signature: Fails

**Investigation needed**:
- Check if MetaMask uses a different EIP-191 implementation
- Verify signature `v` value (should be 27 or 28)
- Test with different wallet providers (Coinbase Wallet, WalletConnect)

### Hypothesis 2: Transaction Context Difference

**Theory**: Browser transaction submission adds extra context that affects signature verification

**Evidence**:
- `estimateGas` in Node.js: Success
- Actual transaction in browser: Fails

**Investigation needed**:
- Compare raw transaction data between Node.js and browser
- Check if MetaMask modifies transaction parameters
- Verify gas price, chain ID, or other transaction fields

### Hypothesis 3: Checksummed Address Case Sensitivity

**Theory**: Mixed-case addresses from MetaMask vs lowercase in signature message

**User address**: `0x61643d97e10E681d5EA76218abC29036Ef3463Cc` (mixed case - checksummed)

**Evidence**:
- Solidity `==` operator is case-insensitive for addresses
- But `ecrecover` might be sensitive to address formatting

**Status**: Unlikely (Solidity handles this correctly)

### Hypothesis 4: RPC/Network Issues

**Theory**: Arbitrum Sepolia RPC inconsistency between static calls and transactions

**Evidence**:
- Static calls (estimateGas): Work
- Actual transactions: Fail

**Investigation needed**:
- Try different RPC endpoints
- Check Arbitrum Sepolia network status
- Test on different network (local fork)

---

## Recommended Next Steps

### Immediate Actions

1. **Create Browser Console Test Script**:
   ```javascript
   // Paste in browser console to test signature directly
   const message = "0,pay,0xf0882824c4dea8d2a1881ad323b3babb26fb8caa,0x0000000000000000000000000000000000000001,100000000000000000000,1000000000000000,0,true,0x0000000000000000000000000000000000000000";
   const signature = await signer.signMessage(message);
   const recovered = ethers.utils.verifyMessage(message, signature);
   console.log("Match:", recovered === address);
   ```

2. **Test Alternative Wallet Providers**:
   - Try Coinbase Wallet
   - Try WalletConnect with different wallets
   - Compare signatures across providers

3. **Compare Transaction Data**:
   - Capture raw transaction data from browser
   - Compare with Node.js test transaction
   - Look for parameter differences

4. **Network Testing**:
   - Try on Ethereum Sepolia (different L2)
   - Fork Arbitrum Sepolia locally
   - Test with Hardhat local network

### Long-term Solutions

1. **Alternative Architecture**:
   - Remove signature requirement
   - Use direct `msg.sender` authorization
   - Require users to approve Balancer contract

2. **Signature Debugging Interface**:
   - Add frontend tool to verify signatures
   - Show step-by-step signature construction
   - Display recovered address

3. **Enhanced Error Handling**:
   - Decode custom errors in frontend
   - Show detailed error messages
   - Add signature validation before submission

---

## Technical Details

### Signature Format (EIP-191)

**Message Construction**:
```
evvmID,pay,receiverAddress,token,amount,priorityFee,nonce,priorityFlag,executor
```

**Example**:
```
0,pay,0xf0882824c4dea8d2a1881ad323b3babb26fb8caa,0x0000000000000000000000000000000000000001,100000000000000000000,1000000000000000,0,true,0x0000000000000000000000000000000000000000
```

**EIP-191 Prefix**:
```
\x19Ethereum Signed Message:\n{messageLength}{message}
```

**Signature Format**: 65 bytes
- `r`: 32 bytes
- `s`: 32 bytes
- `v`: 1 byte (27 or 28)

### Contract Addresses

| Component | Address | Network |
|-----------|---------|---------|
| EVVM-A | `0x09F862AD8D76054083bDa05BE32e6b305782cD19` | Arbitrum Sepolia |
| EVVM-B | `0xA1559Cf40E3f3d8364Aa21c6A2C8014e1e1c3f53` | Arbitrum Sepolia |
| Balancer (OLD) | `0x3277E63bc6Abde65fA4290a5b6fE2b4628d0bc7c` | Arbitrum Sepolia |
| Balancer (NEW) | `0xF0882824C4DEA8d2a1881ad323b3BabB26FB8CAA` | Arbitrum Sepolia |

### Error Codes

| Code | Error | Meaning |
|------|-------|---------|
| `0x8baa579f` | InvalidSignature() | Signature verification failed |
| `0x5c758b7e` | SenderIsNotTheExecutor() | Executor mismatch |
| `0xf4d678b8` | InsufficientBalance() | Not enough MATE tokens |
| `0x2860e19a` | UpdateBalanceFailed() | Balance update failed |

---

## Conclusion

The core executor parameter issue has been **fixed and verified** through extensive command-line testing. The Balancer contract now correctly passes `address(0)` as executor, and signatures are valid when tested with Node.js ethers.js.

However, there remains a **discrepancy between command-line and browser execution** that needs further investigation. The signature format is correct, the contract logic is sound, but something in the MetaMask/browser environment is causing EVVM to reject the signatures.

**Most likely cause**: Subtle difference in how MetaMask signs messages vs ethers.js `signMessage()`, possibly related to:
- Message encoding (UTF-8 vs hex)
- Signature normalization (v value)
- Transaction context (gas, chain ID)

**Recommended approach**: Create a minimal reproduction case that compares MetaMask signatures directly with ethers.js signatures to identify the exact difference.

---

## Files Modified

1. `/home/scarf/frutero/evvm/cross-chain-balancer/src/EVVMLocalBalancer.sol` (lines 208, 318)
2. `/home/scarf/frutero/evvm/cross-chain-balancer/frontend-next/config/index.ts` (line 32)

## Test Files Created

1. `query_evvm_id.js` - Query EVVM metadata
2. `verify_signature.js` - Verify signature recovery
3. `simulate_evvm_verification.js` - Simulate EVVM message construction
4. `test_direct_evvm_call.js` - Test direct EVVM.pay() call
5. `check_evvm_nonce.js` - Check nonce usage
6. `test_balancer_call.js` - Test Balancer.depositToBalancerFromA() call

All tests: ✅ **PASSED**
