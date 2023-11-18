import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: 'CC712380-530A-4612-879D-40096E5B7919',
  network: 'testnet',
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L319
  hashGenesisBlock:
    '00000007199508e34a9ff81e6ec0c477a4cccff2a4767a8eee39c11db367b008',
  //  https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L50
  port: 18334,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L50
  portRpc: 18336,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L325
  seedsDns: ['dnsseed.test.namecoin.webbtc.com', 'ncts.roanapur.info'],
  versions: {
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L166
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 7,
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L327
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};
