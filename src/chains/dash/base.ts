import { Common } from '../../types/base';

export const common: Common = {
  name: 'Dash',
  decimalPlaces: 1e8,
  unit: 'DASH',
  symbol: 'dash',
  // https://github.com/dashpay/dash/blob/master/src/qt/transactionrecord.h#L103
  confirmations: 6,
};
