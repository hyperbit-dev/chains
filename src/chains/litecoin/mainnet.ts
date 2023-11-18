import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'F91D36AB-BBE4-4C35-A3BD-2C3418071883',
  network: 'mainnet',
  hashGenesisBlock:
    '12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
  port: 9333,
  portRpc: 9332,
  protocol: {
    magic: 0xdbb6c0fb,
  },
  bech32: 'ltc',
  seedsDns: [
    'dnsseed.litecointools.com',
    'dnsseed.litecoinpool.org',
    'dnsseed.ltc.xurious.com',
    'dnsseed.koin-project.com',
    'dnsseed.weminemnc.com',
  ],
  versions: {
    bip32: {
      private: 0x019d9cfe,
      public: 0x019da462,
    },
    bip44: 2,
    private: 0xb0,
    public: 0x30,
    scripthash: 0x32,
    scripthash2: 0x05, // old '3' prefix. available for backward compatibility.
  },
};
