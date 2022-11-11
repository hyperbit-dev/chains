/* source: https://github.com/qtumproject/qtum/blob/master/src/chainparams.cpp */

import { Common, Network } from '../types';

const common: Common = {
  name: 'Qtum',
  unit: 'QTUM',
  decimalPlaces: 1e8,
  /** https://github.com/qtumproject/qtum/blob/631efb900d5372d957f66baa58cc800a460839ae/src/util/signstr.h#L14 */
  messagePrefix: 'Qtum Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '000075aef83cf2853580f8ae8ce6f8c3096cfa21d98334d6e3f95e5582ed986c',
  // nDefaultPort
  port: 3888,
  portRpc: 3889,
  protocol: {
    // pchMessageStart
    magic: 0xd3a6cff1, // careful, sent over wire as little endian
  },
  bech32: 'qc',
  // vSeeds
  seedsDns: [
    'qtum3.dynu.net',
    'qtum5.dynu.net',
    'qtum6.dynu.net',
    'qtum7.dynu.net',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 2301,
    private: 0x80,
    public: 0x3a,
    scripthash: 0x32,
  },
};

export const qtum = {
  main,
  test: null,
};
