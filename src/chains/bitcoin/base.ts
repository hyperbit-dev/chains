import { Common } from '../../types/base';

export const common: Common = {
  name: 'Bitcoin',
  decimalPlaces: 1e8,
  unit: 'BTC',
  /** https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/networks.js#L5 */
  messagePrefix: '\u0018Bitcoin Signed Message:\n',
  messagePrefixAlts: [
    /** https://github.com/bitcoin/bitcoin/blob/01e1627e25bc5477c40f51da03c3c31b609a85c9/src/util/message.cpp#L25 */
    'Bitcoin Signed Message:\n',
    '\x18Bitcoin Signed Message:\n',
    '\x19Bitcoin Signed Message:\n',
  ],
};
