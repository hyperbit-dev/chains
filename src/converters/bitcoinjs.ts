/**
 * Convert network definitions to BitcoinJS format
 * Used with bitcoinjs-lib for Bitcoin and similar networks
 *
 * @see https://github.com/bitcoinjs/bitcoinjs-lib
 */

import type {
  MainNet,
  TestNet,
  RegTest,
  SimNet,
  BitcoinJS,
} from '../types/base';

/**
 * Convert a network definition to BitcoinJS format
 *
 * @example
 * ```typescript
 * import { btc } from '@hyperbitjs/chains';
 * import { toBitcoinJS } from '@hyperbitjs/chains/converters/bitcoinjs';
 *
 * const bitcoinjsNetwork = toBitcoinJS(btc.mainnet);
 * // Use with bitcoinjs-lib
 * ```
 */
export function toBitcoinJS(
  network: MainNet | TestNet | RegTest | SimNet
): BitcoinJS {
  return {
    ...network,
    messagePrefix:
      network.messagePrefix ||
      '\x19' + (network?.messageName ?? network.name) + ' Signed Message:\n',
    bech32: network.bech32,
    bip32: {
      public: network.versions.bip32.public,
      private: network.versions.bip32.private,
    },
    pubKeyHash: network.versions.public,
    scriptHash: network.versions.scripthash,
    wif: network.versions.private,
    dustThreshold: null,
  };
}
