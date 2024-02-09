import { Common } from '../../types/base';

export const common: Common = {
  name: 'Zcash',
  unit: 'ZEC',
  symbol: 'zec',
  decimalPlaces: 1e8,
  /** https://github.com/zcash/zcash/blob/4792b1730a8d3c21c9a19fed809fdf8eb0ba35ca/src/main.cpp#L129 */
  messagePrefix: 'Zcash Signed Message:\n',
};
