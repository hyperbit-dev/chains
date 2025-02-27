import { Common } from '../../types/base';

export const common: Common = {
  name: 'Gemlink',
  // https://github.com/gemlink/gemlink/blob/f3c24b5c7ef9166f6670177029fcf43f6f45e3b0/src/amount.h#L16
  decimalPlaces: 1e8,
  // https://github.com/gemlink/gemlink/blob/f3c24b5c7ef9166f6670177029fcf43f6f45e3b0/src/amount.cpp#L10
  unit: 'GLINK',
  symbol: 'glink',
  // https://github.com/gemlink/gemlink/blob/f3c24b5c7ef9166f6670177029fcf43f6f45e3b0/src/main.cpp#L131
  messagePrefix: 'Snowgem Signed Message:\n',
  confirmations: 6,
  website: 'https://gemlink.org/',
  projectUrl: 'https://github.com/gemlink'
};
