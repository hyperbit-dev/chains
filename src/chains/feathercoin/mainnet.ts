import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
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
