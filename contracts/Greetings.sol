// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Greetings {
    string public name;
    string public greetingPrefix = "Hello ";

    // set the initial value for name when contract is deployed
    constructor(string memory initialName) {
        name = initialName;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function getGreetings() public view returns (string memory) {
        return string(abi.encodePacked(greetingPrefix, name));
    }
}
