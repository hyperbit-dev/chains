// https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Dogecoin',
  unit: 'DOGE',
  decimalPlaces: 1e8,
  messagePrefix: 'Dogecoin Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691',
  port: 22556,
  portRpc: 22555,
  protocol: {
    magic: 0xc0c0c0c0,
  },
  seedsDns: ['seed.multidoge.org', 'seed2.multidoge.org'],
  versions: {
    bip32: {
      private: 0x02fac398,
      public: 0x02facafd,
    },
    bip44: 3,
    private: 0x9e,
    public: 0x1e,
    scripthash: 0x16,
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    'bb0a78264637406b6360aad926284d544d7049f45189db5664f3c4d07350559e',
  port: 44556,
  portRpc: 44555,
  protocol: {
    magic: 0xfcc1b7dc,
  },
  seedsDns: ['testseed.jrn.me.uk'],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xf1,
    public: 0x71,
    scripthash: 0xc4,
  },
};

export const doge = {
  main,
  test,
};
