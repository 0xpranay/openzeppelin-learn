// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable
{
    uint private value;
    event ValueChanged(address indexed changer, uint newValue);
    function store(uint newValue) public onlyOwner{
        value = newValue;
        emit ValueChanged(msg.sender, value);
    }

    function retrieve() external view returns (uint){
        return value;
    }
}