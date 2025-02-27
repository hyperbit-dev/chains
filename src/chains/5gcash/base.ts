import { Common } from '../../types/base';

export const common: Common = {
  name: '5gcash',
  // https://github.com/5G-Cash/5G/blob/b9f3ae4a6f4c24e744fbbb3dea035d473ef905e8/src/amount.h#L17
  decimalPlaces: 1e8,
  // https://github.com/5G-Cash/5G/blob/b9f3ae4a6f4c24e744fbbb3dea035d473ef905e8/src/amount.cpp#L10
  unit: 'VGC',
  symbol: 'vgc',
  messagePrefix: '\u0018Bitcoin Signed Message:\n',
  // https://github.com/5G-Cash/5G/blob/main/src/qt/transactionrecord.h#L89
  confirmations: 6,
  website: 'https://fiveg.cash/',
  projectUrl: 'https://github.com/5g-cash/5g',
};
