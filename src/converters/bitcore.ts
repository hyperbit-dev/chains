/**
 * Convert network definitions to Bitcore format
 * Used with bitcore-lib for Bitcoin and similar networks
 *
 * @see https://github.com/bitpay/bitcore
 */

import type { MainNet, TestNet, RegTest, SimNet, BitCore } from '../types/base';

/**
 * Convert a network definition to Bitcore format
 *
 * @example
 * ```typescript
 * import { btc } from '@hyperbitjs/chains';
 * import { toBitcore } from '@hyperbitjs/chains/converters/bitcore';
 *
 * const bitcoreNetwork = toBitcore(btc.mainnet);
 * // Use with bitcore-lib
 * ```
 */
export function toBitcore(
  network: MainNet | TestNet | RegTest | SimNet,
  name?: 'mainnet' | 'testnet' | 'regtest' | 'simnet'
): BitCore {
  // Reverse magic: convert big-endian to little-endian
  const buf = Buffer.allocUnsafe(4);
  buf.writeUInt32BE(network?.protocol?.magic ?? 0);
  const networkMagic = buf.readUInt32LE(0);

  const bitcoreName =
    name === 'testnet' || network.network === 'testnet' ? 'testnet' : 'livenet';
  const alias =
    name === 'testnet' || network.network === 'testnet' ? 'testnet' : 'mainnet';

  return {
    ...network,
    name: bitcoreName,
    alias,
    pubkeyhash: network.versions.public,
    privatekey: network.versions.private,
    scripthash: network.versions.scripthash,
    xpubkey: network.versions.bip32.public,
    xprivkey: network.versions.bip32.private,
    networkMagic,
    port: network.port,
    dnsSeeds: network.seedsDns || [],
  };
}
