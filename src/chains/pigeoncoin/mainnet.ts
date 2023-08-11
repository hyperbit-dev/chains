import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '43D9A3E2-1D4A-420F-BF0B-503E15BCB211',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L345
  hashGenesisBlock:
    '0x000000f049bef9fec0179131874c54c76c0ff59f695db30a4f0da52072c99492',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L513C24-L513C29
  port: 18757,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 9998,
  protocol: {
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L336
    magic: 0x3c2b3327,
  },
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L348
  seedsDns: [
    '165.232.173.117',
    '161.35.4.115',
    '159.89.177.213',
    '138.68.75.8',
    '47.151.7.226',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L358
      private: 0x0877a12a,
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L357
      public: 0x0877a12a,
    },
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L360
    bip44: 5,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L356C22-L356C22
    private: 0x80,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L354
    public: 0x37,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L355
    scripthash: 0x7a,
  },
};
