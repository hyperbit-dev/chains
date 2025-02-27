import { Common } from '../../types/base';

export const common: Common = {
  name: 'DigiByte',
  // https://github.com/DigiByte-Core/digibyte/blob/284d73b007fa87a13184b1eb038209fb76590022/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/DigiByte-Core/digibyte/blob/284d73b007fa87a13184b1eb038209fb76590022/src/policy/feerate.h#L15
  unit: 'DGB',
  symbol: 'dgb',
  // https://github.com/DigiByte-Core/digibyte/blob/284d73b007fa87a13184b1eb038209fb76590022/src/util/message.cpp#L22
  messagePrefix: 'DigiByte Signed Message:\n',
  // https://github.com/DigiByte-Core/digibyte/blob/develop/src/qt/transactionrecord.h#L88
  confirmations: 6,
  website: 'https://www.digibyte.org/',
  projectUrl: 'https://github.com/DigiByte-Core/digibyte',
};
