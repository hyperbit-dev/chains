import { RegTest } from '../../types/base';
import { common } from './base';

export const regtest: RegTest = {
  ...common,
  id: 'DDDFE1B1-5E66-471D-A566-CC68F3B9A6FA',
  hashGenesisBlock:
    '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  portRpc: 18332,
  protocol: {
    magic: 0xfabfb5da,
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};
