const BridgeEth = artifacts.require('./ethBridge.sol');

const privKey = 'priv key of sender';

module.exports = async done => {
  const nonce = 1; // Her yeni transferde 1'er 1'er artar..
  const accounts = await web3.eth.getAccounts();
  const bridgeEth = await BridgeEth.deployed();
  const amount = 1000;
  const message = web3.utils.soliditySha3(
    {t: 'address', v: accounts[0]},
    {t: 'address', v: accounts[0]},
    {t: 'uint256', v: amount},
    {t: 'uint256', v: nonce},
  ).toString('hex');

  
   const { signature } = web3.eth.accounts.sign(
    message, 
    privKey
  ); 
  await bridgeEth.burn(accounts[0], amount, nonce, signature);
  done();
}
