// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Lottery {
    address public owner;
    address payable[] public players;
    address public winner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    //Enter lottery function
    function enter() public payable {
        require(msg.value == 0.1 ether);
        players.push(payable(msg.sender));
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    //Get a random number
    function getRandomNumber() public view returns (uint8) {
        return
            uint8(
                uint256(
                    keccak256(
                        abi.encodePacked(
                            block.timestamp,
                            block.difficulty,
                            players
                        )
                    )
                ) % 251
            );
    }

    //Picking winnner using random number
    function pickWinner() public onlyOwner {
        uint256 index = getRandomNumber() % players.length;

        //transfer reward to the winner
        players[index].transfer(address(this).balance);
        winner = players[index];

        //reset the state of the contract
        players = new address payable[](0);
    }
}