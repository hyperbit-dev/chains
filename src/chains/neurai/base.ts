import { Common } from '../../types/base';

export const common: Common = {
  name: 'Neurai',
  unit: 'XNA',
  symbol: 'xna',
  decimalPlaces: 1e8,
  // https://github.com/NeuraiProject/Neurai/blob/main/src/validation.cpp#L129
  messagePrefix: 'Neurai Signed Message:\n',
  // https://github.com/NeuraiProject/Neurai/blob/main/src/qt/transactionrecord.h#L89
  confirmations: 6,
};
