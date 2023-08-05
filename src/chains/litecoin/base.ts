import { Common } from '../../types';

export const common: Common = {
  name: 'Litecoin',
  unit: 'LTC',
  decimalPlaces: 1e8,
  /** https://github.com/litecoin-project/litecoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Litecoin Signed Message:\n',
};
