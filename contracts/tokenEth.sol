pragma solidity ^0.8.0;

import './tokenBase.sol';

contract TokenEth is TokenBase {
  constructor() TokenBase('ETH Token', 'ETK') {}
}
