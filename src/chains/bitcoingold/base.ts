import { Common } from '../../types';

export const common: Common = {
  name: 'Bitcoin Gold',
  unit: 'BTG',
  decimalPlaces: 1e8,
  /** https://github.com/BTCGPU/BTCGPU/blob/71894be9e4eb573643d85a33d28247b95db1d998/src/validation.cpp#L251 */
  messagePrefix: 'Bitcoin Gold Signed Message:\n',
};
