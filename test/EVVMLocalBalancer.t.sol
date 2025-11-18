// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/EVVMLocalBalancer.sol";

contract EVVMLocalBalancerTest is Test {
    EVVMLocalBalancer public balancer;

    address evvmA = address(0x1);
    address evvmB = address(0x2);
    address tokenA = address(0x3);
    address tokenB = address(0x4);

    address owner = address(this);
    address fisher = address(0x10);
    address user = address(0x20);

    function setUp() public {
        balancer = new EVVMLocalBalancer(
            evvmA,
            evvmB,
            tokenA,
            tokenB
        );
    }

    function testDeployment() public {
        assertEq(balancer.evvmA_Address(), evvmA);
        assertEq(balancer.evvmB_Address(), evvmB);
        assertEq(balancer.principalTokenA(), tokenA);
        assertEq(balancer.principalTokenB(), tokenB);
        assertEq(balancer.admin(), owner);
    }

    function testInitialLiquidity() public {
        (uint256 liquidityA, uint256 liquidityB) = balancer.getTotalLiquidity();
        assertEq(liquidityA, 0);
        assertEq(liquidityB, 0);
    }

    function testSetFisherFee() public {
        balancer.setFisherFee(20); // 0.2%
        assertEq(balancer.fisherFee(), 20);
    }

    function testSetFisherFeeOnlyAdmin() public {
        vm.prank(fisher);
        vm.expectRevert("Only admin");
        balancer.setFisherFee(20);
    }

    function testSetFisherFeeMaxLimit() public {
        vm.expectRevert("Max 1%");
        balancer.setFisherFee(101);
    }

    // TODO: Add setMinPriorityFee function to contract
    // function testSetMinPriorityFee() public {
    //     balancer.setMinPriorityFee(0.002 ether);
    //     assertEq(balancer.minPriorityFee(), 0.002 ether);
    // }

    function testGetNonces() public {
        assertEq(balancer.noncesA(user), 0);
        assertEq(balancer.noncesB(user), 0);
    }

    // TODO: Agregar tests de integración con mock EVVM
    // function testDepositToBalancerFromA() public {}
    // function testWithdrawToUserInB() public {}
    // function testProvideLiquidity() public {}
    // function testWithdrawLiquidity() public {}
    // function testClaimRewards() public {}
}
