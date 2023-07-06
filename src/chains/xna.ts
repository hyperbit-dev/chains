/* source: https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Neurai',
  unit: 'XNA',
  decimalPlaces: 1e8,
  // https://github.com/NeuraiProject/Neurai/blob/main/src/validation.cpp#L129
  messagePrefix: 'Neurai Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L179
  hashGenesisBlock:
    '00000044d33c0c0ba019be5c0249730424a69cb4c222153322f68c6104484806',
  // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L172
  port: 19000,
  // https://github.com/NeuraiProject/Neurai/blob/main/src//chainparamsbase.cpp#L36
  portRpc: 19001,
  protocol: {
    magic: 0x5255454e,
  },
  // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L182
  seedsDns: [
    'seed1.neurai.org',
    'seed2.neurai.org',
    'neurai-ipv4.neuraiexplorer.com',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L200
    bip44: 0,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L195
    private: 0x80,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L193
    public: 0x35,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L194
    scripthash: 0x75,
  },
};

const test: TestNetwork = {
  ...common,
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
    public: 0xeb,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L422
    scripthash: 0xc4,
  },
};

export const xna = {
  main,
  test,
};
