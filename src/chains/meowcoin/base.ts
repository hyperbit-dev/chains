import { Common } from '../../types/base';

export const common: Common = {
  name: 'Meowcoin',
  unit: 'MEWC',
  symbol: 'mewc',
  decimalPlaces: 1e8,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/validation.cpp
  messagePrefix: 'Meowcoin Signed Message:\n',
  // TODO: update to meowpow
  algorithm: 'kawpow',
  // https://github.com/Meowcoin-Foundation/Meowcoin/blob/master/src/qt/transactionrecord.h#L88
  confirmations: 6,
};
