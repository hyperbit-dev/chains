import { Common } from '../../types/base';

export const common: Common = {
  name: 'LitecoinZ',
  // https://github.com/litecoinz-core/litecoinz/blob/9d375679009f60e7e443fd50b305f35f9fd3c14c/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/litecoinz-core/litecoinz/blob/9d375679009f60e7e443fd50b305f35f9fd3c14c/src/policy/feerate.cpp#L11
  unit: 'LTZ',
  symbol: 'ltz',
  // https://github.com/litecoinz-core/litecoinz/blob/9d375679009f60e7e443fd50b305f35f9fd3c14c/src/util/validation.cpp#L21
  messagePrefix: 'LitecoinZ Signed Message:\n',
  // https://github.com/litecoinz-core/litecoinz/blob/9d375679009f60e7e443fd50b305f35f9fd3c14c/src/qt/transactionrecord.h#L88
  confirmations: 6,
  website: 'https://litecoinz.org/',
  projectUrl: 'https://github.com/litecoinz-core/litecoinz',
};
