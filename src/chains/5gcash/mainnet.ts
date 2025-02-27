import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'A44223B1-CEE2-4EE6-B331-36A6BF608A69',
  network: 'mainnet',
  // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L177
  hashGenesisBlock:
    '0x000000b3cf5064a01dcdc8931f5bae3cc38c6af1aec07f4459903e9eebae986a',
  // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L164
  port: 22020,
  // https://github.com/5G-Cash/5G/blob/main/src/chainparamsbase.cpp
  portRpc: 22019,
  protocol: {
    // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L159
    magic: 0xc8a63bfc,
  },
  // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L182
  seedsDns: ['node1.fiveg.cash', 'node2.fiveg.cash'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L195
      private: 0x0221312b,
      // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L194
      public: 0x022d2533,
    },
    // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L193
    private: 0xd2,
    // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L191
    public: 0x0a,
    // https://github.com/5G-Cash/5G/blob/main/src/chainparams.cpp#L192
    scripthash: 0x0b,
  },
};
