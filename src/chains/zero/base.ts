import { Common } from '../../types/base';

export const common: Common = {
  name: 'Zero',
  // https://github.com/zerocurrencycoin/Zero/blob/0d3ca42d9f1a8b0c443b31ae58cc33ed4b3dab26/src/amount.h#L16
  decimalPlaces: 1e8,
  // https://github.com/zerocurrencycoin/Zero/blob/0d3ca42d9f1a8b0c443b31ae58cc33ed4b3dab26/src/amount.cpp#L10
  unit: 'ZER',
  symbol: 'zer',
  // https://github.com/zerocurrencycoin/Zero/blob/0d3ca42d9f1a8b0c443b31ae58cc33ed4b3dab26/src/main.cpp#L122
  messagePrefix: 'Zero Signed Message:\n',
  confirmations: 6,
  website: 'https://zero.directory/',
  projectUrl: 'https://github.com/zerocurrencycoin'
};
