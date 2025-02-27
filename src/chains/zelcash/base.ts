import { Common } from '../../types/base';

export const common: Common = {
  name: 'Zelcash',
  displayName: 'Flux',
  // https://github.com/RunOnFlux/fluxd/blob/1b599ba234f2293b03ccc4ccf6fa3f9ba814186f/src/amount.h#L17
  decimalPlaces: 1e8,
  // https://github.com/RunOnFlux/fluxd/blob/1b599ba234f2293b03ccc4ccf6fa3f9ba814186f/src/amount.cpp#L11
  unit: 'ZEL',
  symbol: 'flux',
  // https://github.com/RunOnFlux/fluxd/blob/1b599ba234f2293b03ccc4ccf6fa3f9ba814186f/src/main.cpp#L122
  messagePrefix: 'Zelcash Signed Message:\n',
  confirmations: 6,
  website: 'https://runonflux.io/',
  projectUrl: 'https://github.com/RunOnFlux/fluxd'
};
