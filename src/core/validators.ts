/**
 * Type guards and validators for network configurations
 */

import type {
  Network,
  MainNet,
  TestNet,
  RegTest,
  SimNet,
  MainNetBasic,
} from '../types/base';

/**
 * Check if a network is a MainNet
 */
export function isMainNet(network: Network): network is MainNet {
  return network.network === 'mainnet' && 'hashGenesisBlock' in network;
}

/**
 * Check if a network is a MainNetBasic (minimal configuration)
 */
export function isMainNetBasic(network: Network): network is MainNetBasic {
  return network.network === 'mainnet' && !('hashGenesisBlock' in network);
}

/**
 * Check if a network is any type of mainnet
 */
export function isAnyMainNet(
  network: Network
): network is MainNet | MainNetBasic {
  return network.network === 'mainnet';
}

/**
 * Check if a network is a TestNet
 */
export function isTestNet(network: Network): network is TestNet {
  return network.network === 'testnet';
}

/**
 * Check if a network is a RegTest
 */
export function isRegTest(network: Network): network is RegTest {
  return network.network === 'regtest';
}

/**
 * Check if a network is a SimNet
 */
export function isSimNet(network: Network): network is SimNet {
  return network.network === 'simnet';
}

/**
 * Check if a network is a test network (testnet, regtest, or simnet)
 */
export function isTestNetwork(
  network: Network
): network is TestNet | RegTest | SimNet {
  return (
    network.network === 'testnet' ||
    network.network === 'regtest' ||
    network.network === 'simnet'
  );
}

/**
 * Validate that a network has required properties
 */
export function validateNetwork(network: unknown): network is Network {
  if (!network || typeof network !== 'object') return false;

  const n = network as Record<string, unknown>;
  return (
    typeof n.name === 'string' &&
    typeof n.symbol === 'string' &&
    typeof n.network === 'string' &&
    typeof n.website === 'string' &&
    typeof n.projectUrl === 'string' &&
    typeof n.decimalPlaces === 'number' &&
    typeof n.unit === 'string' &&
    ['mainnet', 'testnet', 'regtest', 'simnet'].includes(n.network)
  );
}

/**
 * Validate a networks collection
 */
export function validateNetworks(
  networks: unknown
): networks is Record<string, Network> {
  if (!networks || typeof networks !== 'object') return false;

  return Object.values(networks as Record<string, unknown>).every(validateNetwork);
}
