const Web3 = require('web3');

const { INFURA_WSS_ENDPOINT } = process.env;

const web3Instance = new Web3(INFURA_WSS_ENDPOINT);

web3Instance.eth.getBlockNumber()
    .then((blockNumber) => console.log("Current block number: ", blockNumber));
