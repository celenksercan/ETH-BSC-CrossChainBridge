pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Itoken.sol';

contract BridgeBase {
  address public admin;
  IToken public token;
  mapping(address => mapping(uint => bool)) public processedNonces;

enum Step { Burn, Mint }
  event Transfer(
    address from,
    address to,
    uint amount,
    uint date,
    uint nonce,
    bytes signature,
    Step indexed step
  );
