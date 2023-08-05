import { btc } from '../src';
import { chains } from '../src';

describe('chains', () => {
  it('should export coins properly', () => {
    expect(typeof btc).toBe('object');
    expect(btc.mainnet.name).toBe('Bitcoin');
  });

  it('should export all coins to chains', () => {
    expect(typeof chains).toBe('object');
    expect(typeof chains.btc).toBe('object');
  });
});
