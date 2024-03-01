import { Common } from '../../types/base';

export const common: Common = {
  name: 'ReddCoin',
  unit: 'RDD',
  symbol: 'rdd',
  decimalPlaces: 1e8,
  // https://github.com/reddcoin-project/reddcoin/blob/develop/src/qt/transactionrecord.h#L89
  confirmations: 6,
};
