# 🌉 Cross-Chain Balancer - Sistema de Firmas ERC-191

> **Documentación específica sobre cómo el balancer utiliza firmas ERC-191 para transferencias cross-chain**

## 📋 Resumen Ejecutivo

El **Cross-Chain Balancer** NO verifica firmas directamente. En su lugar, actúa como **intermediario** que:

1. ✅ Recibe firmas ERC-191 del usuario
2. ✅ Pasa estas firmas a los contratos EVVM (A o B)
3. ✅ Los EVVM verifican las firmas usando `SignatureRecover`
4. ✅ Si la firma es válida, el balancer completa la transferencia

---

## 📍 Implementación del Formato ERC-191

### 1. Librería SignatureRecover - Implementación Core

**Archivo:** `Testnet-Contracts/src/library/SignatureRecover.sol`

```solidity
// Líneas 89-102: Implementación del formato ERC-191
function recoverSigner(
    string memory message,
    bytes memory signature
) internal pure returns (address) {
    bytes32 messageHash = keccak256(
        abi.encodePacked(
            "\x19Ethereum Signed Message:\n",  // ← Prefijo ERC-191
            Strings.toString(bytes(message).length),  // ← Longitud del mensaje
            message  // ← Mensaje original
        )
    );
    (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature);
    return ecrecover(messageHash, v, r, s);
}
```

### 2. Erc191TestBuilder - Para Testing

**Archivo:** `Testnet-Contracts/src/library/Erc191TestBuilder.sol`

```solidity
// Líneas 464-475: Misma implementación para testing
function buildHashForSign(
    string memory messageToSign
) internal pure returns (bytes32) {
    return
        keccak256(
            abi.encodePacked(
                "\x19Ethereum Signed Message:\n",  // ← Prefijo ERC-191
                Strings.toString(bytes(messageToSign).length),  // ← Longitud
                messageToSign  // ← Mensaje
            )
        );
}
```

### 3. Uso en P2PSwap - Importación y Uso

**Archivo:** `Testnet-Contracts/src/contracts/p2pSwap/P2PSwap.sol`

```solidity
// Línea 42: Importación
import {SignatureRecover} from "@evvm/testnet-contracts/library/SignatureRecover.sol";

// Línea 49: Declaración de uso
using SignatureRecover for *;

// Ejemplo de uso en función makeOrder (líneas 268-280)
if (
    !SignatureUtils.verifyMessageSignedForMakeOrder(
        Evvm(evvmAddress).getEvvmID(),
        user,
        metadata.nonce,
        metadata.tokenA,
        metadata.tokenB,
        metadata.amountA,
        metadata.amountB,
        signature  // ← Esta firma debe estar en formato ERC-191
    )
) {
    revert("Invalid signature");
}
```

### 4. SignatureUtils (Wrapper)

**Archivo:** `Testnet-Contracts/src/contracts/p2pSwap/lib/SignatureUtils.sol`

```solidity
// Línea 4: Import de SignatureRecover
import {SignatureRecover} from "@evvm/testnet-contracts/library/SignatureRecover.sol";

// Líneas 12-15: Documentación explícita de EIP-191
/**
 *  @dev using EIP-191 (https://eips.ethereum.org/EIPS/eip-191) can be used to sign and
 *       verify messages, the next functions are used to verify the messages signed
 *       by the users
 */

// Líneas 17-45: Función que construye el mensaje y llama a SignatureRecover
function verifyMessageSignedForMakeOrder(
    uint256 evvmID,
    address signer,
    uint256 _nonce,
    address _tokenA,
    address _tokenB,
    uint256 _amountA,
    uint256 _amountB,
    bytes memory signature
) internal pure returns (bool) {
    return
        SignatureRecover.signatureVerification(  // ← Llamada a la librería core
            Strings.toString(evvmID),
            "makeOrder",
            string.concat(  // ← Construye el mensaje
                Strings.toString(_nonce),
                ",",
                AdvancedStrings.addressToString(_tokenA),
                ",",
                AdvancedStrings.addressToString(_tokenB),
                ",",
                Strings.toString(_amountA),
                ",",
                Strings.toString(_amountB)
            ),
            signature,
            signer
        );
}
```

### 🔗 Cadena de Llamadas ERC-191

#### Nivel 1: Uso en P2PSwap
`Testnet-Contracts/src/contracts/p2pSwap/P2PSwap.sol`

```solidity
// Líneas 268-280: Verificación en makeOrder()
if (
    !SignatureUtils.verifyMessageSignedForMakeOrder(  // ← Llamada al wrapper
        Evvm(evvmAddress).getEvvmID(),
        user,
        metadata.nonce,
        metadata.tokenA,
        metadata.tokenB,
        metadata.amountA,
        metadata.amountB,
        signature
    )
) {
    revert("Invalid signature");
}
```

