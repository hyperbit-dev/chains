/* source: 
    https://github.com/zcash/zcash/blob/v1.0.12/src/chainparamsbase.cpp
    https://github.com/zcash/zcash/blob/v1.0.12/src/chainparams.cpp
*/

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Zcash',
  unit: 'ZEC',
  decimalPlaces: 1e8,
  /** https://github.com/zcash/zcash/blob/4792b1730a8d3c21c9a19fed809fdf8eb0ba35ca/src/main.cpp#L129 */
  messagePrefix: 'Zcash Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '00040fe8ec8471911baa1db1266ea15dd06b4a8a5c453883c000b031973dce08',
  // nDefaultPort
  port: 8233,
  portRpc: 8232,
  protocol: {
    // pchMessageStart
    magic: 0x6427e924, // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: ['dnsseed.z.cash', 'dnsseed.str4d.xyz', 'dnsseed.znodes.org'],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 133,
    private: 0x80,
    public: 0x1cb8,
    scripthash: 0x1cbd,
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    '0x05a60a92d99d85997cce3b87616c089f6124d7342af37106edc76126334a2c38',
  port: 18233,
  portRpc: 18232,
  protocol: {
    magic: 0xbff91afa,
  },
  seedsDns: ['dnsseed.testnet.z.cash'],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 133,
    private: 0xef,
    public: 0x1d25,
    scripthash: 0x1cba,
  },
};

export const zec = {
  main,
  test,
};
