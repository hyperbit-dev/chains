import { it, expect, describe } from 'vitest';
import {
  btc,
  chains,
  findNetworkById,
  getChainIds,
  getChainNames,
  getChainsByNetwork,
} from '../src';

describe('chains', () => {
  it('should export coins properly', () => {
    expect(typeof btc).toBe('object');
    expect(btc.mainnet.name).toBe('Bitcoin');
  });

  it('should export all coins to chains', () => {
    expect(typeof chains).toBe('object');
    expect(typeof chains.btc).toBe('object');
  });

  it('should get network by id', () => {
    const network = findNetworkById(chains.btc.mainnet.id);
    expect(network?.id).toBe(chains.btc.mainnet.id);
  });

  it('should get a list of chain names', () => {
    const names = getChainNames();
    expect(names).toContain('Bitcoin');
  });

  it('should get a list of chain ids', () => {
    const names = getChainIds('mainnet');
    expect(names).toContain('A44223B1-CEE2-4EE6-B331-36A6BF608A69');
  });

  it('should get chain networks by network type', () => {
    const networks = getChainsByNetwork('mainnet');
    expect(networks.length).toBeGreaterThan(0);
    expect(networks[0].id).toBe('A44223B1-CEE2-4EE6-B331-36A6BF608A69');
  });

  it('should get chain networks by network and symbol', () => {
    const networks = getChainsByNetwork('mainnet', 'btc');
    expect(networks.length).toBeGreaterThan(0);
    expect(networks[0].id).toBe('E406C7BC-5DFD-461F-B67C-D8027DD72B96');
    expect(networks[0].name).toBe('Bitcoin');
  });
});

describe('Network Validators', () => {
  it('should validate mainnet networks', () => {
    const { isMainNet } = require('../dist/index.cjs');
    expect(isMainNet(btc.mainnet)).toBe(true);
  });

  it('should validate testnet networks', () => {
    const { isTestNet } = require('../dist/index.cjs');
    expect(isTestNet(btc.testnet)).toBe(true);
  });

  it('should validate regtest networks', () => {
    const { isRegTest } = require('../dist/index.cjs');
    expect(isRegTest(btc.regtest)).toBe(true);
  });

  it('should identify testnet type generically', () => {
    const { isTestNetwork } = require('../dist/index.cjs');
    expect(isTestNetwork(btc.testnet)).toBe(true);
    expect(isTestNetwork(btc.regtest)).toBe(true);
  });
});

describe('Network Registry', () => {
  it('should create a registry instance', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    expect(registry).toBeDefined();
    expect(typeof registry.find).toBe('function');
  });

  it('should find network by symbol', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    const network = registry.find('btc');
    expect(network).toBeDefined();
    expect(network.symbol).toBe('btc');
  });

  it('should find all networks by symbol', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    const networks = registry.findAllBySymbol('btc');
    expect(networks.length).toBeGreaterThan(1);
  });

  it('should find all networks by type', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    const mainnets = registry.findAllByNetworkType('mainnet');
    expect(mainnets.length).toBeGreaterThan(10);
  });

  it('should search networks by criteria', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    const results = registry.search({ symbol: 'btc', network: 'mainnet' });
    expect(results.length).toBeGreaterThan(0);
  });

  it('should return network count', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    expect(registry.count()).toBeGreaterThan(50);
  });

  it('should get all symbols', () => {
    const { NetworkRegistry } = require('../dist/index.cjs');
    const registry = new NetworkRegistry();
    const symbols = registry.getSymbols();
    expect(symbols).toContain('btc');
    expect(symbols).toContain('ltc');
  });
});

describe('Format Converters', () => {
  it('should convert to BitcoinJS format', () => {
    const { toBitcoinJS } = require('../dist/index.cjs');
    const bitcoinjsNetwork = toBitcoinJS(btc.mainnet);
    expect(bitcoinjsNetwork.bip32).toBeDefined();
    expect(bitcoinjsNetwork.pubKeyHash).toBe(btc.mainnet.versions.public);
    expect(bitcoinjsNetwork.scriptHash).toBe(btc.mainnet.versions.scripthash);
    expect(bitcoinjsNetwork.wif).toBe(btc.mainnet.versions.private);
  });

  it('should convert to Bitcore format', () => {
    const { toBitcore } = require('../dist/index.cjs');
    const bitcoreNetwork = toBitcore(btc.mainnet);
    expect(bitcoreNetwork.name).toBe('livenet');
    expect(bitcoreNetwork.alias).toBe('mainnet');
    expect(bitcoreNetwork.pubkeyhash).toBe(btc.mainnet.versions.public);
  });

  it('should convert testnet to Bitcore format correctly', () => {
    const { toBitcore } = require('../dist/index.cjs');
    const bitcoreNetwork = toBitcore(btc.testnet);
    expect(bitcoreNetwork.name).toBe('testnet');
    expect(bitcoreNetwork.alias).toBe('testnet');
  });
});

describe('Network Properties', () => {
  it('should have required Bitcoin properties', () => {
    expect(btc.mainnet.name).toBe('Bitcoin');
    expect(btc.mainnet.symbol).toBe('btc');
    expect(btc.mainnet.network).toBe('mainnet');
  });

  it('should have decimal places defined', () => {
    expect(btc.mainnet.decimalPlaces).toBe(1e8);
  });

  it('should have website URLs', () => {
    expect(btc.mainnet.website).toBeDefined();
    expect(typeof btc.mainnet.website).toBe('string');
  });

  it('should have port numbers', () => {
    expect(btc.mainnet.port).toBeGreaterThan(0);
    expect(btc.mainnet.portRpc).toBeGreaterThan(0);
  });

  it('should have units defined', () => {
    expect(btc.mainnet.unit).toBe('BTC');
  });
});
