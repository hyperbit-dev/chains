/* source: https://github.com/BTCGPU/BTCGPU/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Bitcoin Gold',
  unit: 'BTG',
  decimalPlaces: 1e8,
  /** https://github.com/BTCGPU/BTCGPU/blob/71894be9e4eb573643d85a33d28247b95db1d998/src/validation.cpp#L251 */
  messagePrefix: 'Bitcoin Gold Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8338,
  portRpc: 8338,
  protocol: {
    // pchMessageStart
    magic: 0x446d47e1, // careful, sent over wire as little endian
  },
  bech32: 'btg',
  // vSeeds
  seedsDns: [
    'eu-dnsseed.bitcoingold-official.org',
    'dnsseed.bitcoingold.org',
    'dnsseed.btcgpu.org',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 156,
    private: 0x80,
    public: 0x26,
    scripthash: 0x17,
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    '0x00000000e0781ebe24b91eedc293adfea2f557b53ec379e78959de3853e6f9f6',
  port: 18338,
  portRpc: 18332,
  protocol: {
    magic: 0x456e48e2,
  },
  bech32: 'tbtg',
  seedsDns: [
    'test-dnsseed.bitcoingold.org',
    'test-dnsseed.btcgpu.org',
    'eu-test-dnsseed.bitcoingold-official.org',
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 156,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};

export const btg = {
  main,
  test,
};
