import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L569
  hashGenesisBlock:
    '0x0000f8186df4648c46f445a25decd423fa6b62ed220849093f73f6f364116894',
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L564
  port: 15556,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparamsbase.cpp
  portRpc: 44445,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L560
  protocol: {
    magic: 0x3224f207,
  },
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L588
  seedsDns: ['testseed.nav.community', 'testseed.navcoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L604C13
      private: 0x4088da4e,
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L603
      public: 0x40882be1,
    },
    bip44: 1,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L602C10
    private: 0xef,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L594
    public: 0x6f,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L600C30
    scripthash: 0xc4,
  },
};
