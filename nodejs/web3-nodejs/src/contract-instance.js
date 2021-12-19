const Web3EthContract = require('web3-eth-contract');
const ContractABI = require('./ContractABI.json');

const { INFURA_WSS_ENDPOINT } = process.env;

Web3EthContract.setProvider(INFURA_WSS_ENDPOINT);

//https://goerli.etherscan.io/address/0xa05F7df24D81438CB2306A07d1204967b48f20d2
const CONTRACT_ADDRESS = "0xa05F7df24D81438CB2306A07d1204967b48f20d2";

const contractInstance = new Web3EthContract(
    ContractABI,
    CONTRACT_ADDRESS
);

contractInstance.events.Transfer().on('data', event => console.log("Transfer: ", event))
    .on('changed', changed => console.log("Changed: ", changed))
    .on('error', err => console.log('Error: ', err.message, err.stack))
    .on('connected', str => console.log("Connected: ", str))
