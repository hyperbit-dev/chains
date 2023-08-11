import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '732A7C65-27B7-4661-A3CB-EC2851EC0C8E',
  hashGenesisBlock:
    '0x000000ffbb50fc9898cdd36ec163e6ba23230164c0052a28876255b7dcf2cd36',
  port: 17777,
  portRpc: 17766,
  protocol: {
    magic: 0x0709110b,
  },
  bech32: 'tgrs',
  seedsDns: ['testnet-seed1.groestlcoin.org', 'testnet-seed2.groestlcoin.org'],
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
