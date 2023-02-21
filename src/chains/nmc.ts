import { Common, Network, TestNetwork } from '../types';

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

const test: TestNetwork = {
  ...common,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L319
  hashGenesisBlock:
    '00000007199508e34a9ff81e6ec0c477a4cccff2a4767a8eee39c11db367b008',
  //  https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L50
  port: 18334,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L50
  portRpc: 18336,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L325
  seedsDns: ['dnsseed.test.namecoin.webbtc.com', 'ncts.roanapur.info'],
  versions: {
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L166
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 7,
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L327
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};

export const nmc = {
  main,
  test,
};
