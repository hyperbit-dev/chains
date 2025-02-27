import { Common } from '../../types/base';

export const common: Common = {
  name: 'DogeCash',
  // https://github.com/dogecash/dogecash/blob/main/src/amount.h#L16
  decimalPlaces: 1e8,
  unit: 'DOGEC',
  symbol: 'dogec',
  // https://github.com/dogecash/dogecash/blob/22ba7396bcf5ab188c86c18175dfcb702706be08/src/util/validation.cpp#L27
  messagePrefix: 'DarkNet Signed Message:\n',
  // https://github.com/dogecash/dogecash/blob/main/src/qt/transactionrecord.h#L109
  confirmations: 6,
  website: 'https://dogecash.net/',
  projectUrl: 'https://github.com/dogecash',
};
