import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '6C9306C2-B4A9-4FF2-B2FB-9ABA8EAABEC3',
  network: 'mainnet',
  hashGenesisBlock:
    '00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6',
  // nDefaultPort
  port: 9999,
  portRpc: 9998,
  protocol: {
    magic: 0xbd6b0cbf, // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'dash.org',
    'dnsseed.dash.org',
    'dashdot.io',
    'dnsseed.dashdot.io',
    'masternode.io',
    'dnsseed.masternode.io',
    'dashpay.io',
    'dnsseed.dashpay.io',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 5,
    private: 0xcc,
    public: 0x4c,
    scripthash: 0x10,
  },
};
