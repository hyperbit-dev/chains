import { TestNet } from '../../types';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L418
  hashGenesisBlock:
    '00000044bc03f8460e64bc07b080f4929b1cb96fda46b8bd806e57bfb9db82f4',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L399
  port: 18820,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparamsbase.cpp#L49
  portRpc: 18819,
  protocol: {
    magic: 0x54525645,
  },
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L427
  seedsDns: ['seed-testnet-evr.evrmorecoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L431
    private: 0xef,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L429
    public: 0x6f,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L430
    scripthash: 0xc4,
  },
};
