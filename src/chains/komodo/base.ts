import { Common } from '../../types/base';

export const common: Common = {
  name: 'Komodo',
  // https://github.com/KomodoPlatform/komodo/blob/master/src/amount.h#L32
  decimalPlaces: 1e8,
  // https://github.com/KomodoPlatform/komodo/blob/master/src/amount.cpp#L25
  unit: 'KMD',
  symbol: 'kmd',
  messagePrefix: 'Komodo Signed Message:\n',
  confirmations: 6,
  website: 'https://komodoplatform.com/',
  projectUrl: 'https://github.com/KomodoPlatform/komodo',
};
