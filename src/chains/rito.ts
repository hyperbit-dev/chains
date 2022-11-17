/* source: https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Ritocoin',
  unit: 'RITO',
  decimalPlaces: 1e8,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/validation.cpp#L113
  messagePrefix: 'Rito Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L161
  hashGenesisBlock:
    '00000075e344bdf1c0e433f453764b1830a7aa19b2a5213e707502a22b779c1b',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L156
  port: 7342,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 8501,
  protocol: {
    magic: 0x2a7bc0a1,
  },
  bech32: 'rc',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L164
  seedsDns: ['s1.ritocoin.org', 's2.ritocoin.org', 's3.ritocoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 19169,
    private: 0x8b,
    public: 0x19,
    scripthash: 0x69,
  },
};

const test: TestNetwork = {
  ...common,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L318
  hashGenesisBlock:
    '0x00000075e344bdf1c0e433f453764b1830a7aa19b2a5213e707502a22b779c1b',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L312
  port: 17342,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparamsbase.cpp#L48
  portRpc: 18501,
  protocol: {
    magic: 0x514e5352,
  },
  bech32: 'tr',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L324
  seedsDns: ['tn.s1.ritocoin.org', 'tn.s2.ritocoin.org', 'tn.s3.ritocoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};

export const rito = {
  main,
  test,
};
