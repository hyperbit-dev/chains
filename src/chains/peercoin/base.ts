import { Common } from '../../types';

export const common: Common = {
  name: 'Peercoin',
  decimalPlaces: 1e6, // util.h:40
  unit: 'PPC',
  /** https://github.com/peercoin/peercoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Peercoin Signed Message:\n',
  messagePrefixAlts: ['\x18Peercoin Signed Message:\n'],
};
