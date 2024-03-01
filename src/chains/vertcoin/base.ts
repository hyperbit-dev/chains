import { Common } from '../../types/base';

export const common: Common = {
  name: 'Vertcoin',
  unit: 'VTC',
  symbol: 'vtc',
  decimalPlaces: 1e8,
  /** https://github.com/vertcoin-project/vertcoin-core/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Bitcoin Signed Message:\n',
  messageName: 'Bitcoin Signed Message:\n',
  // https://github.com/vertcoin-project/vertcoin-core/blob/master/src/qt/transactionrecord.h#L85
  confirmations: 6,
};
