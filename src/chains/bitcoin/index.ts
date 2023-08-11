import { mainnet } from './mainnet';
import { testnet } from './testnet';
import { regtest } from './regtest';
import { simnet } from './simnet';
import { Networks } from '../../types/base';

export const btc: Networks = {
  mainnet,
  testnet,
  regtest,
  simnet,
};
