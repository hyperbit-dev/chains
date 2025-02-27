import { Common } from '../../types/base';

export const common: Common = {
  name: 'VerusCoin',
  // https://github.com/VerusCoin/VerusCoin/blob/d20af2b133cd1597cc570b43efd6094586d4cb8d/src/amount.h#L16
  decimalPlaces: 1e8,
  // https://github.com/VerusCoin/VerusCoin/blob/d20af2b133cd1597cc570b43efd6094586d4cb8d/src/amount.cpp#L10 
  unit: 'VRSC',
  symbol: 'vrsc',
  messagePrefix: 'VerusCoin Signed Message:\n',
  confirmations: 6,
  website: 'https://verus.io/',
  projectUrl: 'https://github.com/VerusCoin',
};