#### Nivel 2: Wrapper SignatureUtils
`Testnet-Contracts/src/contracts/p2pSwap/lib/SignatureUtils.sol`

```solidity
// Línea 28: Llamada a SignatureRecover
return SignatureRecover.signatureVerification(
    Strings.toString(evvmID),
    "makeOrder",
    string.concat(...),  // ← Construye el mensaje
    signature,
    signer
);
```

#### Nivel 3: Librería SignatureRecover - IMPLEMENTACIÓN ERC-191
`Testnet-Contracts/src/library/SignatureRecover.sol`

```solidity
// Líneas 59-71: Función de verificación
function signatureVerification(
    string memory evvmID,
    string memory functionName,
    string memory inputs,
    bytes memory signature,
    address expectedSigner
) internal pure returns (bool) {
    return
        recoverSigner(
            string.concat(evvmID, ",", functionName, ",", inputs),  // ← Mensaje final
            signature
        ) == expectedSigner;
}

// Líneas 89-102: AQUÍ ESTÁ EL FORMATO ERC-191 COMPLETO
function recoverSigner(
    string memory message,
    bytes memory signature
) internal pure returns (address) {
    bytes32 messageHash = keccak256(
        abi.encodePacked(
            "\x19Ethereum Signed Message:\n",  // ← Prefijo ERC-191 (0x19)
            Strings.toString(bytes(message).length),  // ← Longitud del mensaje
            message  // ← Mensaje original
        )
    );
    (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature);
    return ecrecover(messageHash, v, r, s);  // ← Recupera la dirección
}

// Líneas 123-139: Validación de la firma
function splitSignature(
    bytes memory signature
) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
    require(signature.length == 65, "Invalid signature length");  // ← 65 bytes

    assembly {
        r := mload(add(signature, 32))  // ← Primeros 32 bytes
        s := mload(add(signature, 64))  // ← Siguientes 32 bytes
        v := byte(0, mload(add(signature, 96)))  // ← Último byte
    }

    // Ensure signature is valid
    if (v < 27) {
        v += 27;
    }
    require(v == 27 || v == 28, "Invalid signature value");  // ← v debe ser 27 o 28
}
```

### 📊 Resumen Visual del Flujo

```
P2PSwap.makeOrder()
    │ línea 268-280
    ↓
SignatureUtils.verifyMessageSignedForMakeOrder()
    │ línea 28 → SignatureRecover.signatureVerification()
    ↓
SignatureRecover.signatureVerification()
    │ línea 67 → recoverSigner(mensaje, firma)
    ↓
SignatureRecover.recoverSigner()
    │ líneas 93-98: keccak256(
    │   "\x19Ethereum Signed Message:\n" +  ← ERC-191
    │   longitud +
    │   mensaje
    │ )
    │ línea 101: ecrecover(hash, v, r, s)
    ↓
✅ Dirección recuperada = expectedSigner
```

### 🎯 Formato ERC-191 Exacto

El formato implementado en las **líneas 93-99** de `SignatureRecover.sol`:

```
keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)
```

**Componentes:**
- `\x19` = Prefijo ERC-191 (byte 0x19)
- `"Ethereum Signed Message:\n"` = String literal
- `len(message)` = Longitud del mensaje como string (ej: "42")
- `message` = Mensaje original (ej: "1,makeOrder,100,0x123...,0x456...,1000,2000")

Este es el estándar usado por **MetaMask**, **ethers.js** (`signMessage`), y **web3.js** (`personal_sign`).

---

## 🔄 Flujo Completo de Transferencia

### Arquitectura de 3 Capas

```
┌─────────────────────────────────────────────────────┐
│  Capa 1: USUARIO (Off-chain)                       │
│  - Firma mensaje con MetaMask (ERC-191)            │
│  - Mensaje: "evvmID,amount,nonce,..."              │
└─────────────────┬───────────────────────────────────┘
                  │ userSignature (65 bytes)
                  ▼
┌─────────────────────────────────────────────────────┐
│  Capa 2: BALANCER (Intermediario)                  │
│  - SimplifiedEVVMBalancer.sol                       │
│  - Recibe firma, NO la verifica                     │
│  - Pasa firma a EVVM                                │
└─────────────────┬───────────────────────────────────┘
                  │ userSignature (65 bytes)
                  ▼
┌─────────────────────────────────────────────────────┐
│  Capa 3: EVVM (Verificador)                        │
│  - EVVM.pay() recibe la firma                       │
│  - SignatureRecover verifica ERC-191                │
│  - Si válida → transfiere tokens                    │
│  - Si inválida → revierte transacción               │
└─────────────────────────────────────────────────────┘
```

