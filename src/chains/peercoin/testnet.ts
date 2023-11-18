import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '83D6D590-B6E0-40A6-AB07-3756618DEF92',
  network: 'testnet',
  hashGenesisBlock:
    '00000001f757bb737f6596503e17cd17b0658ce630cc727c0cca81aec47c9f06',
  port: 9903,
  portRpc: 9904,
  protocol: {
    magic: 0xefc0f2cb,
  },
  seedsDns: [
    'tseed.peercoin.net',
    'tseed2.peercoin.net',
    'tseed.peercoin-library.org',
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
