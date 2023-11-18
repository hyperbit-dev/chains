import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '760C254C-AFAF-4C7E-BE95-B7EAFA302F7D',
  network: 'testnet',
  hashGenesisBlock:
    'bb0a78264637406b6360aad926284d544d7049f45189db5664f3c4d07350559e',
  port: 44556,
  portRpc: 44555,
  protocol: {
    magic: 0xfcc1b7dc,
  },
  seedsDns: ['testseed.jrn.me.uk'],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xf1,
    public: 0x71,
    scripthash: 0xc4,
  },
};
