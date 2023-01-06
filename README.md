# Smart-Contract

This repository contains a lottery game implemented using a smart contract. The smart contract is written in Solidity, a contract-oriented, high-level language for implementing smart contracts.

## Features
- Players can enter the lottery by sending a transaction to the smart contract with a certain amount of funds.
- The contract maintains a list of all players who have entered the lottery.
- The owner can choose to randomly select a winner, who will receive all of the funds that have been entered into the lottery.

## Tools and Libraries
- Truffle is a popular development framework for Ethereum.
- Ganache is a local blockchain for testing and development.
- Remix IDE is a web-based Solidity compiler and IDE.
- Metamask is a browser extension for interacting with the Ethereum blockchain.

The page is built with HTML, CSS, and JavaScript. The JavaScript code uses the Web3.js library to interact with the Ethereum blockchain and the deployed smart contract.

## How it works

- Unlimited amount of users can participate in the lottery, however the minimum amount is 2.
- User can only enter lottery once every turn
- Every user has to connect their Metamask wallet to the lottery website.
- The price to enter the lottery is 1 Ether.
- The winner takes it all.
- User can see the amount of Ether currently in the prize pool.
- Only the owner can end the lottery and randomly pick a winner.

## Ganache local Ethereum net.

![Screenshot_70](https://user-images.githubusercontent.com/103113016/210905552-c3dfbaed-67f1-4422-acc4-1e9d4ff6648d.png)

## Ganache transaction logs.

![Screenshot_71](https://user-images.githubusercontent.com/103113016/210905553-839f05c6-e81e-48d9-84ed-17feb173b673.png)

## Minimalistic UI implementation.

![Screenshot_69](https://user-images.githubusercontent.com/103113016/210905551-864b9b83-67e0-4329-be6f-8ad0c58bd1c2.png)
