import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L178
  hashGenesisBlock:
    '0x000000edd819220359469c54f2614b5602ebc775ea67a64602f354bdaa320f70',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L172
  port: 8788,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 9766,
  protocol: {
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L168
    magic: 0x4357454d,
  },
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L183
  seedsDns: ['66.42.117.31', '167.179.94.220'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L194
    bip44: 1669,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L189
    private: 0x70,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L187
    public: 0x32,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L188
    scripthash: 0x7a,
  },
};
