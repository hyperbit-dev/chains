import { Common } from '../../types/base';

export const common: Common = {
  name: 'Digital Note',
  unit: 'XDN',
  symbol: 'xdn',
  decimalPlaces: 1e8,
  messagePrefix: '\x16Digital Note Signed Message:\n',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/qt/transactionrecord.h#L86
  confirmations: 10,
};
