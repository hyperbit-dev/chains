/* source: https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Evrmore',
  unit: 'EVR',
  decimalPlaces: 1e8,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/validation.cpp#L131
  messagePrefix: 'Evrmore Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L262
  hashGenesisBlock:
    '0000007b11d0481b2420a7c656ef76775d54ab5b29ee7ea250bc768535693b05',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L242
  port: 8820,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparamsbase.cpp#L37
  portRpc: 8819,
  protocol: {
    magic: 0x4d525645,
  },
  // https://en.bitcoin.it/wiki/Bech32
  bech32: 'ec',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L268
  seedsDns: ['seed-mainnet-evr.evrmorecoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L278
    bip44: 175,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L272
    private: 0x80,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L270
    public: 0x21,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L271
    scripthash: 0x5c,
  },
};

const test: TestNetwork = {
  ...common,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L418
  hashGenesisBlock:
    '00000044bc03f8460e64bc07b080f4929b1cb96fda46b8bd806e57bfb9db82f4',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L399
  port: 18820,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparamsbase.cpp#L49
  portRpc: 18819,
  protocol: {
    magic: 0x54525645,
  },
  // https://en.bitcoin.it/wiki/Bech32
  bech32: 'te',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L427
  seedsDns: ['seed-testnet-evr.evrmorecoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L431
    private: 0xef,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L429
    public: 0x6f,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L430
    scripthash: 0xc4,
  },
};

export const evr = {
  main,
  test,
};
