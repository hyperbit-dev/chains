import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: 'C5546570-CE22-49CD-9F03-F55285B1D659',
  network: 'testnet',
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
