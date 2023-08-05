import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  unit: 'CITY',
  hashGenesisBlock:
    '00000b0517068e602ed5279c20168cfa1e69884ee4e784909652da34c361bff2',
  port: 4333,
  portRpc: 4334,
  protocol: {
    magic: 0x43545901,
  },
  seedsDns: [
    'seed.city-chain.org',
    'seed.city-coin.org',
    'seed.citychain.foundation',
    'seed.liberstad.com',
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 1926,
    private: 0xed,
    public: 0x1c,
    scripthash: 0x58,
  },
};
