import { Common } from '../../types/base';

export const common: Common = {
  name: 'Litecoin',
  unit: 'LTC',
  symbol: 'ltc',
  decimalPlaces: 1e8,
  /** https://github.com/litecoin-project/litecoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Litecoin Signed Message:\n',
  // https://github.com/litecoin-project/litecoin/blob/8925697f15f716da94c510c63b2fe7dac852cb0b/src/wallet/txrecord.h#L81
  confirmations: 6,
};
