import { Common } from '../../types/base';

export const common: Common = {
  name: 'Navcoin',
  unit: 'NAV',
  symbol: 'nav',
  decimalPlaces: 1e8,
  // https://github.com/navcoin/navcoin/blob/master/src/util/message.cpp#L25
  messagePrefix: 'Navcoin Signed Message:\n',
};
