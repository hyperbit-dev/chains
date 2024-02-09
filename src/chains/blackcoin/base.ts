/* source: https://github.com/rat4/blackcoin/blob/master/src/chainparams.cpp */

import { Common } from '../../types/base';

export const common: Common = {
  name: 'BlackCoin',
  decimalPlaces: 1e8,
  unit: 'BLK',
  symbol: 'blk',
  messagePrefix: 'BlackCoin Signed Message:\n',
};
