import { Common } from '../../types/base';

export const common: Common = {
  name: 'MonaCoin',
  unit: 'MONA',
  symbol: 'mona',
  decimalPlaces: 1e8,
  /** https://github.com/monacoinproject/monacoin/blob/master-0.20.3/src/util/message.cpp#L22 */
  messagePrefix: 'Monacoin Signed Message:\n',
  // https://github.com/monacoinproject/monacoin/blob/master-0.20.3/src/qt/transactionrecord.h#L88
  confirmations: 6,
};
