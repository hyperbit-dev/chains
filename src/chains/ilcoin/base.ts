import { Common } from '../../types/base';

export const common: Common = {
  name: 'ILCoin',
  decimalPlaces: 1e8,
  // https://github.com/ILCOINDevelopmentTeam/ilcoin-master/blob/f6ceb8adcbd5db8d5cb8beeaf937ceb2d76bb3af/src/amount.cpp#L9
  unit: 'ILC',
  symbol: 'ilc',
  // https://github.com/ILCOINDevelopmentTeam/ilcoin-master/blob/master/src/validation.cpp#L93
  messagePrefix: 'Ilcoin Signed Message:\n',
  // https://github.com/ILCOINDevelopmentTeam/ilcoin-master/blob/f6ceb8adcbd5db8d5cb8beeaf937ceb2d76bb3af/src/qt/transactionrecord.h#L83
  confirmations: 6,
  website: 'https://ilcoincrypto.com/',
  projectUrl: 'https://github.com/ILCOINDevelopmentTeam/ilcoin-master,',
};
