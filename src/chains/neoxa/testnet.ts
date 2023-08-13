import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '5C68C23A-35C2-458B-94D0-28477FF808ED',
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L651C56-L651C120
  hashGenesisBlock:
    '000b93d1594035cc0ebe80bc5f69e3cebfbf80069480c8f64e7f974d1627d8a6',
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L641
  port: 4572,
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparamsbase.cpp#L49C20-L49C25
  portRpc: 15425,
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L637
  protocol: {
    magic: 0x65566360,
  },
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L588
  seedsDns: ['testseed.nav.community', 'testseed.navcoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L668
      private: 0x004358394,
      // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L666
      public: 0x043587cf,
    },
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L671
    bip44: 10227, // TODO: Neoxa diverges from "1" standard
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L664
    private: 0x72,
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L660
    public: 0x2a,
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L662
    scripthash: 0x7c,
  },
};
