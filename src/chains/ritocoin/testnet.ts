import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '67BD4164-3115-4695-B728-F49FC1131110',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L318
  hashGenesisBlock:
    '0x00000075e344bdf1c0e433f453764b1830a7aa19b2a5213e707502a22b779c1b',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L312
  port: 17342,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparamsbase.cpp#L48
  portRpc: 18501,
  protocol: {
    magic: 0x514e5352,
  },
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L324
  seedsDns: ['tn.s1.ritocoin.org', 'tn.s2.ritocoin.org', 'tn.s3.ritocoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};
