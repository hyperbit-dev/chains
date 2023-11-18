import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '00D080B5-3063-49FE-B886-61D3248760BA',
  network: 'mainnet',
  hashGenesisBlock:
    '00000ac5927c594d49cc0bdb81759d0da8297eb614683d3acb62f0703b639023',
  // nDefaultPort
  port: 1331,
  portRpc: 1441,
  protocol: {
    // pchMessageStart
    magic: 0xd4b4bef9, // careful, sent over wire as little endian
  },
  bech32: 'grs',
  // vSeeds
  seedsDns: [
    'dnsseed1.groestlcoin.org',
    'dnsseed2.groestlcoin.org',
    'dnsseed3.groestlcoin.org',
    'dnsseed4.groestlcoin.org',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 17,
    private: 0x80,
    public: 0x24,
    scripthash: 0x05,
  },
};