---

## 💻 Código del Balancer - Análisis Línea por Línea

### Archivo: `SimplifiedEVVMBalancer.sol`

**Ubicación**: `cross-chain-balancer/src/SimplifiedEVVMBalancer.sol`

### Función: `directTransferAtoB()`

```solidity
// Líneas 89-127
function directTransferAtoB(
    address user,               // Usuario que hace la transferencia
    uint256 amount,             // Cantidad a transferir
    uint256 priorityFee,        // Fee de prioridad (opcional)
    uint256 nonce,              // Nonce del usuario en EVVM-A
    bytes calldata userSignature  // ← FIRMA ERC-191 DEL USUARIO (65 bytes)
) external {
    // Validaciones básicas
    require(!paused, "Contract paused");
    require(amount > 0, "Amount must be > 0");
    require(nonce == noncesA[user], "Invalid nonce for A");

    // Calcular fees
    uint256 protocolFeeAmount = (amount * protocolFee) / 10000;
    uint256 userReceives = amount - protocolFeeAmount;

    // ═══════════════════════════════════════════════════════
    // AQUÍ ES DONDE SE USA LA FIRMA ERC-191
    // ═══════════════════════════════════════════════════════

    // Paso 1: Tomar tokens del usuario en EVVM-A
    IEvvm(evvmA_Address).pay(
        user,                      // from: el usuario
        address(this),             // to_address: el contrato balancer
        "",                        // to_identity: vacío
        principalTokenA,           // token: MATE token en EVVM-A
        amount,                    // amount: cantidad total
        priorityFee,               // priorityFee: fee opcional
        nonce,                     // nonce: para prevenir replay
        true,                      // priorityFlag: transacción prioritaria
        address(0),                // executor: cualquiera puede ejecutar
        userSignature              // ← FIRMA ERC-191 SE PASA AL EVVM
    );

    // Si llegamos aquí, la firma fue válida (EVVM no revirtió)

    // Paso 2: Dar tokens al usuario en EVVM-B
    IEvvm(evvmB_Address).caPay(user, principalTokenB, userReceives);

    // Paso 3: Incrementar nonce
    noncesA[user]++;

    emit DirectTransfer(user, amount, "A->B", protocolFeeAmount, msg.sender);
}
```

### ⚠️ Punto Clave

**El balancer NO hace esto:**
```solidity
// ❌ ESTO NO EXISTE EN EL BALANCER
SignatureRecover.verifySignature(user, signature); // NO LO HACE
```

**El balancer SÍ hace esto:**
```solidity
// ✅ ESTO ES LO QUE HACE
IEvvm(evvmA_Address).pay(..., userSignature); // PASA LA FIRMA AL EVVM
```

---

## 🔍 ¿Qué Pasa Dentro de EVVM.pay()?

Cuando el balancer llama a `IEvvm(evvmA_Address).pay(...)`:

### Dentro del Contrato EVVM

```solidity
// Pseudocódigo del contrato EVVM (no el balancer)
function pay(
    address from,
    address to_address,
    string memory to_identity,
    address token,
    uint256 amount,
    uint256 priorityFee,
    uint256 nonce,
    bool priorityFlag,
    address executor,
    bytes memory signature  // ← Firma recibida del balancer
) external {
    // EVVM construye el mensaje que debió ser firmado
    string memory expectedMessage = string.concat(
        Strings.toString(evvmID),
        ",",
        "pay",
        ",",
        AdvancedStrings.addressToString(to_address),
        ",",
        AdvancedStrings.addressToString(token),
        ",",
        Strings.toString(amount),
        ",",
        Strings.toString(priorityFee),
        ",",
        Strings.toString(nonce),
        ",",
        priorityFlag ? "true" : "false",
        ",",
        AdvancedStrings.addressToString(executor)
    );

    // EVVM verifica la firma con ERC-191
    bool isValid = SignatureRecover.signatureVerification(
        expectedMessage,
        signature,
        from  // expectedSigner
    );

    // Si la firma es inválida, revierte TODO (incluyendo el balancer)
    require(isValid, "Invalid signature");

    // Si es válida, continúa con la transferencia
    balances[from][token] -= amount;
    balances[to_address][token] += amount;
}
```

---

## 📊 Comparación: Verificación Directa vs Indirecta

### Contratos con Verificación DIRECTA (ej: P2PSwap)

