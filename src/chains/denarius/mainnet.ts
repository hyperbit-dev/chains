import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  hashGenesisBlock:
    '00000d5dbbda01621cfc16bbc1f9bf3264d641a5dbf0de89fd0182c2c4828fcd',
  port: 33339,
  portRpc: 32339,
  protocol: {
    magic: 0xb4eff2fa,
  },
  seedsDns: [
    'denariusexplorer.org',
    'denarius.host',
    'denarius.tech',
    'denarius.network',
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 116,
    private: 0x9e,
    public: 0x1e,
    scripthash: 0x5a,
  },
};
