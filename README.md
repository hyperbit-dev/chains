![Hyperbit Chains Banner](https://github.com/hyperbit-dev/chains/raw/master/media/repo-banner.png)

# Hyperbit - Chains

JavaScript dictionary of blockchain specifications inspired from coinkey with additional fields and values.

## Installation

```bash
npm install @hyperbitjs/chains
```

## Usage

```javascript
import { chains } from '@hyperbitjs/chains';

const { main, test } = chains.btc;
```

```javascript
import { btc } from '@hyperbitjs/chains';

const { main, test } = btc;
```

Example Output:

```javascript
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

## Supported Chains

- [BitcoinCash](https://github.com/hyperbit-dev/chains/blob/master/src/chains/bch.ts) (BCH)
- [BlackCoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/blk.ts) (BLK)
- [Bitcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/btc.ts) (BTC)
- [Bitcoin Gold](https://github.com/hyperbit-dev/chains/blob/master/src/chains/btg.ts) (BTG)
- [c0ban](https://github.com/hyperbit-dev/chains/blob/master/src/chains/cbn.ts) (RYO)
- [CityCoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/city.ts) (CITY)
- [Dash](https://github.com/hyperbit-dev/chains/blob/master/src/chains/dash.ts) (DASH)
- [Decred](https://github.com/hyperbit-dev/chains/blob/master/src/chains/dcr.ts) (DCR)
- [DigiByte](https://github.com/hyperbit-dev/chains/blob/master/src/chains/dgb.ts) (DGB)
- [Denarius](https://github.com/hyperbit-dev/chains/blob/master/src/chains/dnr.ts) (DNR)
- [Dogecoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/doge.ts) (DOGE)
- [Evrmore](https://github.com/hyperbit-dev/chains/blob/master/src/chains/evr.ts) (EVR)
- [Groestlcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/grs.ts) (GRS)
- [Litecoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/ltc.ts) (LTC)
- [Meowcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/mewc.ts) (MEWC)
- [Monacoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/mona.ts) (MONA)
- [NuBits](https://github.com/hyperbit-dev/chains/blob/master/src/chains/nbt.ts) (NBT)
- [Namecoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/nmc.ts) (NMC)
- [Peercoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/ppc.ts) (PPC)
- [Qtum](https://github.com/hyperbit-dev/chains/blob/master/src/chains/qtum.ts) (QTUM)
- [ReddCoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/rdd.ts) (RDD)
- [Ravencoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/rvn.ts) (RVN)
- [Ritocoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/rito.ts) (RITO)
- [Viacoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/via.ts) (VIA)
- [Vertcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/vtc.ts) (VTC)
- [x42](https://github.com/hyperbit-dev/chains/blob/master/src/chains/x42.ts) (x42)

## Usage with BitcoinJS and Bitcore

You can pass in your desired coin to make it compatible with [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) or [bitcore](https://github.com/bitpay/bitcore) by making use of to additional utility functions.

```javascript
import { btc, toBitcoinJS, toBitcore } from '@hyperbitjs/chains';

const { main, test } = btc;

const btcBitcoinJSMain = toBitcoinJS(main, 'main');
const btcBitcoinJSTest = toBitcoinJS(test, 'test');

const btcBitCoreMain = toBitCore(main, 'main');
const btcBitCoreTest = toBitCore(test, 'test');
```

## Contributing

If you're interested in contributing, please read the [contributing docs](https://github.com/hyperbit-dev/chains/blob/master/CONTRIBUTING.md) before submitting a pull request.

## Authors

- [@mikemcshinsky](https://twitter.com/mikemcshinsky) – [Magitek](https://magitek.dev)

## License

[MIT](/LICENSE) License
