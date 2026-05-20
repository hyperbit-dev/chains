/**
 * Network Registry - Centralized lookup and management of blockchain networks
 *
 * Provides convenient methods to find networks by symbol, ID, or other criteria
 */

import type { Network, Networks, Symbol } from '../types/base';
import {
  validateNetwork,
  isTestNetwork,
  isAnyMainNet,
} from '../core/validators';
import * as allChains from '../chains/index';

/**
 * Options for searching networks
 */
type SearchOptions = Partial<{
  symbol: string;
  network: 'mainnet' | 'testnet' | 'regtest' | 'simnet';
  name: string;
}>;

/**
 * Centralized registry for blockchain network definitions
 *
 * @example
 * ```typescript
 * import { NetworkRegistry } from '@hyperbitjs/chains';
 *
 * const registry = new NetworkRegistry();
 *
 * // Find by symbol
 * const btc = registry.find('btc');
 *
 * // Find by ID
 * const mainnet = registry.findById('bitcoin-mainnet');
 *
 * // Get all networks
 * const all = registry.getAll();
 *
 * // Search by criteria
 * const testNets = registry.search({ network: 'testnet' });
 * ```
 */
export class NetworkRegistry {
  private networks: Map<string, Network> = new Map();
  private symbolIndex: Map<string, string[]> = new Map(); // symbol -> [IDs]

  constructor() {
    this.loadChains();
  }

  /**
   * Load all chains from the chains module
   */
  private loadChains(): void {
    // Load all exported symbols from chains module
    for (const [_key, value] of Object.entries(allChains)) {
      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        typeof (value as Record<string, unknown>).mainnet === 'object'
      ) {
        // This looks like a Networks collection
        this.registerNetworks(value as Record<string, Network>);
      }
    }
  }

  /**
   * Register a networks collection
   */
  private registerNetworks(networks: Networks): void {
    for (const [_key, network] of Object.entries(networks)) {
      if (validateNetwork(network)) {
        // Use the network's unique ID field, not the key from Object.entries
        const uniqueId = network.id || `${network.symbol}-${network.network}`;
        this.networks.set(uniqueId, network);

        // Index by symbol
        const symbol = network.symbol.toLowerCase();
        if (!this.symbolIndex.has(symbol)) {
          this.symbolIndex.set(symbol, []);
        }
        // Avoid duplicates
        if (!this.symbolIndex.get(symbol)!.includes(uniqueId)) {
          this.symbolIndex.get(symbol)!.push(uniqueId);
        }
      }
    }
  }

  /**
   * Find a network by symbol (returns mainnet by default)
   */
  find(symbol: string): Network | undefined;
  find(symbol: Symbol): Network | undefined;
  find(symbol: string | Symbol): Network | undefined {
    const symbolLower = symbol.toLowerCase();
    const ids = this.symbolIndex.get(symbolLower);

    if (!ids || ids.length === 0) {
      return undefined;
    }

    // Return mainnet if available, otherwise first
    const mainnetId = ids.find((id) => id.includes('mainnet'));
    return mainnetId ? this.networks.get(mainnetId) : this.networks.get(ids[0]);
  }

  /**
   * Find a network by its ID
   */
  findById(id: string): Network | undefined {
    return this.networks.get(id);
  }

  /**
   * Get all networks with a specific symbol
   */
  findAllBySymbol(symbol: string): Network[] {
    const symbolLower = symbol.toLowerCase();
    const ids = this.symbolIndex.get(symbolLower);

    if (!ids || ids.length === 0) {
      return [];
    }

    return ids
      .map((id) => this.networks.get(id))
      .filter((network): network is Network => network !== undefined);
  }

  /**
   * Get all networks of a specific type
   */
  findAllByNetworkType(
    type: 'mainnet' | 'testnet' | 'regtest' | 'simnet'
  ): Network[] {
    return Array.from(this.networks.values()).filter(
      (network) => network.network === type
    );
  }

  /**
   * Get all mainnet networks
   */
  findAllMainnets(): Network[] {
    return Array.from(this.networks.values()).filter(isAnyMainNet);
  }

  /**
   * Get all test networks (testnet, regtest, simnet)
   */
  findAllTestNetworks(): Network[] {
    return Array.from(this.networks.values()).filter(isTestNetwork);
  }

  /**
   * Search networks by multiple criteria
   */
  search(options: SearchOptions): Network[] {
    return Array.from(this.networks.values()).filter((network) => {
      if (
        options.symbol &&
        network.symbol.toLowerCase() !== options.symbol.toLowerCase()
      ) {
        return false;
      }
      if (options.network && network.network !== options.network) {
        return false;
      }
      if (
        options.name &&
        !network.name.toLowerCase().includes(options.name.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }

  /**
   * Get all networks
   */
  getAll(): Map<string, Network> {
    return new Map(this.networks);
  }

  /**
   * Get count of registered networks
   */
  count(): number {
    return this.networks.size;
  }

  /**
   * Get all unique symbols
   */
  getSymbols(): string[] {
    return Array.from(this.symbolIndex.keys());
  }
}

/**
 * Default registry instance
 */
let defaultRegistry: NetworkRegistry | null = null;

/**
 * Get the default registry instance (singleton)
 */
export function getRegistry(): NetworkRegistry {
  if (!defaultRegistry) {
    defaultRegistry = new NetworkRegistry();
  }
  return defaultRegistry;
}
