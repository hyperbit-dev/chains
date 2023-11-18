import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '58CFFA6F-F50F-4638-8172-960A4F871FF9',
  network: 'mainnet',
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L446
  hashGenesisBlock:
    '0000000a50fdaaf22f1c98b8c61559e15ab2269249aa1fb20683180703cdbf07',
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L438C24-L438C28
  port: 8788,
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparamsbase.cpp#L37C20-L37C25
  portRpc: 15419,
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L434C25-L434C25
  protocol: {
    magic: 0x454d4147,
  },
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L449
  seedsDns: ['seed.neoxa.net', 'seed1.neoxa.net', 'seed2.neoxa.net'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L458
      private: 0x0488ade4,
      // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L457
      public: 0x0488b21e,
    },
    // https://github.com/michaelmcshinsky/slips/blob/master/slip-0044.md
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L461C24-L461C28
    bip44: 1668,
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L461C24-L461C28
    private: 0x70,
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L454
    public: 0x26,
    // https://github.com/NeoxaChain/Neoxa/blob/main/src/chainparams.cpp#L455
    scripthash: 0x7a,
  },
};
