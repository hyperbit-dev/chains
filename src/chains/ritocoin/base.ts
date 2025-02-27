import { Common } from '../../types/base';

export const common: Common = {
  name: 'Ritocoin',
  unit: 'RITO',
  symbol: 'rito',
  decimalPlaces: 1e8,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/validation.cpp#L113
  messagePrefix: 'Rito Signed Message:\n',
  algorithm: 'x21s',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/qt/transactionrecord.h#L92
  confirmations: 6,
  website: 'https://ritocoin.org/',
  projectUrl: 'https://github.com/RitoProject',
};
