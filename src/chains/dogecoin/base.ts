import { Common } from '../../types/base';

export const common: Common = {
  name: 'Dogecoin',
  unit: 'DOGE',
  symbol: 'doge',
  decimalPlaces: 1e8,
  // https://github.com/dogecoin/dogecoin/blob/master/src/validation.cpp#L102
  messagePrefix: 'Dogecoin Signed Message:\n',
  // https://github.com/dogecoin/dogecoin/blob/master/src/qt/transactionrecord.h#L83
  confirmations: 6
};
