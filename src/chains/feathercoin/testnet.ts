import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
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
