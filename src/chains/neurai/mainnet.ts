import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: '94C49B3B-2C88-4408-B566-3D277C596778',
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
