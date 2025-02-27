import { Common } from '../../types/base';

export const common: Common = {
  name: 'Ravencoin Classic',
  decimalPlaces: 1e8,
  // https://github.com/ravencoinclassicio/RavencoinClassic/blob/a550e1fb3bcae539934c9bb35d32b62b972adbe7/src/policy/feerate.cpp#L11
  unit: 'RVC',
  symbol: 'rvc',
  // https://github.com/ravencoinclassicio/RavencoinClassic/blob/a550e1fb3bcae539934c9bb35d32b62b972adbe7/src/validation.cpp#L111
  messagePrefix: 'Raven Signed Message:\n',
  // https://github.com/ravencoinclassicio/RavencoinClassic/blob/a550e1fb3bcae539934c9bb35d32b62b972adbe7/src/qt/transactionrecord.h#L91
  confirmations: 6,
  website: 'https://ravencoinclassic.io/',
  projectUrl: 'https://github.com/ravencoinclassicio',
};
