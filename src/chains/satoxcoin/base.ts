import { Common } from '../../types/base';

export const common: Common = {
  name: 'Satoxcoin',
  // https://github.com/satoverse/satoxcoin/blob/392e820ad27c3f8fcf3625ed1744015a4e213e17/src/amount.h#L16
  decimalPlaces: 1e8,
  // https://github.com/satoverse/satoxcoin/blob/392e820ad27c3f8fcf3625ed1744015a4e213e17/src/policy/feerate.cpp#L12
  unit: 'SATOX',
  symbol: 'satox',
  // https://github.com/satoverse/satoxcoin/blob/392e820ad27c3f8fcf3625ed1744015a4e213e17/src/validation.cpp#L129
  messagePrefix: 'Satoxcoin Signed Message:\n',
  // https://github.com/satoverse/satoxcoin/blob/392e820ad27c3f8fcf3625ed1744015a4e213e17/src/qt/myrestrictedassetrecord.h#L32
  confirmations: 6,
  website: 'https://www.satoverse.io/',
  projectUrl: 'https://github.com/satoverse/satoxcoin',
};
