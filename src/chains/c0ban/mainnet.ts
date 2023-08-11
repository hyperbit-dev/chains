import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '45C5BEAB-73EB-4BA7-BF13-482CE66FFE38',
  hashGenesisBlock:
    '000000005184ffce04351e687a3965b300ee011d26b2089232cd039273be4a67',
  // nDefaultPort
  port: 3881,
  portRpc: 3882,
  protocol: {
    magic: 0x6e623063, // pchMessageStart
  },
  // vSeeds
  seedsDns: ['jp01.dnsseed.c0ban.com', 'kr01.dnsseed.c0ban.com'],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4, // base58Prefixes[EXT_SECRET_KEY]
      public: 0x0488b21e, // base58Prefixes[EXT_PUBLIC_KEY]
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 88888,
    private: 0x88, // base58Prefixes[SECRET_KEY]
    public: 0x12, // base58Prefixes[PUBKEY_ADDRESS]
    scripthash: 0x1c, // base58Prefixes[SCRIPT_ADDRESS]
  },
};
