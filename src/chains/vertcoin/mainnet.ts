/* source: 
    https://github.com/vertcoin/vertcoin/blob/master/src/chainparams.cpp
*/

import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '14599957-98DD-4327-9B40-EABE9CD7D603',
  network: 'mainnet',
  hashGenesisBlock:
    '4d96a915f49d40b1e5c2844d1ee2dccb90013a990ccea12c492d22110489f0c4',
  // nDefaultPort
  port: 5889,
  portRpc: 5888,
  protocol: {
    // pchMessageStart
    magic: 0xdab5bffa, // careful, sent over wire as little endian
  },
  bech32: 'vtc',
  // vSeeds
  seedsDns: [
    'useast1.vtconline.org',
    'vtc.gertjaap.org',
    'seed.vtc.bryangoodson.org',
    'dnsseed.pknight.ca',
    'seed.orderofthetaco.org',
    'seed.alexturek.org',
    'vertcoin.mbl.cash',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 28,
    private: 0x80,
    public: 0x47,
    scripthash: 0x05,
  },
};
