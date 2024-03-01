/* source: https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp */
import { Common } from '../../types/base';

export const common: Common = {
  name: 'Bitcoin Cash',
  decimalPlaces: 1e8,
  unit: 'BCH',
  symbol: 'bch',
  messagePrefix: 'eCash Signed Message:\n',
  // https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/qt/transactionrecord.h#L100
  algorithm: 'zhash',
  confirmations: 6
};
