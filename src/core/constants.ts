/**
 * Shared constants used across network definitions
 */

/**
 * Standard message prefixes for different networks
 */
export const MESSAGE_PREFIXES = {
  BITCOIN: '\x19Bitcoin Signed Message:\n',
  LITECOIN: '\x19Litecoin Signed Message:\n',
  DOGECOIN: '\x19Dogecoin Signed Message:\n',
  ZCASH: '\x19Zcash Signed Message:\n',
} as const;

/**
 * Common protocol magic numbers
 * Magic number is used in P2P protocol messages
 */
export const PROTOCOL_MAGIC = {
  BITCOIN_MAINNET: 0xd9b4bef9,
  BITCOIN_TESTNET: 0x0709110b,
  BITCOIN_REGTEST: 0xfabfb5da,
  LITECOIN_MAINNET: 0xdbb6c0fb,
  DOGECOIN_MAINNET: 0xc0c0c0c0,
} as const;

/**
 * Standard confirmation requirements for different network types
 */
export const DEFAULT_CONFIRMATIONS = {
  MAINNET: 6,
  TESTNET: 1,
  REGTEST: 1,
  SIMNET: 1,
} as const;

/**
 * Common derivation paths for BIP44 hierarchical deterministic wallets
 * @see https://github.com/trezor/slip-0044
 */
export const BIP44_COIN_TYPES = {
  BITCOIN: 0,
  BITCOIN_TESTNET: 1,
  LITECOIN: 2,
  DOGECOIN: 3,
  ZCASH: 133,
  DASH: 5,
  DIGIBYTE: 20,
} as const;

/**
 * Standard network types
 */
export const NETWORK_TYPES = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet',
  REGTEST: 'regtest',
  SIMNET: 'simnet',
} as const;
