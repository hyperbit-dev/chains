import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  hashGenesisBlock:
    '4e9b54001f9976049830128ec0331515eaabe35a70970d79971da1539a400ba1',
  port: 5223,
  portRpc: 5222,
  protocol: {
    magic: 0xcbc6680f,
  },
  seedsDns: [
    'seed.viacoin.net',
    'viaseeder.barbatos.fr',
    'mainnet.viacoin.net',
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 14,
    private: 0xc7,
    public: 0x47,
    scripthash: 0x21,
  },
};
