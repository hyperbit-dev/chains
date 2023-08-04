import { BitcoinJS, Network, TestNetwork } from './types';

export function toBitcoinJS(chain: Network | TestNetwork): BitcoinJS {
  return {
    ...chain,
    messagePrefix:
      chain.messagePrefix ||
      '\x19' + (chain?.messageName ?? chain.name) + ' Signed Message:\n',
    bech32: chain.bech32,
    bip32: {
      public: chain.versions.bip32.public,
      private: chain.versions.bip32.private,
    },
    pubKeyHash: chain.versions.public,
    scriptHash: chain.versions.scripthash,
    wif: chain.versions.private,
    dustThreshold: null, // TODO
  };
}

export function toBitcore(
  chain: Network | TestNetwork,
  network: 'main' | 'test'
) {
  // reverse magic
  const buf = Buffer.allocUnsafe(4);
  buf.writeUInt32BE(chain?.protocol?.magic ?? 0);
  const networkMagic = buf.readUInt32LE(0);

  return {
    ...chain,
    name: network === 'test' ? 'testnet' : 'livenet',
    alias: network === 'test' ? 'testnet' : 'mainnet',
    pubkeyhash: chain.versions.public,
    privatekey: chain.versions.private,
    scripthash: chain.versions.scripthash,
    xpubkey: chain.versions.bip32.public,
    xprivkey: chain.versions.bip32.private,
    networkMagic,
    port: chain.port,
    dnsSeeds: chain.seedsDns || [],
  };
}
