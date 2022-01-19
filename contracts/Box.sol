// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Box
{
    uint private value;
    event ValueChanged(address indexed changer, uint newValue);
    function setValue(uint newValue) external {
        value = newValue;
        emit ValueChanged(msg.sender, value);
    }

    function getValue() external view returns (uint){
        return value;
    }
}