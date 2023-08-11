import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '104F0CF8-016A-4BF5-9282-B071C6A2C34F',
  hashGenesisBlock:
    '0x05a60a92d99d85997cce3b87616c089f6124d7342af37106edc76126334a2c38',
  port: 18233,
  portRpc: 18232,
  protocol: {
    magic: 0xbff91afa,
  },
  seedsDns: ['dnsseed.testnet.z.cash'],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 133,
    private: 0xef,
    public: 0x1d25,
    scripthash: 0x1cba,
  },
};
