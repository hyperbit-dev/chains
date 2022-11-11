/* source: https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp */
import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'BitcoinCash',
  decimalPlaces: 1e8,
  unit: 'BCH',
  messagePrefix: 'eCash Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xe8f3e1e3, // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed.bitcoinabc.org',
    'seed-abc.bitcoinforks.org',
    'btccash-seeder.bitcoinunlimited.info',
    'seed.bitprim.org',
    'seed.deadalnix.me',
    'seeder.criptolayer.net',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 145,
    private: 0x80,
    public: 0x00,
    scripthash: 0x05,
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943',
  port: 18333,
  portRpc: 18332,
  protocol: {
    magic: 0xf4f3e5f4,
  },
  seedsDns: [
    'testnet-seed.bitcoinabc.org',
    'testnet-seed-abc.bitcoinforks.org',
    'testnet-seed.bitprim.org',
    'testnet-seed.deadalnix.me',
    'testnet-seeder.criptolayer.net',
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};

const regtest: TestNetwork = {
  ...common,
  hashGenesisBlock:
    '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  portRpc: 18332,
  protocol: {
    magic: 0xfabfb5da,
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};

export const bch = {
  main,
  test,
  regtest,
};
