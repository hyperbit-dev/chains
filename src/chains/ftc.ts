// source: https://github.com/FeatherCoin/Feathercoin

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Feathercoin',
  unit: 'FTC',
  decimalPlaces: 1e8,
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/util/validation.cpp#L20
  messagePrefix: 'Feathercoin Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L113
  hashGenesisBlock:
    '0x12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L99
  port: 9336,
  // https://github.com/FeatherCoin/Feathercoin/blob/f94c95a81204e7d7d0bda48a027cfa8f2fd9b02d/src/chainparamsbase.cpp#L39
  portRpc: 9337,
  protocol: {
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L88
    magic: 0x211a1541,
  },
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L121
  seedsDns: [
    'dnsseed.feathercoin.com',
    'dnsseed1.feathercoin.com',
    'dnsseed.alltheco.in',
    'dnsseed.bushstar.co.uk',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L130
      private: 0x0488daee,
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L129
      public: 0x0488bc26,
    },
    bip44: 8,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L128
    private: 0x8e,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L126
    public: 0xe0,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L127
    scripthash: 0x50,
  },
};

const test: TestNetwork = {
  ...common,
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L221
  hashGenesisBlock:
    '0x79e4683a94fb0374ac9d52638b594dcf0318975acb8b275e280f93c082c0964c',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L208
  port: 19336,
  // https://github.com/FeatherCoin/Feathercoin/blob/f94c95a81204e7d7d0bda48a027cfa8f2fd9b02d/src/chainparamsbase.cpp#L41
  portRpc: 19337,
  protocol: {
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L198
    magic: 0x716a6591,
  },
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L227
  seedsDns: [
    'testnet-explorer2.feathercoin.com',
    'testnet-dnsseed.feathercoin.com',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L234
      private: 0x04358394,
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L233
      public: 0x043587c,
    },
    bip44: 1,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L232
    private: 0xef,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L230
    public: 0x6f,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L231
    scripthash: 0xc4,
  },
};

export const ftc = {
  main,
  test,
};
