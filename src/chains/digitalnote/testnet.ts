import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: 'E3052A5E-648B-4A79-A48B-AFA4C3CCD175',
  network: 'testnet',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp
  hashGenesisBlock:
    '0x000510a669c8d36db04317fa98f7bf183d18c96cef5a4a94a6784a2c47f92e6c',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L28
  port: 28092,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L29C2
  portRpc: 28094,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L21
  protocol: {
    magic: 0xf41cbc42,
  },
  seedsDns: [],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L57
      private: 0x04358394,
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L56
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L54
    private: 0x66,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L52
    public: 0x5b,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L53
    scripthash: 0x64,
  },
};
