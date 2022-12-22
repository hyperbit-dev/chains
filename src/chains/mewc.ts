/* source: https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Meowcoin',
  unit: 'MEWC',
  decimalPlaces: 1e8,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/validation.cpp
  messagePrefix: 'Meowcoin Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L178
  hashGenesisBlock:
    '0x000000edd819220359469c54f2614b5602ebc775ea67a64602f354bdaa320f70',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L172
  port: 8788,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 9766,
  protocol: {
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L168
    magic: 0x4357454d,
  },
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L183
  seedsDns: ['66.42.117.31', '167.179.94.220'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L194
    bip44: 1669,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L189
    private: 0x70,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L187
    public: 0x32,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L188
    scripthash: 0x7a,
  },
};

const test: TestNetwork = {
  ...common,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L348
  hashGenesisBlock:
    '0x000000eaab417d6dfe9bd75119972e1d07ecfe8ff655bef7c2acb3d9a0eeed81',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L340
  port: 4568,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparamsbase.cpp#L49
  portRpc: 19766,
  protocol: {
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L336
    magic: 0x6377656d,
  },
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L353
  seedsDns: ['66.42.117.31', '167.179.94.220'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L358
    private: 0x72,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L356
    public: 0x6d,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L357
    scripthash: 0x7c,
  },
};

export const mewc = {
  main,
  test,
};
