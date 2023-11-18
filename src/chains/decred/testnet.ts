import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '34DEA8C5-553E-45A7-96ED-399B47E6F37F',
  network: 'testnet',
  hashGenesisBlock:
    '5b7466edf6739adc9b32aaedc54e24bdc59a05f0ced855088835fe3cbe58375f',
  port: 19108,
  portRpc: 19109,
  protocol: {
    magic: 0x48e7a065,
  },
  seedsDns: [
    'testnet-seed.decred.mindcry.org',
    'testnet-seed.decred.netpurgatory.org',
    'testnet.decredseed.org',
    'testnet-seed.decred.org',
  ],
  versions: {
    bip32: {
      private: 0x04358397,
      public: 0x043587d1,
    },
    bip44: 42,
    private: 0x230e,
    public: 0x0f21,
    scripthash: 0x0efc,
  },
};
