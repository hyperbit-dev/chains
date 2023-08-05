import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  hashGenesisBlock:
    '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xe8f3e1e3, // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed.bitcoinabc.org',
    'seed-abc.bitcoinforks.org',
    'btccash-seeder.bitcoinunlimited.info',
    'seed.bitprim.org',
    'seed.deadalnix.me',
    'seeder.criptolayer.net',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 145,
    private: 0x80,
    public: 0x00,
    scripthash: 0x05,
  },
};
