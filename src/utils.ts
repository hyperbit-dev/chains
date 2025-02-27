import { chains } from '.';
import {
  BitcoinJS,
  MainNet,
  TestNet,
  RegTest,
  SimNet,
  Network,
  Symbol,
} from './types/base';

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
  name?: 'mainnet' | 'testnet' | 'regtest' | 'simnet'
) {
  // reverse magic
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

export function findNetworkById(id: string): Network | undefined {
  for (let i = 0; i < Object.values(chains).length; i++) {
    const networks = Object.values(chains)[i];
    for (let f = 0; f < Object.values(networks).length; f++) {
      if (Object.values(networks)[f].id.toLowerCase() === id.toLowerCase()) {
        return Object.values(networks)[f];
      }
    }
  }
  return undefined;
}

export function getChainIds(symbol: Symbol): string[] {
  return Object.keys(chains).reduce<string[]>((acc: string[], key: string) => {
    const n = chains[key as Symbol][symbol];
    if (n) {
      return [...acc, n.id];
    }
    return acc;
  }, []);
}

export function getChainNames(): string[] {
  return Object.keys(chains).reduce<string[]>((acc: string[], key: string) => {
    const mainnet = chains[key as Symbol].mainnet;
    return [...acc, mainnet.name];
  }, []);
}

/**
 * Return Networks by the blockchain network. If symbol is provided, return only the network with the given symbol.
 * @param network e.g. mainnet
 * @param symbol e.g. btc
 * @returns Network[]
 */
export function getChainsByNetwork(
  network: string,
  symbol?: Symbol
): Network[] {
  return Object.keys(chains).reduce<Network[]>(
    (acc: Network[], key: string) => {
      const n = chains[key as Symbol][network];
      if (n) {
        if (symbol) {
          if (n.symbol === symbol) {
            return [...acc, n];
          }
          return acc;
        }
        return [...acc, n];
      }
      return acc;
    },
    []
  );
}
