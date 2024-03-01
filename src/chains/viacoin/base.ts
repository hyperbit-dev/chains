import { Common } from '../../types/base';

export const common: Common = {
  name: 'Viacoin',
  unit: 'VIA',
  symbol: 'via',
  decimalPlaces: 1e8,
  // https://github.com/viacoin/viacoin/blob/master/src/qt/transactionrecord.h#L84
  confirmations: 6,
};
