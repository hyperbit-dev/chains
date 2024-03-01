import { Common } from '../../types/base';

export const common: Common = {
  name: 'Neoxa',
  // https://github.com/NeoxaChain/Neoxa/blob/17166b9b20c324261712b3b5ca350652f76f94b3/src/policy/feerate.cpp#L10
  unit: 'NEOX',
  symbol: 'neox',
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/amount.h#L14
  decimalPlaces: 1e8,
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/validation.cpp#L119
  messagePrefix: 'Neoxa Signed Message:\n',
  algorithm: 'kawpow',
  // https://github.com/NeoxaChain/Neoxa/blob/main/src/qt/transactionrecord.h#L107
  confirmations: 6,
};
