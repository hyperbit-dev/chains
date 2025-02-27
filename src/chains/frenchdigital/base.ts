import { Common } from '../../types/base';

export const common: Common = {
  name: 'Federal Reserve Coin',
  // https://github.com/fdreserve/fdr-blockchain/blob/2db358b0c3fa9196e7c1b63d6645e55e6a6acb7b/src/amount.h#L16
  decimalPlaces: 8,
  unit: 'FDR',
  symbol: 'fdr',
  // https://github.com/fdreserve/fdr-blockchain/blob/2db358b0c3fa9196e7c1b63d6645e55e6a6acb7b/src/main.cpp#L103
  messagePrefix: 'DarkNet Signed Message:\n',
  // https://github.com/fdreserve/fdr-blockchain/blob/2db358b0c3fa9196e7c1b63d6645e55e6a6acb7b/src/qt/transactionrecord.h#L93
  confirmations: 6,
  website: 'https://www.fdreserve.com/',
  projectUrl: 'https://github.com/fdreserve/fdr-blockchain/',
};
