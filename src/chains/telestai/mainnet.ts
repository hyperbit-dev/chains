import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'F937B313-630A-4C72-AA4D-599875C4B8B9',
  network: 'mainnet',
  // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L187
  hashGenesisBlock:
    '0x00000056b9854abf830236d77443a8e3556f0244265e3eb12281a7bc43b7ff57',
  // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L181
  port: 8767,
  portRpc: 8766,
  protocol: {
    // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L177
    magic: 0x454c4554,
  },
  // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L206
  seedsDns: [
    '45.79.159.32',
    'dnsseed.telestainodes.xyz',
    'telestai.seeds.multicoin.co',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L201
      private: 0x0488ade4,
      // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L200
      public: 0x0488b21e,
    },
    // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L204
    bip44: 10117,
    // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L199
    private: 0x80,
    // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L197
    public: 0x42,
    // https://github.com/Telestai-Project/telestai/blob/master/src/chainparams.cpp#L198
    scripthash: 0x7f,
  },
};
