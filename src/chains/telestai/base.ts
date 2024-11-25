import { Common } from '../../types/base';

export const common: Common = {
  name: 'Telestai',
  // https://github.com/Telestai-Project/telestai/blob/master/src/policy/feerate.cpp#L11
  unit: 'TLS',
  symbol: 'tls',
  // https://github.com/Telestai-Project/telestai/blob/master/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/Telestai-Project/telestai/blob/master/src/validation.cpp#L129
  messagePrefix: 'Telestai Signed Message:\n',
  algorithm: 'meraki',
  // https://github.com/Telestai-Project/telestai/blob/ddd6a08591619d1e0c8536fc91e0ff227925450d/src/qt/transactionrecord.h#L88
  confirmations: 6,
};
