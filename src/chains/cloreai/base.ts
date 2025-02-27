import { Common } from '../../types/base';

export const common: Common = {
  name: 'CloreAI',
  // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/amount.h?ref_type=heads#L17
  decimalPlaces: 1e8,
  unit: 'CLORE',
  symbol: 'clore',
  // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/validation.cpp#L137
  messagePrefix: 'Clore Signed Message:\n',
  // https://gitlab.com/cloreai-public/blockchain/-/blob/main/src/qt/transactionrecord.h?ref_type=heads#L90
  confirmations: 6,
  website: 'https://www.clore.ai/',
  projectUrl: 'https://gitlab.com/cloreai-public',
};
