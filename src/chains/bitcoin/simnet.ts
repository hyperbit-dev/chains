import { SimNet } from '../../types/base';
import { common } from './base';

// source: https://github.com/btcsuite/btcd/blob/6867ff32788a1beb9d148e414d7f84f50958f0d2/chaincfg/params.go#L508
export const simnet: SimNet = {
  ...common,
  id: '36F2C046-D941-411B-B94B-5B6033844241',
  network: 'simnet',
  hashGenesisBlock:
    'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  port: 18555,
  portRpc: 18556,
  protocol: {
    magic: 0x12141c16,
  },
  bech32: 'sb',
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x0420b900,
      public: 0x0420bd3a,
    },
    bip44: 115,
    private: 0x64,
    public: 0x3f,
    scripthash: 0x7b,
  },
};
