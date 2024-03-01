import { Common } from '../../types/base';

export const common: Common = {
  name: 'c0ban',
  unit: 'RYO',
  symbol: 'coban',
  decimalPlaces: 1e8,
  /** https://github.com/c0ban/c0ban/blob/master/src/util/message.cpp#L23 */
  messagePrefix: 'c0ban Signed Message:\n',
  // https://github.com/c0ban/c0ban/blob/master/src/qt/transactionrecord.h#L89
  confirmations: 16,
};
