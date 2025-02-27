import { Common } from '../../types/base';

export const common: Common = {
  name: 'Bitcoin Candy',
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/amount.h#L116
  decimalPlaces: 1e5,
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/master/src/amount.cpp#L10
  unit: 'CDY',
  symbol: 'cdy',
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/aa72d2440ed5b7f07bef017aa6f8465d06162ff2/src/validation.cpp#L98C38-L98C69
  messagePrefix: 'Bitcoin Candy Signed Message:\n',
  // https://github.com/bitcoincandyofficial/bitcoincandy/blob/aa72d2440ed5b7f07bef017aa6f8465d06162ff2/src/qt/transactionrecord.h#L99
  confirmations: 6,
  website: 'https://cdy.one/',
  projectUrl: 'https://github.com/bitcoincandyofficial/bitcoincandy'
};
