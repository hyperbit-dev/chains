import { Common } from '../../types/base';

export const common: Common = {
  name: 'Denarius',
  unit: 'DNR',
  symbol: 'd',
  decimalPlaces: 1e8,
  // https://github.com/metaspartan/denarius/blob/master/src/qt/transactionrecord.h#L75
  confirmations: 10,
};
