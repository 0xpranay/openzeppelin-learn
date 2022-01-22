// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV2{
    uint private value;
    mapping(address => uint256) public balances;
    event ValueChanged(address indexed changer, uint newValue);
    function _initialiser(uint newValue) external{
        value = newValue;
    }
    function store(uint newValue) public{
        value = newValue;
        emit ValueChanged(msg.sender, value);
    }

    function retrieve() external view returns (uint){
        return value;
    }

    function willRevert() external pure {
        revert("Reverted");
    }

    function transfer(address recipient, uint256 amount) external 
    {
        require(balances[msg.sender] >= amount, "Balance not enough");
        balances[recipient] += amount;
    }

    function upgradeRetrieve() external view returns (uint){
        return value;
    }
}