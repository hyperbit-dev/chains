import { Common } from '../../types/base';

export const common: Common = {
  name: 'Frencoin',
  // https://github.com/Apushii/frencoin/blob/5bf5a9a75bf2e9854c109ec1ec588c2c4edfc4b3/src/amount.h#L16
  decimalPlaces: 1e8,
  unit: 'FREN',
  symbol: 'fren',
  // https://github.com/Apushii/frencoin/blob/5bf5a9a75bf2e9854c109ec1ec588c2c4edfc4b3/src/validation.cpp#L130
  messagePrefix: 'Fren Signed Message:\n',
  // https://github.com/Apushii/frencoin/blob/5bf5a9a75bf2e9854c109ec1ec588c2c4edfc4b3/src/qt/transactionrecord.h#L89
  confirmations: 6,
  website: 'https://frencoin.org/',
  projectUrl: 'https://github.com/Apushii/Frencoin,'
};
