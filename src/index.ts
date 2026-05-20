/**
 * @hyperbitjs/chains
 *
 * A comprehensive library of blockchain network definitions for 50+ networks
 * including Bitcoin, Litecoin, Dogecoin, Zcash, and many others.
 *
 * @example
 * ```typescript
 * // Direct network access
 * import { btc, ltc, doge } from '@hyperbitjs/chains';
 *
 * // Use registry for lookup
 * import { NetworkRegistry } from '@hyperbitjs/chains';
 * const registry = new NetworkRegistry();
 * const network = registry.find('btc');
 *
 * // Convert to BitcoinJS format
 * import { toBitcoinJS } from '@hyperbitjs/chains';
 * const bitcoinjsNetwork = toBitcoinJS(btc.mainnet);
 * ```
 */

import * as _chains from './chains';
import * as _tokens from './tokens';
import { Networks, Symbol } from './types/base';

// Re-export for backward compatibility
export const chains: Record<Symbol, Networks> = _chains;
export const tokens = _tokens;

// Export all chains
export * from './chains';

// Export all types
export * from './types';
export * from './core/validators';
export * from './core/constants';

// Export converters
export { toBitcoinJS, toBitcore } from './converters';

// Tokens are available via the `tokens` named export to avoid name collisions

// Export registry
export { NetworkRegistry, getRegistry } from './registry';

// Export utility functions
export {
  findNetworkById,
  getChainIds,
  getChainNames,
  getChainsByNetwork,
} from './utils';
