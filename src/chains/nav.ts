/* source: https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Navcoin',
  unit: 'NAV',
  decimalPlaces: 1e8,
  // https://github.com/navcoin/navcoin/blob/master/src/util/message.cpp#L25
  messagePrefix: 'Navcoin Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L294
  hashGenesisBlock:
    '0x00006a4e3e18c71c6d48ad6c261e2254fa764cf29607a4357c99b712dfbb8e6a',
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L286C3
  port: 44440,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 44444,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L281
  protocol: {
    magic: 0x80503420,
  },
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L309
  seedsDns: ['seed.nav.community', 'seed2.nav.community'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L307C50
      private: 0x0488ade4,
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L306C19
      public: 0x0488b21e,
    },
    // https://github.com/michaelmcshinsky/slips/blob/master/slip-0044.md
    bip44: 130,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L305C26
    private: 0x96,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L297C4-L297C4
    public: 0x35,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L303C42
    scripthash: 0x55,
  },
};

const test: TestNetwork = {
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

export const nav = {
  main,
  test,
};
