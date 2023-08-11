import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: 'E6AFFDB1-89FD-4D13-B044-109750E6AC0A',
  hashGenesisBlock:
    '000086bfe8264d241f7f8e5393f747784b8ca2aa98bdd066278d590462a4fdb4',
  port: 33368,
  portRpc: 32368,
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0x8c,
    public: 0x12,
    scripthash: 0x74,
  },
};
