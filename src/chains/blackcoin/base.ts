/* source: https://github.com/rat4/blackcoin/blob/master/src/chainparams.cpp */

import { Common } from '../../types/base';

export const common: Common = {
  name: 'BlackCoin',
  decimalPlaces: 1e8,
  unit: 'BLK',
  symbol: 'blk',
  messagePrefix: 'BlackCoin Signed Message:\n',
  // https://github.com/blacknet-ninja/blackcoin-old/blob/1f0dc61f894aaf5fbb0d79d609f3502f7c7f2771/src/qt/transactionrecord.h#L78
  confirmations: 10
};
