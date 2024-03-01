import { Common } from '../../types/base';

export const common: Common = {
  name: 'Groestlcoin',
  decimalPlaces: 1e8,
  unit: 'GRS',
  symbol: 'grs',
  // https://github.com/Groestlcoin/groestlcoin/blob/9588fb9abd581778cfe92ffbeb14fc23c33daa50/src/util/message.cpp#L24
  messagePrefix: 'GroestlCoin Signed Message:\n',
  messagePrefixAlts: [
    '\x1CGroestlCoin Signed Message:\n',
    '\u001CGroestlCoin Signed Message:\n',
  ],
  // https://github.com/Groestlcoin/groestlcoin/blob/9588fb9abd581778cfe92ffbeb14fc23c33daa50/src/qt/transactionrecord.h#L75
  confirmations: 6,
};
