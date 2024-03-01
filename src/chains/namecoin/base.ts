import { Common } from '../../types/base';

export const common: Common = {
  name: 'Namecoin',
  unit: 'NMC',
  symbol: 'nmc',
  decimalPlaces: 1e8,
  /** https://github.com/namecoin/namecoin-core/blob/master/src/util/message.cpp#L25 */
  messagePrefix: 'Namecoin Signed Message:\n',
  // https://github.com/namecoin/namecoin-core/blob/master/src/qt/transactionrecord.h#L88
  confirmations: 6,
};
