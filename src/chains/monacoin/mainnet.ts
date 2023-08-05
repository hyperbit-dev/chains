import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  hashGenesisBlock:
    'ff9f1c0116d19de7c9963845e129f9ed1bfc0b376eb54fd7afa42e0d418c8bb6',
  port: 9401,
  portRpc: 9402,
  protocol: {
    magic: 0xdbb6c0fb,
  },
  bech32: 'mona',
  seedsDns: ['dnsseed.monacoin.org'],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 22,
    private: 0xb0,
    private2: 0xb2, // old wif
    public: 0x32,
    scripthash: 0x37,
    scripthash2: 0x05, // old '3' prefix. available for backward compatibility.
  },
};
