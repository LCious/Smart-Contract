let account;
const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        document.getElementById("smth").innerHTML = account;
    }
}

const connectContract = async () => {
    const ABI = [
        {
            "inputs": [],
            "name": "enter",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pickWinner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPlayers",
            "outputs": [
                {
                    "internalType": "address payable[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRandomNumber",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "players",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "winner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const Address = "0x802f2B8f02748a78147C750754bC20b5bA6F9aA5";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( ABI, Address); 
    document.getElementById("connect-contract").innerHTML = "connected to smart contract";
}

const enter = async () => {
    try {
        await window.contract.methods.enter().send({
            from: account,
            value: '100000000000000000',
            gas: 3000000,
            });
        const response = await window.contract.methods.getBalance().call();
        document.getElementById("entered-count").innerHTML = response/1000000000000000000;
    }
    catch (error) {
        console.log("ERROR ENTERING", error);
    }
    }

const pickWinner = async () => {
    try {
        await window.contract.methods.pickWinner().send()({
            from: account,
        });
        const win = await window.contract.methods.winner().call();
        document.getElementById("winner").innerHTML = win;
    }catch (error) {
        console.log("ERROR GETTING PLAYER COUNT")
      }
}
