// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;
import "hardhat/console.sol";
contract Transactions{
    uint256 public transactionCount;
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct[] public transactions;
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCount = transactionCount + 1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
    function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
    }
    function getTransactionsCount() public view returns (uint256){
        return transactionCount;
    }
}