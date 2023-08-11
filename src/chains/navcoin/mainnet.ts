import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '9BBB6BBE-D8E4-4EB6-AA38-FBAAB65627BA',
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
