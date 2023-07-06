/* source: https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Ravencoin',
  unit: 'RVN',
  decimalPlaces: 1e8,
  // https://github.com/RavenProject/Ravencoin/blob/c8197cd15d8886dc5c6121e3ba3f39c92445fc1b/src/validation.cpp#L129
  messagePrefix: '\x16Raven Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L411
  hashGenesisBlock:
    '0000006b444bc2f2ffe627be9d9e7e7a0730000870ef6eb6da46c8eae389df90',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L181
  port: 8767,
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 8766,
  protocol: {
    magic: 0x4e564152,
  },
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L191
  seedsDns: [
    'seed-raven.bitactivate.com',
    'seed-raven.ravencoin.com',
    'seed-raven.ravencoin.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L202
    bip44: 175,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L197
    private: 0x80,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L195
    public: 0x3c,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L196
    scripthash: 0x7a,
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    '000000ecfc5e6324a079542221d00e10362bdc894d56500c414060eea8a3ad5a',
  port: 18770,
  portRpc: 18766,
  protocol: {
    magic: 0x544e5652,
  },
  seedsDns: [
    'seed-testnet-raven.bitactivate.com',
    'seed-testnet-raven.ravencoin.com',
    'seed-testnet-raven.ravencoin.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L423
    private: 0xef,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L421
    public: 0x6f,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L422
    scripthash: 0xc4,
  },
};

export const rvn = {
  main,
  test,
};
