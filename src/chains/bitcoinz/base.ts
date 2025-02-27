import { Common } from '../../types/base';

export const common: Common = {
  name: 'Bitcoinz',
  // https://github.com/btcz/bitcoinz/blob/master/src/amount.h#L16
  decimalPlaces: 1e8,
  // https://github.com/btcz/bitcoinz/blob/master/src/amount.cpp#L11
  unit: 'BTCZ',
  symbol: 'btcz',
  // https://github.com/btcz/bitcoinz/blob/fbf3d85b876224edaee0e3ebbe5d225880416278/src/main.cpp#L112
  messagePrefix: 'BitcoinZ Signed Message:\n',
  // https://github.com/btcz/bitcoinz/blob/fbf3d85b876224edaee0e3ebbe5d225880416278/src/wallet/wallet.h#L74
  confirmations: 3,
  website: 'https://getbtcz.com/',
  projectUrl: 'https://github.com/btcz/bitcoinz',
};
