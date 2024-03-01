import { Common } from '../../types/base';

export const common: Common = {
  name: 'Pigeoncoin',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/fbb9aa8fd750085e9d1aded6feb8eb23002c2acf/src/policy/feerate.cpp#L10
  unit: 'PGN',
  symbol: 'pgn',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/amount.h#L14
  decimalPlaces: 1e8,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/validation.cpp#L119
  messagePrefix: 'DarkCoin Signed Message:\n',
  messageName: 'DarkCoin',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/qt/transactionrecord.h#L103
  confirmations: 6,
};
