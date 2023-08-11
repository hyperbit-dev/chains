import { mainnet } from './mainnet';
import { testnet } from './testnet';
import { regtest } from './regtest';
import { Networks } from '../../types/base';

export const cbn: Networks = {
  mainnet,
  testnet,
  regtest,
};
