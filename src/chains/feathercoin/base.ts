import { Common } from '../../types';

export const common: Common = {
  name: 'Feathercoin',
  unit: 'FTC',
  decimalPlaces: 1e8,
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/util/validation.cpp#L20
  messagePrefix: 'Feathercoin Signed Message:\n',
};
