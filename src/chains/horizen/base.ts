import { Common } from '../../types/base';

export const common: Common = {
  name: 'Horizon',
  // https://github.com/HorizenOfficial/zend_oo/blob/ec0cfe6a567b74fec8a147a5a1228bdb48056da0/src/amount.h#L16
  decimalPlaces: 1e8,
  // https://github.com/HorizenOfficial/zend_oo/blob/ec0cfe6a567b74fec8a147a5a1228bdb48056da0/src/amount.cpp#L10
  unit: 'ZEN',
  symbol: 'zen',
  // https://github.com/HorizenOfficial/zend_oo/blob/ec0cfe6a567b74fec8a147a5a1228bdb48056da0/src/main.cpp#L106
  messagePrefix: 'Zcash Signed Message:\n',
  confirmations: 6,
  website: 'https://www.horizen.io/',
  projectUrl: 'https://github.com/HorizenOfficial',
};
