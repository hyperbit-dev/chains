import { Common } from '../../types/base';

export const common: Common = {
  name: 'Feathercoin',
  unit: 'FTC',
  symbol: 'ftc',
  decimalPlaces: 1e8,
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/util/validation.cpp#L20
  messagePrefix: 'Feathercoin Signed Message:\n',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/qt/transactionrecord.h#L88
  confirmations: 6
};
