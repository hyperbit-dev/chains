/* source: https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Bitcoin',
  decimalPlaces: 1e8,
  unit: 'BTC',
  /** https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/networks.js#L5 */
  messagePrefix: '\u0018Bitcoin Signed Message:\n',
  messagePrefixAlts: [
    /** https://github.com/bitcoin/bitcoin/blob/01e1627e25bc5477c40f51da03c3c31b609a85c9/src/util/message.cpp#L25 */
    'Bitcoin Signed Message:\n',
    '\x18Bitcoin Signed Message:\n',
    '\x19Bitcoin Signed Message:\n',
  ],
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
    magic: 0xd9b4bef9, // careful, sent over wire as little endian
  },
  bech32: 'bc',
  // vSeeds
  seedsDns: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'seed.bitcoinstats.com',
    'seed.bitcoin.jonasschnelli.ch',
    'seed.btc.petertodd.org',
    'seed.bitcoin.sprovoost.nl',
    'dnsseed.emzy.de',
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 0,
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
    magic: 0x0709110b,
  },
  bech32: 'tb',
  seedsDns: [
    'testnet-seed.alexykot.me',
    'testnet-seed.bitcoin.schildbach.de',
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me',
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
    magic: 0xdab5bffa,
  },
  bech32: 'bcrt',
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

// source: https://github.com/btcsuite/btcd/blob/6867ff32788a1beb9d148e414d7f84f50958f0d2/chaincfg/params.go#L508
const simnet: TestNetwork = {
  ...common,
  hashGenesisBlock:
    'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  port: 18555,
  portRpc: 18556,
  protocol: {
    magic: 0x12141c16,
  },
  bech32: 'sb',
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x0420b900,
      public: 0x0420bd3a,
    },
    bip44: 115,
    private: 0x64,
    public: 0x3f,
    scripthash: 0x7b,
  },
};

export const btc = {
  main,
  test,
  regtest,
  simnet,
};
