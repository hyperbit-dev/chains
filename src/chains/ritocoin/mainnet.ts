/* source: https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp */

import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '8587F97F-32F3-4F68-9426-447653FA183C',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L161
  hashGenesisBlock:
    '00000075e344bdf1c0e433f453764b1830a7aa19b2a5213e707502a22b779c1b',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L156
  port: 7342,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 8501,
  protocol: {
    magic: 0x2a7bc0a1,
  },
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L164
  seedsDns: ['s1.ritocoin.org', 's2.ritocoin.org', 's3.ritocoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 19169,
    private: 0x8b,
    public: 0x19,
    scripthash: 0x69,
  },
};
