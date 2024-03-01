import { Common } from '../../types/base';

export const common: Common = {
  name: 'Evrmore',
  unit: 'EVR',
  symbol: 'evr',
  decimalPlaces: 1e8,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/validation.cpp#L131
  messagePrefix: 'Evrmore Signed Message:\n',
  // https://github.com/EvrmoreOrg/Evrmore/blob/0bbfe1813cda36190458dd69b1a0418357d30598/src/qt/transactionrecord.h#L88
  confirmations: 6
};
