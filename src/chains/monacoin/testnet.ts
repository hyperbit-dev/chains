import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '35512833-0D1A-4F0F-B0ED-135BF6F1D30D',
  network: 'testnet',
  hashGenesisBlock:
    'a2b106ceba3be0c6d097b2a6a6aacf9d638ba8258ae478158f449c321061e0b2',
  port: 19403,
  portRpc: 19402,
  protocol: {
    magic: 0xf1c8d2fd,
  },
  bech32: 'tmona',
  seedsDns: ['testnet-dnsseed.monacoin.org'],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x75,
    scripthash2: 0xc4,
  },
};
