import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  hashGenesisBlock:
    '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943',
  port: 18333,
  portRpc: 18332,
  protocol: {
    magic: 0xf4f3e5f4,
  },
  seedsDns: [
    'testnet-seed.bitcoinabc.org',
    'testnet-seed-abc.bitcoinforks.org',
    'testnet-seed.bitprim.org',
    'testnet-seed.deadalnix.me',
    'testnet-seeder.criptolayer.net',
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};
