import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '85526DEF-8C30-410B-AE09-2EBA587D7ACA',
  hashGenesisBlock:
    '000001faef25dec4fbcf906e6242621df2c183bf232f263d0ba5b101911e4563',
  port: 15714,
  portRpc: 15715,
  protocol: {
    magic: 0x05223570, // careful, sent over wire as little endian
  },
  seedsDns: [
    'rat4.blackcoin.co',
    'seed.blackcoin.co',
    'archon.darkfox.id.au',
    'foxy.seeds.darkfox.id.au',
    '6.syllabear.us.to',
    'bcseed.syllabear.us.to',
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 10,
    private: 0x99,
    public: 0x19,
    scripthash: 0x55,
  },
};
