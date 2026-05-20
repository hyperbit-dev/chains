# Chains Architecture Guide

## Overview

The `@hyperbitjs/chains` library provides standardized blockchain network definitions for 50+ networks including Bitcoin, Litecoin, Dogecoin, Zcash, and many others.

## Project Structure

```
src/
├── core/              # Core types and constants
│   ├── types.ts      # Primary type definitions
│   ├── constants.ts  # Network constants
│   └── validators.ts # Type guards and validators
├── networks/         # Network definitions organized by blockchain
│   ├── bitcoin/      # Bitcoin, testnet, regtest, simnet
│   ├── litecoin/     # Litecoin configurations
│   ├── dogecoin/     # Dogecoin configurations
│   └── ...           # 50+ additional networks
├── tokens/           # Token definitions for specific networks
│   ├── ravencoin/    # Ravencoin tokens
│   ├── neoxa/        # Neoxa tokens
│   └── ...
├── converters/       # Format conversion utilities
│   ├── bitcoinjs.ts  # Convert to BitcoinJS format
│   └── bitcore.ts    # Convert to Bitcore format
├── registry/         # Network lookup and management
│   └── index.ts      # NetworkRegistry for finding networks by symbol, id, etc.
└── index.ts          # Main entry point and exports
```

## Core Modules

### **core/types.ts**

Defines all TypeScript interfaces for network configurations:

- `Common` - Shared network properties (name, symbol, decimals, etc.)
- `MainNet` - Mainnet-specific configuration
- `TestNet` - Testnet-specific configuration
- `RegTest` - Regression test configuration
- `SimNet` - Simulation network configuration
- `Network` - Union type of all network types
- `Networks` - Record of networks by identifier

### **core/constants.ts**

Shared constants used across network definitions:

- Default message prefixes
- Common protocol magic numbers
- Standard port ranges

### **core/validators.ts**

Type guards and validation utilities:

- `isMainNet(network): network is MainNet`
- `isTestNet(network): network is TestNet`
- `validateNetwork(network): boolean`

### **networks/**

Each subdirectory contains one blockchain's configurations:

```typescript
// Example: bitcoin/index.ts
export const btc: Networks = {
  mainnet: {
    /* configuration */
  },
  testnet: {
    /* configuration */
  },
  regtest: {
    /* configuration */
  },
  simnet: {
    /* configuration */
  },
};
```

### **converters/bitcoinjs.ts**

Convert network definitions to BitcoinJS format:

```typescript
const bitcoinjsNetwork = toBitcoinJS(btc.mainnet);
// Result has bitcoinjs-lib compatible properties:
// - bip32, pubKeyHash, scriptHash, wif, dustThreshold
```

### **converters/bitcore.ts**

Convert network definitions to Bitcore format:

```typescript
const bitcoreNetwork = toBitcore(btc.mainnet);
// Result has bitcore-lib compatible properties:
// - name, alias, pubkeyhash, privatekey, networkMagic
```

### **registry/index.ts**

Centralized network lookup system:

```typescript
const registry = new NetworkRegistry();
registry.find('btc'); // Get Bitcoin by symbol
registry.findById('bitcoin-mainnet'); // Get by ID
registry.getAll(); // Get all networks
```

## Usage Examples

### Basic Usage

```typescript
import { btc, ltc, doge } from '@hyperbitjs/chains';

// Access mainnet
const bitcoinMainnet = btc.mainnet;
console.log(bitcoinMainnet.name); // "Bitcoin"
console.log(bitcoinMainnet.symbol); // "BTC"

// Access testnet
const bitcoinTestnet = btc.testnet;
```

### Format Conversion

```typescript
import { toBitcoinJS, toBitcore } from '@hyperbitjs/chains';

const network = doge.mainnet;

// Convert to BitcoinJS format
const bitcoinjsNetwork = toBitcoinJS(network);

// Convert to Bitcore format
const bitcoreNetwork = toBitcore(network);
```

### Using the Registry

```typescript
import { NetworkRegistry } from '@hyperbitjs/chains';

const registry = new NetworkRegistry();

// Find by symbol
const btc = registry.find('btc');

// Find by network ID
const regtest = registry.findById('bitcoin-regtest');

// Get all mainnet networks
const mainnets = registry.getAllByNetworkType('mainnet');

// Search by properties
const networks = registry.search({ symbol: 'BTC', network: 'mainnet' });
```

## Adding a New Network

To add a new blockchain network:

1. **Create network definition**:

   ```typescript
   // src/networks/mynewcoin/index.ts
   import { Networks } from '../../core/types';

   export const mnc: Networks = {
     mainnet: {
       id: 'mynewcoin-mainnet',
       network: 'mainnet',
       name: 'My New Coin',
       symbol: 'MNC',
       // ... rest of configuration
     },
     testnet: {
       /* ... */
     },
   };
   ```

2. **Export from chains index**:

   ```typescript
   // src/chains/index.ts
   export * from './mynewcoin';
   ```

3. **Add tests**:
   ```typescript
   // test/networks/mynewcoin.test.ts
   describe('MyNewCoin', () => {
     it('should have valid mainnet configuration', () => {
       expect(mnc.mainnet).toBeDefined();
       // ... assertions
     });
   });
   ```

## Best Practices

### For Library Users

1. **Use TypeScript** - Leverage type safety for network configurations
2. **Validate before use** - Use validators from `core/validators`
3. **Use appropriate format conversions** - Convert to BitcoinJS or Bitcore as needed
4. **Check network type** - Verify mainnet/testnet before operations

### For Contributors

1. **Follow the established structure** - Keep networks organized in individual directories
2. **Include complete configuration** - Don't leave optional fields unset
3. **Document your changes** - Update this guide when adding new networks
4. **Write tests** - Add tests for each new network
5. **Use consistent naming** - Follow existing naming conventions
6. **Keep types aligned** - Ensure network objects match the defined types

## Type System

### Network Hierarchy

```
Network (Union)
├── MainNet
├── MainNetBasic
├── TestNet
├── RegTest
└── SimNet
```

All network types extend `Common` which provides:

- `name` - Full network name
- `symbol` - 3-4 character symbol (BTC, LTC, DOGE)
- `unit` - Smallest unit name (satoshi, lovelace, etc.)
- `decimalPlaces` - Decimal precision
- `website` - Official website URL
- `versions` - BIP32, BIP44, WIF prefixes

### Network IDs

Network IDs follow the pattern: `{symbol}-{network}` (e.g., `bitcoin-mainnet`, `litecoin-testnet`)

## Testing

All networks and converters should have comprehensive tests:

```typescript
describe('Chains', () => {
  describe('Bitcoin', () => {
    it('should have valid mainnet configuration', () => {
      /* */
    });
    it('should convert to BitcoinJS format', () => {
      /* */
    });
    it('should convert to Bitcore format', () => {
      /* */
    });
  });
});
```

## Roadmap

- [ ] Network registry/lookup system
- [ ] Validators for network configurations
- [ ] Support for EVM chains (Ethereum, Polygon, etc.)
- [ ] Dynamic network registration
- [ ] Network metadata caching
