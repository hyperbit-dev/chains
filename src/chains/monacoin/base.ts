import { Common } from '../../types/base';

export const common: Common = {
  name: 'Monacoin',
  unit: 'MONA',
  decimalPlaces: 1e8,
  /** https://github.com/monacoinproject/monacoin/blob/master-0.20.3/src/util/message.cpp#L22 */
  messagePrefix: 'Monacoin Signed Message:\n',
};
