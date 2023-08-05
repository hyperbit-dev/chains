import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
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
