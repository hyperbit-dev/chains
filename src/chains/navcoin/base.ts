import { Common } from '../../types';

export const common: Common = {
  name: 'Navcoin',
  unit: 'NAV',
  decimalPlaces: 1e8,
  // https://github.com/navcoin/navcoin/blob/master/src/util/message.cpp#L25
  messagePrefix: 'Navcoin Signed Message:\n',
};
