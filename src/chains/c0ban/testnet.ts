import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '1EB72780-6E27-4F84-BDEE-82E41798A969',
  hashGenesisBlock:
    '000000005184ffce04351e687a3965b300ee011d26b2089232cd039273be4a67',
  port: 13881,
  portRpc: 13882,
  protocol: {
    magic: 0x8e828083, // pchMessageStart
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04388388, // base58Prefixes[EXT_SECRET_KEY]
      public: 0x04588788, // base58Prefixes[EXT_PUBLIC_KEY]
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    private: 0xee, // base58Prefixes[SECRET_KEY]
    public: 0x76, // base58Prefixes[PUBKEY_ADDRESS]
    scripthash: 0xc6, // base58Prefixes[SCRIPT_ADDRESS]
  },
};
