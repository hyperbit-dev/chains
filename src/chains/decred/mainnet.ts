import { MainNet } from '../../types';
import { common } from './base';

// https://github.com/decred/dcrd/blob/ef71103c95cbf77e5a0418e3d413b5906e710b25/chaincfg/params.go
// https://github.com/decred/bitcore/blob/a92381b2b0023b28a1b7eb03e6cb0bfb7800200d/lib/networks.js
export const mainnet: MainNet = {
  ...common,
  hashGenesisBlock:
    '298e5cc3d985bfe7f81dc135f360abe089edd4396b86d2de66b0cef42b21d980',
  port: 9108,
  portRpc: 9109,
  protocol: {
    magic: 0xf900b4d9,
  },
  seedsDns: [
    'mainnet-seed.decred.mindcry.org',
    'mainnet-seed.decred.netpurgatory.com',
    'mainnet.decredseed.org',
    'mainnet-seed.decred.org',
  ],
  versions: {
    bip32: {
      private: 0x02fda4e8,
      public: 0x02fda926,
    },
    bip44: 42,
    private: 0x22de,
    public: 0x073f,
    scripthash: 0x071a,
  },
};
