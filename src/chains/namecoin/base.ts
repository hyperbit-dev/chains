import { Common } from '../../types/base';

export const common: Common = {
  name: 'Namecoin',
  unit: 'NMC',
  decimalPlaces: 1e8,
  /** https://github.com/namecoin/namecoin-core/blob/master/src/util/message.cpp#L25 */
  messagePrefix: 'Namecoin Signed Message:\n',
};
