import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '3398E662-F917-4935-927E-EA518834C460',
  hashGenesisBlock:
    'cee8f24feb7a64c8f07916976aa4855decac79b6741a8ec2e32e2747497ad2c9',
  port: 15889,
  portRpc: 15888,
  // portRpc: 18332,
  protocol: {
    magic: 0x74726576,
  },
  bech32: 'tvtc',
  seedsDns: [
    'jlovejoy.mit.edu',
    'gertjaap.ddns.net',
    'fr1.vtconline.org',
    'tvtc.vertcoin.org',
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 28,
    private: 0xef,
    public: 0x4a,
    scripthash: 0xc4,
  },
};
