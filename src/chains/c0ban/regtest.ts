import { RegTest } from '../../types';
import { common } from './base';

export const regtest: RegTest = {
  ...common,
  hashGenesisBlock:
    '3249e44acac8fc67e6b94e882525cea6f5a9853e1ff7b4a1d5f470b23ff8ae11',
  port: 23881,
  portRpc: 23882,
  protocol: {
    magic: 0xdab5bffa, // pchMessageStart
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x043587cf, // base58Prefixes[EXT_SECRET_KEY]
      public: 0x04358394, // base58Prefixes[EXT_PUBLIC_KEY]
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    private: 0xef, // base58Prefixes[SECRET_KEY]
    public: 0x6f, // base58Prefixes[PUBKEY_ADDRESS]
    scripthash: 0xc4, // base58Prefixes[SCRIPT_ADDRESS]
  },
};
