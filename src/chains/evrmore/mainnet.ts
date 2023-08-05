import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L262
  hashGenesisBlock:
    '0000007b11d0481b2420a7c656ef76775d54ab5b29ee7ea250bc768535693b05',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L242
  port: 8820,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparamsbase.cpp#L37
  portRpc: 8819,
  protocol: {
    magic: 0x4d525645,
  },
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L268
  seedsDns: ['seed-mainnet-evr.evrmorecoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L278
    bip44: 175,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L272
    private: 0x80,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L270
    public: 0x21,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L271
    scripthash: 0x5c,
  },
};
