import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L517C47-L517C113
  hashGenesisBlock:
    '0x000000a4d5d20f09a4cd9d47cae7e1bb056d46a1ba841ea19267341109f7b3a1',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L513C24-L513C29
  port: 18757,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparamsbase.cpp#L49
  portRpc: 19998,
  protocol: {
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L508
    magic: 0x3c2b3327,
  },
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L526
  seedsDns: ['45.63.29.105', '149.28.178.208'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L537
      private: 0x03538891,
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L536
      public: 0x035377ca,
    },
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L540
    bip44: 1,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L534
    private: 0xe9,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L530
    public: 0x70,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L532
    scripthash: 0xc1,
  },
};
