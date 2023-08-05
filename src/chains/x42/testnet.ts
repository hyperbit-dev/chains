import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  unit: 'Tx42',
  hashGenesisBlock:
    'a92bf124a1e6f237015440d5f1e1999bdef8e321f2d3fdc367eb2f7733b17854',
  port: 62342,
  portRpc: 62343,
  protocol: {
    magic: 0x4526642,
  },
  seedsDns: ['testnet1.x42seed.host'],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 424242,
    private: 0xc1,
    public: 0x41,
    scripthash: 0xc4,
  },
};
