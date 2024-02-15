import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '457C71FE-A732-4208-A469-22FD6107EE8C',
  network: 'testnet',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L348
  hashGenesisBlock:
    '0x000000eaab417d6dfe9bd75119972e1d07ecfe8ff655bef7c2acb3d9a0eeed81',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L340
  port: 4568,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparamsbase.cpp#L49
  portRpc: 18766,
  protocol: {
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L336
    magic: 0x6377656d,
  },
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L353
  seedsDns: ['66.42.117.31', '167.179.94.220'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L358
    private: 0x72,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L356
    public: 0x6d,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L357
    scripthash: 0x7c,
  },
};
