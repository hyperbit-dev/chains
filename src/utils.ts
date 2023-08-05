import { BitcoinJS, MainNet, TestNet, RegTest, SimNet } from './types';

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
    dustThreshold: null, // TODO
  };
}

export function toBitcore(
  network: MainNet | TestNet | RegTest | SimNet,
  name: 'mainnet' | 'testnet' | 'regtest' | 'simnet'
) {
  // reverse magic
  const buf = Buffer.allocUnsafe(4);
  buf.writeUInt32BE(network?.protocol?.magic ?? 0);
  const networkMagic = buf.readUInt32LE(0);

  return {
    ...network,
    name: name === 'testnet' ? 'testnet' : 'livenet',
    alias: name === 'testnet' ? 'testnet' : 'mainnet',
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
