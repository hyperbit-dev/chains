import { Common } from '../../types/base';

export const common: Common = {
  name: 'Firo',
  // https://github.com/firoorg/firo/blob/0375ddef3e15b8da50a572c95b7ff50e31cfd780/src/amount.h#L17
  decimalPlaces: 1e8,
  // https://github.com/firoorg/firo/blob/0375ddef3e15b8da50a572c95b7ff50e31cfd780/src/amount.cpp#L10
  unit: 'FIRO',
  symbol: 'firo',
  // https://github.com/firoorg/firo/blob/0375ddef3e15b8da50a572c95b7ff50e31cfd780/src/validation.cpp#L139
  messagePrefix: 'Zcoin Signed Message:\n',
  messagePrefixAlts: [
    // https://github.com/firoorg/firo/blob/0375ddef3e15b8da50a572c95b7ff50e31cfd780/src/validation.cpp#L140
    'Lelantus signed Message:\n',
  ],
  // https://github.com/firoorg/firo/blob/0375ddef3e15b8da50a572c95b7ff50e31cfd780/src/qt/transactionrecord.h#L102
  confirmations: 2,
  website: 'https://firo.org/',
  projectUrl: 'https://github.com/firoorg/firo',
};
