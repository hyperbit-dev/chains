import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '1EB2ACBA-E8E0-4970-BB20-37DA4B70F6A6',
  network: 'testnet',
  hashGenesisBlock:
    '0000006af8b8297448605b0283473ec712f9768f81cc7eae6269b875dee3b0cf',
  port: 19100,
  portRpc: 19101,
  protocol: {
    magic: 0x4e455552,
  },
  seedsDns: [
    'testnet1.neuracrypt.org',
    'testnet2.neuracrypt.org',
    'testnet3.neuracrypt.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 0,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L423
    private: 0xef,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L359
    public: 0x7f,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L422
    scripthash: 0xc4,
  },
};
