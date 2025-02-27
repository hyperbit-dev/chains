import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '4313D1BD-1AFC-4927-8FD4-A5FA8AA62EBA',
  network: 'mainnet',
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L246
  hashGenesisBlock:
    '0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L231
  port: 8367,
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparamsbase.cpp#L34
  portRpc: 8366,
  protocol: {
    // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L216
    magic: 0xd9c4c3e3,
  },
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L255
  seedsDns: [
    "seed.cdy.one",
    "cdyseed1.awmlite.com",
    "cdyseed2.awmlite.com",
    "block.cdy.one",
    "seed.bitcdy.com",
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L266
      private: 0x0488ade4,
      // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L265
      public: 0x0488b21e,
    },
    bip44: 1145,
    // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L264
    private: 0x80,
    // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L262
    public: 0x1c,
    // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/chainparams.cpp#L263
    scripthash: 0x58,
  },
};