```solidity
contract P2PSwap {
    function makeOrder(..., bytes memory signature) external {
        // ✅ VERIFICA DIRECTAMENTE
        if (!SignatureUtils.verifyMessageSignedForMakeOrder(
            evvmID,
            user,
            nonce,
            tokenA,
            tokenB,
            amountA,
            amountB,
            signature
        )) {
            revert("Invalid signature");
        }

        // Continúa con la lógica...
    }
}
```

### Balancer con Verificación INDIRECTA

```solidity
contract SimplifiedEVVMBalancer {
    function directTransferAtoB(..., bytes calldata userSignature) external {
        // ❌ NO VERIFICA DIRECTAMENTE

        // ✅ DELEGA LA VERIFICACIÓN AL EVVM
        IEvvm(evvmA_Address).pay(
            user,
            address(this),
            "",
            principalTokenA,
            amount,
            priorityFee,
            nonce,
            true,
            address(0),
            userSignature  // ← EVVM la verificará
        );

        // Si llegamos aquí, EVVM ya verificó la firma
    }
}
```

---

## 🔐 ¿Qué Firma el Usuario?

### Frontend: Construcción del Mensaje

```javascript
// 1. Usuario quiere transferir 100 MATE de EVVM-A a EVVM-B

const evvmA_contract = new ethers.Contract(evvmA_Address, abi, signer);

// 2. Obtener nonce actual del usuario
const nonce = await balancer.noncesA(userAddress);

// 3. Construir el mensaje que EVVM-A espera
// Formato: "evvmID,pay,to_address,token,amount,priorityFee,nonce,priorityFlag,executor"

const evvmID = await evvmA_contract.getEvvmID();
const mensaje = [
    evvmID.toString(),
    "pay",
    balancerAddress,  // to_address
    principalTokenA,   // token
    amount.toString(),
    priorityFee.toString(),
    nonce.toString(),
    "true",  // priorityFlag
    ethers.ZeroAddress  // executor (cualquiera)
].join(",");

console.log("Mensaje a firmar:", mensaje);
// Ejemplo: "1,pay,0x20492001407c5C2a64D9Aa1c5bA00A2825B75044,0x0000000000000000000000000000000000000001,100000000000000000000,0,0,true,0x0000000000000000000000000000000000000000"

// 4. Firmar con MetaMask (aplica ERC-191 automáticamente)
const firma = await signer.signMessage(mensaje);

console.log("Firma:", firma);
// 0x1234...abcd (130 caracteres hex = 65 bytes)

// 5. Llamar al balancer con la firma
await balancer.directTransferAtoB(
    userAddress,
    amount,
    priorityFee,
    nonce,
    firma  // ← Esta firma será verificada por EVVM-A
);
```

### ¿Qué hace MetaMask al firmar?

```javascript
// Internamente, MetaMask hace esto:
const mensajeOriginal = "1,pay,0x20492...,0x000...001,100,0,0,true,0x000...000";

const mensajeERC191 =
    "\x19Ethereum Signed Message:\n" +
    mensajeOriginal.length.toString() +
    mensajeOriginal;

const hash = keccak256(mensajeERC191);
const firma = sign(hash, privateKey);
// firma = r (32 bytes) + s (32 bytes) + v (1 byte) = 65 bytes total
```

---

## ⚡ Flujo Completo: Usuario → Balancer → EVVM

### Secuencia Detallada

