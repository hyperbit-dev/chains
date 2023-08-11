import { RegTest } from '../../types/base';
import { common } from './base';

export const regtest: RegTest = {
  ...common,
  id: '5A12F31D-818D-4354-84B9-E673771A2FD4',
  hashGenesisBlock:
    '0x000000ffbb50fc9898cdd36ec163e6ba23230164c0052a28876255b7dcf2cd36',
  port: 18888,
  portRpc: 18443,
  protocol: {
    magic: 0xdab5bffa,
  },
  bech32: 'grsrt',
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
