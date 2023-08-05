import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  hashGenesisBlock:
    '770aa712aa08fdcbdecc1c8df1b3e2d4e17a7cf6e63a28b785b32e74c96cb27d',
  port: 25223,
  portRpc: 25222,
  protocol: {
    magic: 0x92efc5a9,
  },
  seedsDns: ['testnet.viacoin.net', 'seed-testnet.viacoin.net'],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xff,
    public: 0x7f,
    scripthash: 0xc4,
  },
};
