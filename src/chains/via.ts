// https://github.com/viacoin/viacoin/blob/master/src/chainparams.cpp

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Viacoin',
  unit: 'VIA',
  decimalPlaces: 1e8,
};

const main: Network = {
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

const test: TestNetwork = {
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

export const via = {
  main,
  test,
};
