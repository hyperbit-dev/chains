![Hypereon Chains Banner](https://github.com/HypereonLabs/chains/raw/master/media/repo-banner.png)

# Hypereon - Chains

JavaScript dictionary of blockchain specifications inspired from coinkey with additional fields and values.

Example:

```
btc: {
  main: {
    name: 'Bitcoin',
    decimalPlaces: 1e8,
    unit: 'BTC',
    messagePrefix: '...,
    messagePrefixAlts: [...],
    hashGenesisBlock: '...',
    port: 8333,
    portRpc: 8332,
    protocol: {...},
    bech32: '...',
    seedsDns: [...],
    versions: {...}`
  }
}
```

## Installation

```bash
npm install @hypereon/chains
```

## Usage

```javascript
import { chains } from '@hypereon/chains';

const { main, test } = chains.btc;
```

## Supported Chains

- [BitcoinCash](https://github.com/HypereonLabs/chains/blob/master/src/chains/bch.ts) (BCH)
- [BlackCoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/blk.ts) (BLK)
- [Bitcoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/btc.ts) (BTC)
- [Bitcoin Gold](https://github.com/HypereonLabs/chains/blob/master/src/chains/btg.ts) (BTG)
- [c0ban](https://github.com/HypereonLabs/chains/blob/master/src/chains/cbn.ts) (RYO)
- [CityCoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/city.ts) (CITY)
- [Dash](https://github.com/HypereonLabs/chains/blob/master/src/chains/dash.ts) (DASH)
- [Decred](https://github.com/HypereonLabs/chains/blob/master/src/chains/dcr.ts) (DCR)
- [DigiByte](https://github.com/HypereonLabs/chains/blob/master/src/chains/dgb.ts) (DGB)
- [Denarius](https://github.com/HypereonLabs/chains/blob/master/src/chains/dnr.ts) (DNR)
- [Dogecoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/doge.ts) (DOGE)
- [Groestlcoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/grs.ts) (GRS)
- [Litecoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/ltc.ts) (LTC)
- [Monacoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/mona.ts) (MONA)
- [NuBits](https://github.com/HypereonLabs/chains/blob/master/src/chains/nbt.ts) (NBT)
- [Namecoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/nmc.ts) (NMC)
- [Peercoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/ppc.ts) (PPC)
- [Qtum](https://github.com/HypereonLabs/chains/blob/master/src/chains/qtum.ts) (QTUM)
- [ReddCoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/rdd.ts) (RDD)
- [Ravencoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/rvn.ts) (RVN)
- [Viacoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/via.ts) (VIA)
- [Vertcoin](https://github.com/HypereonLabs/chains/blob/master/src/chains/vtc.ts) (VTC)
- [x42](https://github.com/HypereonLabs/chains/blob/master/src/chains/x42.ts) (x42)

## Contributing

If you're interested in contributing, please read the contributing docs before submitting a pull request.

## Authors

- [@mikemcshinsky](https://twitter.com/mikemcshinsky) – [Magitek](https://magitek.dev)

## License

[MIT](/LICENSE) License
