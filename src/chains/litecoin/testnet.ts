import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: 'AEE56E37-B187-403F-8CF1-5D18BF7ED553',
  hashGenesisBlock:
    'f5ae71e26c74beacc88382716aced69cddf3dffff24f384e1808905e0188f68f',
  port: 19335,
  portRpc: 19332,
  bech32: 'tltc',
  versions: {
    bip32: {
      private: 0x0436ef7d,
      public: 0x0436f6e1,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x3a,
    scripthash2: 0xc4,
  },
};
