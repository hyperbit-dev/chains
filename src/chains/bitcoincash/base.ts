/* source: https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp */
import { Common } from '../../types/base';

export const common: Common = {
  name: 'BitcoinCash',
  decimalPlaces: 1e8,
  unit: 'BCH',
  messagePrefix: 'eCash Signed Message:\n',
};
