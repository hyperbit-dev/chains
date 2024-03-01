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
    expect(names).toContain('E406C7BC-5DFD-461F-B67C-D8027DD72B96');
  });

  it('should get chain networks by network type', () => {
    const networks = getChainsByNetwork('mainnet');
    expect(networks.length).toBeGreaterThan(0);
    expect(networks[0].id).toBe('E406C7BC-5DFD-461F-B67C-D8027DD72B96');
  });
});
