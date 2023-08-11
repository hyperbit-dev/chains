/* source: 
    https://github.com/zcash/zcash/blob/v1.0.12/src/chainparamsbase.cpp
    https://github.com/zcash/zcash/blob/v1.0.12/src/chainparams.cpp
*/

import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'ABADAA64-6BC6-490B-A6A3-67C038205319',
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
