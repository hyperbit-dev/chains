import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  hashGenesisBlock:
    '1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691',
  port: 22556,
  portRpc: 22555,
  protocol: {
    magic: 0xc0c0c0c0,
  },
  seedsDns: ['seed.multidoge.org', 'seed2.multidoge.org'],
  versions: {
    bip32: {
      private: 0x02fac398,
      public: 0x02facafd,
    },
    bip44: 3,
    private: 0x9e,
    public: 0x1e,
    scripthash: 0x16,
  },
};
