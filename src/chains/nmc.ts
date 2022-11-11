import { Common, Network } from '../types';

const common: Common = {
  name: 'Namecoin',
  unit: 'NMC',
  decimalPlaces: 1e8,
  /** https://github.com/namecoin/namecoin-core/blob/master/src/util/message.cpp#L25 */
  messagePrefix: 'Namecoin Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '000000000062b72c5e2ceb45fbc8587e807c155b0da735e6483dfba2f0a9c770',
  port: 7336,
  portRpc: 7333,
  seedsDns: [
    'seed.namecoin.libreisp.se',
    'nmc.seed.quisquis.de',
    'seed.nmc.markasoftware.com',
    'dnsseed1.nmc.dotbit.zone',
    'dnsseed2.nmc.dotbit.zone',
    'dnsseed.nmc.testls.space',
  ],
  versions: {
    bip44: 7,
    private: 0xb4,
    public: 0x34,
    scripthash: 0x05,
  },
};

export const nmc = {
  main,
  test: null,
};
