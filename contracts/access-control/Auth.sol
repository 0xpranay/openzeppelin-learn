// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Auth
{
    address private _admin;

    constructor(address deployer)
    {
        _admin = deployer;
    }
    function changeAdmin(address newAdmin) external {
        require(msg.sender == _admin, "Only admin can call");
        _admin = newAdmin;
    }
    function isAdministrator(address user) external view returns (bool)
    {
        return user == _admin;
    }
}