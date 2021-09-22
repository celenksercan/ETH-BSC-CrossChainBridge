const tokenEth = artifacts.require('tokenEth.sol');
const tokenBsc = artifacts.require('tokenBsc.sol');
const ethBridge = artifacts.require('ethBridge.sol');
const bscBridge = artifacts.require('bscBridge.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'ethTestnet') {
    await deployer.deploy(tokenEth);
    const tokenEth = await tokenEth.deployed();
    await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(ethBridge, tokenEth.address);
    const ethBridge = await ethBridge.deployed();
    await tokenEth.updateAdmin(ethBridge.address);
  }
