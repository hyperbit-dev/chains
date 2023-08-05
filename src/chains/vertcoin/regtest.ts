import { RegTest } from '../../types';
import { common } from './base';

export const regtest: RegTest = {
  ...common,
  hashGenesisBlock:
    '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  portRpc: 18332,
  protocol: {
    magic: 0xdab5bffa,
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 28,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};
