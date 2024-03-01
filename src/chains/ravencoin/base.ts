/* source: https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp */

import { Common } from '../../types/base';

export const common: Common = {
  name: 'Ravencoin',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/policy/feerate.cpp#L11
  unit: 'RVN',
  symbol: 'rvn',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/RavenProject/Ravencoin/blob/c8197cd15d8886dc5c6121e3ba3f39c92445fc1b/src/validation.cpp#L129
  messagePrefix: '\x16Raven Signed Message:\n',
  algorithm: 'kawpow',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/qt/transactionrecord.h#L88
  confirmations: 6,
};
