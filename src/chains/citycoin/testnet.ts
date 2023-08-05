import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  unit: 'TCITY',
  hashGenesisBlock:
    '00077765f625cc2cb6266544ff7d5a462f25be14ea1116dc2bd2fec17e40a5e3',
  port: 24333,
  portRpc: 24334,
  protocol: {
    magic: 0x43545401,
  },
  seedsDns: [
    'testseed.city-chain.org',
    'testseed.city-coin.org',
    'testseed.citychain.foundation',
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 1926,
    private: 0xc2,
    public: 0x42,
    scripthash: 0xc4,
  },
};
