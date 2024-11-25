import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  //Not sure what ID is
  id: 'XXXXXX-XXXX-XXXX-XXXXX-99E65A61EB5F',
  network: 'mainnet',
  hashGenesisBlock:
    '0x00000056b9854abf830236d77443a8e3556f0244265e3eb12281a7bc43b7ff57',
  port: 8767,
  portRpc: 8766,
  protocol: {
    magic: 0x454c4554,
  },
  seedsDns: ['45.79.159.32'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },

    bip44: 10117,

    private: 0x80,

    public: 0x42,

    scripthash: 0x7F,
  },
};
