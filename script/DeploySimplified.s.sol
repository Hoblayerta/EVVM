// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/SimplifiedEVVMBalancer.sol";

contract DeploySimplified is Script {

    // EVVM addresses on Ethereum Sepolia (Deployed)
    address constant EVVM_A = 0xcdFde01B0A41914B076D8aF8f50c4eCbe8E3E639; // Deployed EVVM-A
    address constant EVVM_B = 0x4B2CB8a51C8522f18234Aa7b441725106248B432; // Deployed EVVM-B

    // Principal tokens (MATE token in both EVVMs)
    address constant PRINCIPAL_TOKEN_A = 0x0000000000000000000000000000000000000001;
    address constant PRINCIPAL_TOKEN_B = 0x0000000000000000000000000000000000000001;

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        // Deploy SimplifiedEVVMBalancer
        SimplifiedEVVMBalancer balancer = new SimplifiedEVVMBalancer(
            EVVM_A,
            EVVM_B,
            PRINCIPAL_TOKEN_A,
            PRINCIPAL_TOKEN_B
        );

        vm.stopBroadcast();

        // Log deployment info
        console.log("=== SimplifiedEVVMBalancer Deployed ===");
        console.log("Contract Address:", address(balancer));
        console.log("EVVM-A Address:", EVVM_A);
        console.log("EVVM-B Address:", EVVM_B);
        console.log("Principal Token A:", PRINCIPAL_TOKEN_A);
        console.log("Principal Token B:", PRINCIPAL_TOKEN_B);

        // Verify deployment
        console.log("=== Verification ===");
        console.log("Admin:", balancer.admin());
        console.log("Protocol Fee:", balancer.protocolFee());
        console.log("Paused:", balancer.paused());
    }
}