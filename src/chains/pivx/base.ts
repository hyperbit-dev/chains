import { Common } from '../../types/base';

export const common: Common = {
  name: 'PIVX',
  // https://github.com/PIVX-Project/PIVX/blob/1710df7786441a62f8155a734f46472441dccc9e/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/PIVX-Project/PIVX/blob/1710df7786441a62f8155a734f46472441dccc9e/src/policy/feerate.h#L14
  unit: 'PIVX',
  symbol: 'pivx',
  // https://github.com/PIVX-Project/PIVX/blob/1710df7786441a62f8155a734f46472441dccc9e/src/util/validation.cpp#L27
  messagePrefix: 'DarkNet Signed Message:\n',
  // https://github.com/PIVX-Project/PIVX/blob/1710df7786441a62f8155a734f46472441dccc9e/src/qt/transactionrecord.h#L109
  confirmations: 6,
  website: 'https://pivx.org/',
  projectUrl: 'https://github.com/PIVX-Project/PIVX/',
};