```
┌──────────────────────────────────────────────────────────────────┐
│ 1. FRONTEND: Usuario firma mensaje                              │
│    - Mensaje: "1,pay,0x204...,0x000...001,100,0,0,true,0x000"   │
│    - MetaMask aplica ERC-191                                     │
│    - Resultado: firma de 65 bytes (0x1234...abcd)               │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 2. FRONTEND: Llama al balancer                                   │
│    balancer.directTransferAtoB(user, 100, 0, 0, firma)          │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 3. BALANCER: Recibe la firma                                     │
│    function directTransferAtoB(..., bytes calldata userSignature)│
│    - NO verifica la firma                                        │
│    - Pasa la firma al EVVM                                       │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 4. BALANCER → EVVM-A: Llama pay()                                │
│    IEvvm(evvmA_Address).pay(                                     │
│        user,                                                      │
│        address(this),  // balancer                               │
│        "",                                                        │
│        principalTokenA,                                          │
│        100,                                                       │
│        0,                                                         │
│        0,                                                         │
│        true,                                                      │
│        address(0),                                               │
│        userSignature  ← AQUÍ PASA LA FIRMA                       │
│    );                                                             │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 5. EVVM-A: Verifica la firma                                     │
│    - Reconstruye el mensaje esperado:                            │
│      "1,pay,0x204...,0x000...001,100,0,0,true,0x000"            │
│    - Aplica ERC-191:                                             │
│      keccak256("\x19Ethereum Signed Message:\n" + len + msg)    │
│    - Recupera firmante:                                          │
│      address recoveredSigner = ecrecover(hash, v, r, s)          │
│    - Compara:                                                    │
│      require(recoveredSigner == user, "Invalid signature")       │
└──────────────────┬───────────────────────────────────────────────┘
                   │
         ┌─────────┴──────────┐
         ▼                    ▼
    ✅ VÁLIDA            ❌ INVÁLIDA
         │                    │
         │                    └─> revert("Invalid signature")
         │                         └─> TODO se revierte (balancer también)
         │
         ▼
┌──────────────────────────────────────────────────────────────────┐
│ 6. EVVM-A: Transfiere tokens                                     │
│    balances[user][MATE] -= 100                                   │
│    balances[balancer][MATE] += 100                               │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 7. BALANCER: Continúa ejecución                                  │
│    - Calcula fees: protocolFee = 0.5 MATE                        │
│    - Usuario recibirá: 99.5 MATE en EVVM-B                       │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 8. BALANCER → EVVM-B: Da tokens al usuario                       │
│    IEvvm(evvmB_Address).caPay(user, principalTokenB, 99.5)      │
│    - NO requiere firma (caPay es función de servicio)            │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 9. EVVM-B: Acredita tokens                                       │
│    balances[user][MATE] += 99.5                                  │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│ 10. BALANCER: Finaliza                                           │
│     noncesA[user]++;  // Incrementa nonce                        │
│     emit DirectTransfer(user, 100, "A->B", 0.5, executor);       │
│     ✅ TRANSFERENCIA COMPLETADA                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🛡️ Seguridad: ¿Por Qué Este Diseño?

### Ventajas de Delegar la Verificación

1. **Separación de Responsabilidades**
   - ✅ Balancer: lógica de transferencias cross-chain
   - ✅ EVVM: autenticación y control de acceso

2. **Reutilización de Código**
   - ✅ EVVM ya tiene toda la lógica de verificación
   - ✅ No duplicar código = menos bugs

3. **Consistencia**
   - ✅ Todas las operaciones EVVM usan el mismo sistema
   - ✅ Mismas reglas de nonces y firmas

4. **Actualizaciones Centralizadas**
   - ✅ Si se mejora SignatureRecover, todos se benefician
   - ✅ No hay que actualizar múltiples contratos

### ¿Qué Pasa si la Firma es Inválida?

```solidity
// Dentro de EVVM.pay()
require(isValidSignature, "Invalid signature");
// ↓
// REVIERTE toda la transacción
// ↓
// El balancer NUNCA llega a las líneas siguientes
// ↓
// Usuario NO pierde tokens
// ↓
// Transacción falla de forma segura
```

---

## 📝 Resumen de Responsabilidades

| Componente | Responsabilidad | Verifica Firma |
|------------|----------------|----------------|
| **Usuario/Frontend** | Genera firma ERC-191 | ❌ No (firma) |
| **SimplifiedEVVMBalancer** | Orquesta transferencias cross-chain | ❌ No (delega) |
| **EVVM-A** | Verifica firma y transfiere tokens | ✅ Sí (SignatureRecover) |
| **EVVM-B** | Acredita tokens al usuario | ❌ No (caPay es interno) |
| **SignatureRecover** | Implementa verificación ERC-191 | ✅ Sí (core) |

---

## 🎯 Conclusión

### El Balancer y ERC-191

```
┌─────────────────────────────────────────────────────┐
│  El balancer NO verifica firmas ERC-191             │
│                                                      │
│  ✅ Recibe firmas del usuario                       │
│  ✅ Pasa firmas a los contratos EVVM                │
│  ✅ Confía en que EVVM verificará correctamente     │
│  ✅ Si EVVM revierte, el balancer también           │
│                                                      │
│  Arquitectura: INTERMEDIARIO, no VERIFICADOR        │
└─────────────────────────────────────────────────────┘
```

### Patrón de Diseño

Este es un patrón común en Solidity:

```
Contrato de Alto Nivel (Balancer)
        ↓
    Delega a
        ↓
Contrato Base (EVVM)
        ↓
    Usa
        ↓
Librería Reutilizable (SignatureRecover)
```

**Beneficios**:
- 🎯 Código modular y reutilizable
- 🔒 Seguridad centralizada
- 🚀 Fácil de mantener y actualizar
- ✅ Menos duplicación de código

---

**Archivo**: `BALANCER_ERC191_SIGNATURES.md`
**Versión**: 1.0
**Fecha**: 2025-01-19
