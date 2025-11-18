// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import "../contracts/EVVMLocalBalancer.sol";

/**
 * @title Deploy Script para EVVM Cross-Chain Balancer
 * @notice Deploy usando Foundry
 *
 * Uso:
 * forge script script/Deploy.s.sol:DeployBalancer --rpc-url sepolia --broadcast --verify -vvvv
 */
contract DeployBalancer is Script {

    // ============================================
    // CONFIGURACIÓN - ACTUALIZAR ANTES DE DEPLOY
    // ============================================

    address constant EVVM_A = 0x09F862AD8D76054083bDa05BE32e6b305782cD19; // EVVM-A en Arbitrum Sepolia
    address constant EVVM_B = 0xA1559Cf40E3f3d8364Aa21c6A2C8014e1e1c3f53; // EVVM-B en Arbitrum Sepolia
    address constant PRINCIPAL_TOKEN_A = 0x0000000000000000000000000000000000000001; // MATE (EVVM internal)
    address constant PRINCIPAL_TOKEN_B = 0x0000000000000000000000000000000000000001; // MATE (EVVM internal)

    function run() external {
        // Verificar configuración
        require(EVVM_A != address(0), "Configure EVVM_A address");
        require(EVVM_B != address(0), "Configure EVVM_B address");
        require(PRINCIPAL_TOKEN_A != address(0), "Configure PRINCIPAL_TOKEN_A");
        require(PRINCIPAL_TOKEN_B != address(0), "Configure PRINCIPAL_TOKEN_B");

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        console.log("===========================================");
        console.log("EVVM Cross-Chain Balancer Deployment");
        console.log("===========================================");
        console.log("");
        console.log("Deployer:", deployer);
        console.log("Balance:", deployer.balance);
        console.log("");
        console.log("Configuration:");
        console.log("  EVVM-A:", EVVM_A);
        console.log("  EVVM-B:", EVVM_B);
        console.log("  Token A:", PRINCIPAL_TOKEN_A);
        console.log("  Token B:", PRINCIPAL_TOKEN_B);
        console.log("");

        vm.startBroadcast(deployerPrivateKey);

        // Deploy Balancer
        EVVMLocalBalancer balancer = new EVVMLocalBalancer(
            EVVM_A,
            EVVM_B,
            PRINCIPAL_TOKEN_A,
            PRINCIPAL_TOKEN_B
        );

        vm.stopBroadcast();

        console.log("===========================================");
        console.log("Deployment Successful!");
        console.log("===========================================");
        console.log("");
        console.log("EVVMLocalBalancer:", address(balancer));
        console.log("");
        console.log("Verification:");
        console.log("  EVVM-A connected:", balancer.evvmA_Address() == EVVM_A);
        console.log("  EVVM-B connected:", balancer.evvmB_Address() == EVVM_B);
        console.log("  Admin:", balancer.admin());
        console.log("");
        console.log("Next Steps:");
        console.log("");
        console.log("1. Update frontend/config.js:");
        console.log("   BALANCER.address = '%s'", address(balancer));
        console.log("");
        console.log("2. Verify on Etherscan:");
        console.log("   forge verify-contract <ADDRESS>");
        console.log("");
        console.log("3. Test transfer:");
        console.log("   Open frontend/index.html");
        console.log("");
        console.log("4. Setup fisher:");
        console.log("   Open frontend/fisher-dashboard.html");
        console.log("");
        console.log("===========================================");
    }
}
