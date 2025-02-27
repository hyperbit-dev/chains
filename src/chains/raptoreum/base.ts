import { Common } from '../../types/base';

export const common: Common = {
  name: 'Raptoreum',
  // https://github.com/Raptor3um/raptoreum/blob/900794ea94ff11023667765173295b459d32732c/src/amount.h#L17
  decimalPlaces: 1e8,
  // https://github.com/Raptor3um/raptoreum/blob/900794ea94ff11023667765173295b459d32732c/src/policy/feerate.cpp#L10
  unit: 'RTM',
  symbol: 'rtm',
  // https://github.com/Raptor3um/raptoreum/blob/900794ea94ff11023667765173295b459d32732c/src/util/validation.cpp#L20
  messagePrefix: 'DarkCoin Signed Message:\n',
  // https://github.com/Raptor3um/raptoreum/blob/900794ea94ff11023667765173295b459d32732c/src/qt/transactionrecord.h#L109
  confirmations: 6,
  website: 'https://raptoreum.com/',
  projectUrl: 'https://github.com/Raptor3um/raptoreum,'
};
