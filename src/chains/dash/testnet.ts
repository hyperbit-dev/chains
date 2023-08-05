import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  hashGenesisBlock:
    '00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c',
  port: 19999,
  portRpc: 19998,
  seedsDns: [
    'dashdot.io',
    'testnet-seed.dashdot.io',
    'masternode.io',
    'test.dnsseed.masternode.io',
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x8c,
    scripthash: 0x13,
  },
};
