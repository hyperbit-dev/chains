import { MainNet } from '../../types';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L85
  hashGenesisBlock:
    '0x00000d8e7d39218c4c02132e95a3896d46939b9b95624cf9dd2b0b794e6c216a',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L52
  port: 18092,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L53C3
  portRpc: 18094,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L46
  protocol: {
    magic: 0xe39caf21,
  },
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L95
  seedsDns: [
    '103.164.54.203',
    '192.241.147.56',
    '20.193.89.74',
    '161.97.92.102',
    '161.97.106.85',
    '62.171.150.246',
    '138.197.161.183',
    '157.230.107.144',
    '188.166.123.46',
    '159.203.14.113',
    '199.175.54.187',
    'seed1n.digitalnote.biz',
    'seed2n.digitalnote.biz',
    'seed3n.digitalnote.biz',
    'seed4n.digitalnote.biz',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L93
      private: 0x0488ade4,
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L92
      public: 0x0488b21e,
    },
    bip44: 287,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L90C36
    private: 0x8e,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L88
    public: 0x5a,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L89
    scripthash: 0x8c,
  },
};
