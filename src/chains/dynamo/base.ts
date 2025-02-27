import { Common } from '../../types/base';

export const common: Common = {
  name: 'Dynamo',
  // https://github.com/dynamofoundation/dynamo-core/blob/master/src/amount.h#L14
  decimalPlaces: 1e8,
  // https://github.com/dynamofoundation/dynamo-core/blob/master/src/policy/feerate.h#L14
  unit: 'DYN',
  symbol: 'dyn',
  // https://github.com/dynamofoundation/dynamo-core/blob/1cd3b7c51813388321142faf046eaef98d31a7d1/src/util/message.cpp#L22
  messagePrefix: 'Bitcoin Signed Message:\n',
  // https://github.com/dynamofoundation/dynamo-core/blob/master/src/qt/transactionrecord.h#L87
  confirmations: 6,
  website: 'https://dynamocoin.org/',
  projectUrl: 'https://github.com/dynamofoundation/dynamo-core',
};
