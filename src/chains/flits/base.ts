import { Common } from '../../types/base';

export const common: Common = {
  name: 'Flits',
  // https://github.com/decenomy/FLS/blob/0e886b3436e601798c21af0f2ee1a1fe74b54b43/src/amount.h#L21
  decimalPlaces: 8,
  // https://github.com/decenomy/FLS/blob/0e886b3436e601798c21af0f2ee1a1fe74b54b43/src/amount.cpp#L12
  unit: 'FLS',
  symbol: 'fls',
  // https://github.com/decenomy/FLS/blob/0e886b3436e601798c21af0f2ee1a1fe74b54b43/src/main.cpp#L123
  messagePrefix: 'DarkNet Signed Message:\n',
  // https://github.com/decenomy/FLS/blob/0e886b3436e601798c21af0f2ee1a1fe74b54b43/src/qt/transactionrecord.h#L86
  confirmations: 6,
  website: 'https://flitswallet.app/coin',
  projectUrl: 'https://github.com/decenomy/FLS',
};
