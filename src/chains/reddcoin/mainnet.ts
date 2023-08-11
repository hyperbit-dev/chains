/** source: https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp */

import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'A0F1B6CA-5A6E-4D09-8334-EE5C9AC4C21D',
  hashGenesisBlock:
    'b868e0d95a3c3c0e0dadc67ee587aaf9dc8acbf99e3b4b3110fad4eb74c1decc',
  port: 45444,
  portRpc: 45443,
  seedsDns: [
    'seed.reddcoin.com',
    'dnsseed01.redd.ink',
    'dnsseed02.redd.ink',
    'dnsseed03.redd.ink',
  ],
  versions: {
    // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L317
    bip32: {
      private: 0x0488b21e,
      public: 0x0488ade4,
    },
    bip44: 4,
    private: 0xbd,
    public: 0x3d,
    scripthash: 0x05,
  },
};
