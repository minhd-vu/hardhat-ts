//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract FundMe {
    mapping(address => uint256) public s_amountsFunded;
    address[] public s_funders;
    address public s_owner;

    constructor() {
        s_owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }

    function fund() public payable {
        s_amountsFunded[msg.sender] += msg.value;
        s_funders.push(msg.sender);
    }

    function withdraw() public payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function getFunders() public view returns (address[] memory) {
        return s_funders;
    }
}
