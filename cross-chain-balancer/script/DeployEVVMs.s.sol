// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";

// Mock EVVM contract for testing purposes
contract MockEVVM {
    mapping(address => mapping(address => uint256)) private balances;
    mapping(address => uint256) private nonces;
    address public admin;
    string public name;

    constructor(string memory _name) {
        admin = msg.sender;
        name = _name;
    }

    function getBalance(address user, address token) external view returns (uint256) {
        return balances[user][token];
    }

    function addBalance(address user, address token, uint256 amount) external {
        balances[user][token] += amount;
    }

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
        bytes memory signature
    ) external {
        require(balances[from][token] >= amount, "Insufficient balance");
        require(nonce == nonces[from], "Invalid nonce");

        balances[from][token] -= amount;
        balances[to_address][token] += amount;
        nonces[from]++;
    }

    function caPay(address to, address token, uint256 amount) external {
        balances[to][token] += amount;
    }

    function isAddressStaker(address user) external view returns (bool) {
        return balances[user][address(0x1)] > 0;
    }

    function getRewardAmount() external view returns (uint256) {
        return 1000000000000000000; // 1 ETH
    }
}

contract DeployEVVMs is Script {

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        // Deploy EVVM-A
        MockEVVM evvmA = new MockEVVM("EVVM-A");

        // Deploy EVVM-B
        MockEVVM evvmB = new MockEVVM("EVVM-B");

        // Give deployer some MATE tokens for testing
        address deployer = vm.addr(deployerPrivateKey);
        address principalToken = 0x0000000000000000000000000000000000000001;

        evvmA.addBalance(deployer, principalToken, 1000 * 1e18); // 1000 MATE
        evvmB.addBalance(deployer, principalToken, 1000 * 1e18); // 1000 MATE

        vm.stopBroadcast();

        // Log deployment info
        console.log("=== EVVM Deployment on Ethereum Sepolia ===");
        console.log("EVVM-A Address:", address(evvmA));
        console.log("EVVM-B Address:", address(evvmB));
        console.log("Principal Token:", principalToken);
        console.log("Deployer:", deployer);

        // Verify deployment
        console.log("=== Verification ===");
        console.log("EVVM-A Name:", evvmA.name());
        console.log("EVVM-B Name:", evvmB.name());
        console.log("Deployer MATE balance in A:", evvmA.getBalance(deployer, principalToken));
        console.log("Deployer MATE balance in B:", evvmB.getBalance(deployer, principalToken));
    }
}