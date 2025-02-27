import { Common } from '../../types/base';

export const common: Common = {
  name: 'Denarius',
  unit: 'DNR',
  symbol: 'dnr',
  decimalPlaces: 1e8,
  // https://github.com/metaspartan/denarius/blob/fac80b73e59d59a978c1ce40bd86952e95b16c11/src/main.cpp#L93
  messagePrefix: 'Denarius Signed Message:\n',
  // https://github.com/metaspartan/denarius/blob/master/src/qt/transactionrecord.h#L75
  confirmations: 10,
  website: 'https://denarius.io/',
  projectUrl: 'https://github.com/metaspartan/denarius',
};
