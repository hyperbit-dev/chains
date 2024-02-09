import { Common } from '../../types/base';

export const common: Common = {
  name: 'Litecoin',
  unit: 'LTC',
  symbol: 'ltc',
  decimalPlaces: 1e8,
  /** https://github.com/litecoin-project/litecoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Litecoin Signed Message:\n',
};
