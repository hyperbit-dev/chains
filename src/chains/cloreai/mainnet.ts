import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'ECC78A5A-965E-4725-B52E-60DF267DA95B',
  network: 'mainnet',
  // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L180
  hashGenesisBlock:
    '0000000a50fdaaf22f1c98b8c61559e15ab2269249aa1fb20683180703cdbf07',
  // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L173
  port: 8788,
  // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparamsbase.cpp?ref_type=heads#L38
  portRpc: 9766,
  protocol: {
    // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L168
    magic: 0x49414941,
  },
  seedsDns: [],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L193
      private: 0x0488ade4,
      // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L192
      public: 0x0488b21e,
    },
    // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L195
    bip44: 1313,
    // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L191
    private: 0x70,
    // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L189
    public: 0x17,
    // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/chainparams.cpp?ref_type=heads#L190
    scripthash: 0x7a,
  },
};
