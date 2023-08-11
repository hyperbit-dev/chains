import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'A48ADAD7-E9E8-4A60-88B3-0A3371822C4B',
  hashGenesisBlock:
    '000000000062b72c5e2ceb45fbc8587e807c155b0da735e6483dfba2f0a9c770',
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L48
  port: 8334,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L48
  portRpc: 8336,
  seedsDns: [
    'seed.namecoin.libreisp.se',
    'nmc.seed.quisquis.de',
    'seed.nmc.markasoftware.com',
    'dnsseed1.nmc.dotbit.zone',
    'dnsseed2.nmc.dotbit.zone',
    'dnsseed.nmc.testls.space',
  ],
  versions: {
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L166
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 7,
    private: 0xb4,
    public: 0x34,
    scripthash: 0x05,
  },
};
