const Web3 = require('web3');
const BridgeEth = require('../build/contracts/ethBridge.json');
const BridgeBsc = require('../build/contracts/bscBridge.json');

const web3Eth = new Web3('url to eth node (websocket)');
const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const adminPrivKey = '';
const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);
