const Web3 = require('web3');
const BridgeEth = require('../build/contracts/ethBridge.json');
const BridgeBsc = require('../build/contracts/bscBridge.json');

const web3Eth = new Web3('url to eth node (websocket)');
const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const adminPrivKey = '';
const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  BridgeEth.networks['4'].address
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  BridgeBsc.networks['97'].address
);

