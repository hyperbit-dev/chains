import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '86EC9D82-4A7C-4B99-8261-D185B898A5F1',
  network: 'testnet',
  hashGenesisBlock:
    'a12ac9bd4cd26262c53a6277aafc61fe9dfe1e2b05eaa1ca148a5be8b394e35a',
  port: 55444,
  portRpc: 55443,
  seedsDns: ['testnet-seed.reddcoin.com', 'testnet-dnsseed.redd.ink'],
  versions: {
    // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L384
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
