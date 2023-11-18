import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'A1AC99E9-7285-4C81-8FE6-BF298E32E597',
  network: 'mainnet',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L188
  hashGenesisBlock:
    '0000006b444bc2f2ffe627be9d9e7e7a0730000870ef6eb6da46c8eae389df90',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L181
  port: 8767,
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 8766,
  protocol: {
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L177
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
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L199
      private: 0x0488ade4,
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L198
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
