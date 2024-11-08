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

const { mainnet, testnet } = chains.btc;
```

```javascript
import { btc } from '@hyperbitjs/chains';

const { mainnet, testnet } = btc;
```

Example Output:

```javascript
btc: {
  mainnet: {
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

## Usage with BitcoinJS and Bitcore

You can pass in your desired coin to make it compatible with [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) or [bitcore](https://github.com/bitpay/bitcore) by making use of to additional utility functions.

```javascript
import { btc, toBitcoinJS, toBitcore } from '@hyperbitjs/chains';

const { mainnet, testnet } = btc;

const btcBitcoinJSMain = toBitcoinJS(mainnet, 'mainnet');
const btcBitcoinJSTest = toBitcoinJS(testnet, 'testnet');

const btcBitcoreMain = toBitcore(mainnet, 'mainnet');
const btcBitcoreTest = toBitcore(testnet, 'testnet');
```

## Contributing

If you're interested in contributing, please read the [contributing docs](https://github.com/hyperbit-dev/chains/blob/master/CONTRIBUTING.md) before submitting a pull request.

## Authors

- [@mikemcshinsky](https://twitter.com/mikemcshinsky) – [Magitek](https://magitek.dev)

## License

[MIT](/LICENSE) License

## Supported Coins

| **Symbol** | **Coin**                                                                                  | **Supported** |
| ---------- | ----------------------------------------------------------------------------------------- | ------------- |
| BTC        | [Bitcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/bitcoin)          | Yes           |
| LTC        | [Litecoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/litecoin)        | Yes           |
| DOGE       | [Dogecoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/dogecoin)        | Yes           |
| RDD        | [Reddcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/reddcoin)        | Yes           |
| DASH       | [Dash](https://github.com/hyperbit-dev/chains/blob/master/src/chains/dash)                | Yes           |
| PGN        | [Pigeon](https://github.com/hyperbit-dev/chains/blob/master/src/chains/pigeoncoin)        | Yes           |
| PPC        | [Peercoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/peercoin)        | Yes           |
| NMC        | [Namecoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/namecoin)        | Yes           |
| FTC        | [Feathercoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/feathercoin)  | Yes           |
| XCP        | Counterparty                                                                              |               |
| BLK        | [Blackcoin](<(https://github.com/hyperbit-dev/chains/blob/master/src/chains/blackcoin)>)  | Yes           |
| NSR        | NuShares                                                                                  |               |
| NBT        | [NuBits](https://github.com/hyperbit-dev/chains/blob/master/src/chains/nubits)            | Yes           |
| MZC        | Mazacoin                                                                                  |               |
| VIA        | [Viacoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/viacoin)          | Yes           |
| XCH        | ClearingHouse                                                                             |               |
| RBY        | Rubycoin                                                                                  |               |
| GRS        | [Groestlcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/groestlcoin)  | Yes           |
| DGC        | Digitalcoin                                                                               |               |
| CCN        | Cannacoin                                                                                 |               |
| DGB        | [DigiByte](https://github.com/hyperbit-dev/chains/blob/master/src/chains/digibyte)        | Yes           |
|            | Open Assets                                                                               |               |
| MONA       | [Monacoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/monacoin)        | Yes           |
| CLAM       | Clams                                                                                     |               |
| XPM        | Primecoin                                                                                 |               |
| NEOS       | Neoscoin                                                                                  |               |
| JBS        | Jumbucks                                                                                  |               |
| ZRC        | ziftrCOIN                                                                                 |               |
| VTC        | [Vertcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/vertcoin)        | Yes           |
| NXT        | NXT                                                                                       |               |
| BURST      | Burst                                                                                     |               |
| MUE        | MonetaryUnit                                                                              |               |
| ZOOM       | Zoom                                                                                      |               |
| VASH       | Virtual Cash                                                                              |               |
| CDN        | Canada eCoin                                                                              |               |
| SDC        | ShadowCash                                                                                |               |
| PKB        | ParkByte                                                                                  |               |
| PND        | Pandacoin                                                                                 |               |
| START      | StartCOIN                                                                                 |               |
| MOIN       | MOIN                                                                                      |               |
| EXP        | Expanse                                                                                   |               |
| EMC2       | Einsteinium                                                                               |               |
| DCR        | [Decred](https://github.com/hyperbit-dev/chains/blob/master/src/chains/decred)            | Yes           |
| XEM        | NEM                                                                                       |               |
| PART       | Particl                                                                                   |               |
| ARG        | Argentum (dead)                                                                           |               |
|            | Libertas                                                                                  |               |
|            | Posw coin                                                                                 |               |
| SHR        | Shreeji                                                                                   |               |
| GCR        | Global Currency Reserve (GCRcoin)                                                         |               |
| NVC        | Novacoin                                                                                  |               |
| AC         | Asiacoin                                                                                  |               |
| BTCD       | BitcoinDark                                                                               |               |
| DOPE       | Dopecoin                                                                                  |               |
| TPC        | Templecoin                                                                                |               |
| AIB        | AIB                                                                                       |               |
| EDRC       | EDRCoin                                                                                   |               |
| SYS        | Syscoin                                                                                   |               |
| SLR        | Solarcoin                                                                                 |               |
| SMLY       | Smileycoin                                                                                |               |
| ETH        | Ether                                                                                     |               |
| ETC        | Ether Classic                                                                             |               |
| PSB        | Pesobit                                                                                   |               |
| LDCN       | Landcoin (dead)                                                                           |               |
|            | Open Chain                                                                                |               |
| XBC        | Bitcoinplus                                                                               |               |
| IOP        | Internet of People                                                                        |               |
| NXS        | Nexus                                                                                     |               |
| INSN       | InsaneCoin                                                                                |               |
| OK         | OKCash                                                                                    |               |
| BRIT       | BritCoin                                                                                  |               |
| CMP        | Compcoin                                                                                  |               |
| CRW        | Crown                                                                                     |               |
| BELA       | BelaCoin                                                                                  |               |
| ICX        | ICON                                                                                      |               |
| FJC        | FujiCoin                                                                                  |               |
| MIX        | MIX                                                                                       |               |
| XVG        | Verge Currency                                                                            |               |
| EFL        | Electronic Gulden                                                                         |               |
| CLUB       | ClubCoin                                                                                  |               |
| RICHX      | RichCoin                                                                                  |               |
| POT        | Potcoin                                                                                   |               |
| QRK        | Quarkcoin                                                                                 |               |
| TRC        | Terracoin                                                                                 |               |
| GRC        | Gridcoin                                                                                  |               |
| AUR        | Auroracoin                                                                                |               |
| IXC        | IXCoin                                                                                    |               |
| NLG        | Gulden                                                                                    |               |
| BITB       | BitBean                                                                                   |               |
| BTA        | Bata                                                                                      |               |
| XMY        | Myriadcoin                                                                                |               |
| BSD        | BitSend                                                                                   |               |
| UNO        | Unobtanium                                                                                |               |
| MTR        | MasterTrader                                                                              |               |
| GB         | GoldBlocks                                                                                |               |
| SHM        | Saham                                                                                     |               |
| CRX        | Chronos                                                                                   |               |
| BIQ        | Ubiquoin                                                                                  |               |
| EVO        | Evotion                                                                                   |               |
| STO        | SaveTheOcean                                                                              |               |
| BIGUP      | BigUp                                                                                     |               |
| GAME       | GameCredits                                                                               |               |
| DLC        | Dollarcoins                                                                               |               |
| ZYD        | Zayedcoin                                                                                 |               |
| DBIC       | Dubaicoin                                                                                 |               |
| STRAT      | Stratis                                                                                   |               |
| SH         | Shilling                                                                                  |               |
| MARS       | MarsCoin                                                                                  |               |
| UBQ        | Ubiq                                                                                      |               |
| PTC        | Pesetacoin                                                                                |               |
| NRO        | Neurocoin                                                                                 |               |
| ARK        | ARK                                                                                       |               |
| USC        | UltimateSecureCashMain                                                                    |               |
| THC        | Hempcoin                                                                                  |               |
| LINX       | Linx                                                                                      |               |
| ECN        | Ecoin                                                                                     |               |
| DNR        | [Denarius](https://github.com/hyperbit-dev/chains/blob/master/src/chains/denarius)        | Yes           |
| PINK       | Pinkcoin                                                                                  |               |
| ATOM       | Atom                                                                                      |               |
| PIVX       | Pivx                                                                                      |               |
| FLASH      | Flashcoin                                                                                 |               |
| ZEN        | Zencash                                                                                   |               |
| PUT        | Putincoin                                                                                 |               |
| ZNY        | BitZeny                                                                                   |               |
| UNIFY      | Unify                                                                                     |               |
| XST        | StealthCoin                                                                               |               |
| BRK        | Breakout Coin                                                                             |               |
| VC         | Vcash                                                                                     |               |
| XMR        | Monero                                                                                    |               |
| VOX        | Voxels                                                                                    |               |
| NAV        | [Navcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/navcoin)          | Yes           |
| FCT        | Factom Factoids                                                                           |               |
| EC         | Factom Entry Credits                                                                      |               |
| ZEC        | [Zcash](https://github.com/hyperbit-dev/chains/blob/master/src/chains/zcash)              |               |
| LSK        | Lisk                                                                                      |               |
| STEEM      | Steem                                                                                     |               |
| XZC        | ZCoin                                                                                     |               |
| RBTC       | RSK                                                                                       |               |
|            | Giftblock                                                                                 |               |
| RPT        | RealPointCoin                                                                             |               |
| LBC        | LBRY Credits                                                                              |               |
| KMD        | Komodo                                                                                    |               |
| BSQ        | bisq Token                                                                                |               |
| RIC        | Riecoin                                                                                   |               |
| XRP        | Ripple                                                                                    |               |
| BCH        | [Bitcoin Cash](https://github.com/hyperbit-dev/chains/blob/master/src/chains/bitcoincash) | Yes           |
| NEBL       | Neblio                                                                                    |               |
| ZCL        | ZClassic                                                                                  |               |
| XLM        | Stellar Lumens                                                                            |               |
| NLC2       | NoLimitCoin2                                                                              |               |
| WHL        | WhaleCoin                                                                                 |               |
| ERC        | EuropeCoin                                                                                |               |
| DMD        | Diamond                                                                                   |               |
| BTM        | Bytom                                                                                     |               |
| BIO        | Biocoin                                                                                   |               |
| XWCC       | Whitecoin Classic                                                                         |               |
| BTG        | Bitcoin Gold                                                                              |               |
| BTC2X      | Bitcoin 2x                                                                                |               |
| SSN        | SuperSkynet                                                                               |               |
| TOA        | TOACoin                                                                                   |               |
| BTX        | Bitcore                                                                                   |               |
| ACC        | Adcoin                                                                                    |               |
| BCO        | Bridgecoin                                                                                |               |
| ELLA       | Ellaism                                                                                   |               |
| PIRL       | Pirl                                                                                      |               |
| XNO        | Nano                                                                                      |               |
| VIVO       | Vivo                                                                                      |               |
| FRST       | Firstcoin                                                                                 |               |
| HNC        | Helleniccoin                                                                              |               |
| BUZZ       | BUZZ                                                                                      |               |
| MBRS       | Ember                                                                                     |               |
| HC         | Hcash                                                                                     |               |
| HTML       | HTMLCOIN                                                                                  |               |
| ODN        | Obsidian                                                                                  |               |
| ONX        | OnixCoin                                                                                  |               |
| RVN        | [Ravencoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/ravencoin)      | Yes           |
| EVR        | [Evrmore](https://github.com/hyperbit-dev/chains/blob/master/src/chains/evrmore)          | Yes           |
| GBX        | GoByte                                                                                    |               |
| BTCZ       | BitcoinZ                                                                                  |               |
| POA        | Poa                                                                                       |               |
| NYC        | NewYorkCoin                                                                               |               |
| MXT        | MarteXcoin                                                                                |               |
| WC         | Wincoin                                                                                   |               |
| MNX        | Minexcoin                                                                                 |               |
| BTCP       | Bitcoin Private                                                                           |               |
| MUSIC      | Musicoin                                                                                  |               |
| BCA        | Bitcoin Atom                                                                              |               |
| CRAVE      | Crave                                                                                     |               |
| STAK       | STRAKS                                                                                    |               |
| WBTC       | World Bitcoin                                                                             |               |
| LCH        | LiteCash                                                                                  |               |
| EXCL       | ExclusiveCoin                                                                             |               |
|            | Lynx                                                                                      |               |
| LCC        | LitecoinCash                                                                              |               |
| XFE        | Feirm                                                                                     |               |
| EOS        | EOS                                                                                       |               |
| TRX        | Tron                                                                                      |               |
| KOBO       | Kobocoin                                                                                  |               |
| HUSH       | HUSH                                                                                      |               |
| BANANO     | Bananos                                                                                   |               |
| ETF        | ETF                                                                                       |               |
| OMNI       | Omni                                                                                      |               |
| BIFI       | BitcoinFile                                                                               |               |
| UFO        | Uniform Fiscal Object                                                                     |               |
| CNMC       | Cryptonodes                                                                               |               |
| BCN        | Bytecoin                                                                                  |               |
| RIN        | Ringo                                                                                     |               |
| ATP        | Alaya                                                                                     |               |
| EVT        | everiToken                                                                                |               |
| ATN        | ATN                                                                                       |               |
| BIS        | Bismuth                                                                                   |               |
| NEET       | NEETCOIN                                                                                  |               |
| BOPO       | BopoChain                                                                                 |               |
| OOT        | Utrum                                                                                     |               |
| ALIAS      | Alias                                                                                     |               |
| MONK       | Monkey Project                                                                            |               |
| BOXY       | BoxyCoin                                                                                  |               |
| FLO        | Flo                                                                                       |               |
| MEC        | Megacoin                                                                                  |               |
| BTDX       | BitCloud                                                                                  |               |
| XAX        | Artax                                                                                     |               |
| ANON       | ANON                                                                                      |               |
| LTZ        | LitecoinZ                                                                                 |               |
| BITG       | Bitcoin Green                                                                             |               |
| ICP        | Internet Computer (DFINITY)                                                               |               |
| SMART      | Smartcash                                                                                 |               |
| XUEZ       | XUEZ                                                                                      |               |
| HLM        | Helium                                                                                    |               |
| WEB        | Webchain                                                                                  |               |
| ACM        | Actinium                                                                                  |               |
| NOS        | NOS Stable Coins                                                                          |               |
| BITC       | BitCash                                                                                   |               |
| HTH        | Help The Homeless Coin                                                                    |               |
| TZC        | Trezarcoin                                                                                |               |
| VAR        | Varda                                                                                     |               |
| IOV        | IOV                                                                                       |               |
| FIO        | FIO                                                                                       |               |
| BSV        | BitcoinSV                                                                                 |               |
| DXN        | DEXON                                                                                     |               |
| QRL        | Quantum Resistant Ledger                                                                  |               |
| PCX        | ChainX                                                                                    |               |
| LOKI       | Loki                                                                                      |               |
|            | Imagewallet                                                                               |               |
| NIM        | Nimiq                                                                                     |               |
| SOV        | Sovereign Coin                                                                            |               |
| JCT        | Jibital Coin                                                                              |               |
| SLP        | Simple Ledger Protocol                                                                    |               |
| EWT        | Energy Web                                                                                |               |
| UC         | Ulord                                                                                     |               |
| EXOS       | EXOS                                                                                      |               |
| ECA        | Electra                                                                                   |               |
| SOOM       | Soom                                                                                      |               |
| XRD        | Redstone                                                                                  |               |
| FREE       | FreeCoin                                                                                  |               |
| NPW        | NewPowerCoin                                                                              |               |
| BST        | BlockStamp                                                                                |               |
|            | SmartHoldem                                                                               |               |
| NANO       | Bitcoin Nano                                                                              |               |
| BTCC       | Bitcoin Core                                                                              |               |
|            | Zen Protocol                                                                              |               |
| ZEST       | Zest                                                                                      |               |
| ABT        | ArcBlock                                                                                  |               |
| PION       | Pion                                                                                      |               |
| DT3        | DreamTeam3                                                                                |               |
| ZBUX       | Zbux                                                                                      |               |
| KPL        | Kepler                                                                                    |               |
| TPAY       | TokenPay                                                                                  |               |
| ZILLA      | ChainZilla                                                                                |               |
| ANK        | Anker                                                                                     |               |
| BCC        | BCChain                                                                                   |               |
| HPB        | HPB                                                                                       |               |
| ONE        | ONE                                                                                       |               |
| SBC        | SBC                                                                                       |               |
| IPC        | IPChain                                                                                   |               |
| DMTC       | Dominantchain                                                                             |               |
| OGC        | Onegram                                                                                   |               |
| SHIT       | Shitcoin                                                                                  |               |
| ANDES      | Andescoin                                                                                 |               |
| AREPA      | Arepacoin                                                                                 |               |
| BOLI       | Bolivarcoin                                                                               |               |
| RIL        | Rilcoin                                                                                   |               |
| HTR        | Hathor Network                                                                            |               |
| FCTID      | Factom ID                                                                                 |               |
| BRAVO      | BRAVO                                                                                     |               |
| ALGO       | Algorand                                                                                  |               |
| BZX        | Bitcoinzero                                                                               |               |
| GXX        | GravityCoin                                                                               |               |
| HEAT       | HEAT                                                                                      |               |
| XDN        | [Digital Note](https://github.com/hyperbit-dev/chains/blob/master/src/chains/digitalnote) | Yes           |
| FSN        | FUSION                                                                                    |               |
| CPC        | Capricoin                                                                                 |               |
| BOLD       | Bold                                                                                      |               |
| IOST       | IOST                                                                                      |               |
| TKEY       | Tkeycoin                                                                                  |               |
| USE        | Usechain                                                                                  |               |
| BCZ        | BitcoinCZ                                                                                 |               |
| IOC        | Iocoin                                                                                    |               |
| ASF        | Asofe                                                                                     |               |
| MASS       | MASS                                                                                      |               |
| FAIR       | FairCoin                                                                                  |               |
| NUKO       | Nekonium                                                                                  |               |
| GNX        | Genaro Network                                                                            |               |
| DIVI       | Divi Project                                                                              |               |
| CMT        | Community                                                                                 |               |
| EUNO       | EUNO                                                                                      |               |
| IOTX       | IoTeX                                                                                     |               |
| ONION      | DeepOnion                                                                                 |               |
| 8BIT       | 8Bit                                                                                      |               |
| ATC        | AToken Coin                                                                               |               |
| BTS        | Bitshares                                                                                 |               |
| CKB        | Nervos CKB                                                                                |               |
| UGAS       | Ultrain                                                                                   |               |
| ADS        | Adshares                                                                                  |               |
| ARA        | Aura                                                                                      |               |
| ZIL        | Zilliqa                                                                                   |               |
| MOAC       | MOAC                                                                                      |               |
| SWTC       | SWTC                                                                                      |               |
| VNSC       | vnscoin                                                                                   |               |
| PLUG       | Pl^g                                                                                      |               |
| MAN        | Matrix AI Network                                                                         |               |
| ECC        | ECCoin                                                                                    |               |
| RPD        | Rapids                                                                                    |               |
| RAP        | Rapture                                                                                   |               |
| GARD       | Hashgard                                                                                  |               |
| ZER        | Zero                                                                                      |               |
| EBST       | eBoost                                                                                    |               |
| SHARD      | Shard                                                                                     |               |
| MRX        | Metrix Coin                                                                               |               |
| CMM        | Commercium                                                                                |               |
| BLOCK      | Blocknet                                                                                  |               |
| AUDAX      | AUDAX                                                                                     |               |
| LUNA       | Terra                                                                                     |               |
| ZPM        | zPrime                                                                                    |               |
| KUVA       | Kuva Utility Note                                                                         |               |
| MEM        | MemCoin                                                                                   |               |
| CS         | Credits                                                                                   |               |
| SWIFT      | SwiftCash                                                                                 |               |
| FIX        | FIX                                                                                       |               |
| CPC        | CPChain                                                                                   |               |
| VGO        | VirtualGoodsToken                                                                         |               |
| DVT        | DeVault                                                                                   |               |
| N8V        | N8VCoin                                                                                   |               |
| MTNS       | OmotenashiCoin                                                                            |               |
| BLAST      | BLAST                                                                                     |               |
| DCT        | DECENT                                                                                    |               |
| AUX        | Auxilium                                                                                  |               |
| USDP       | USDP                                                                                      |               |
| HTDF       | HTDF                                                                                      |               |
| YEC        | Ycash                                                                                     |               |
| QLC        | QLC Chain                                                                                 |               |
| TEA        | Icetea Blockchain                                                                         |               |
| ARW        | ArrowChain                                                                                |               |
| MDM        | Medium                                                                                    |               |
| CYB        | Cybex                                                                                     |               |
| LTO        | LTO Network                                                                               |               |
| DOT        | Polkadot                                                                                  |               |
| AEON       | Aeon                                                                                      |               |
| RES        | Resistance                                                                                |               |
| AYA        | Aryacoin                                                                                  |               |
| DAPS       | Dapscoin                                                                                  |               |
| CSC        | CasinoCoin                                                                                |               |
| VSYS       | V Systems                                                                                 |               |
| NOLLAR     | Nollar                                                                                    |               |
| XNOS       | NOS                                                                                       |               |
| CPU        | CPUchain                                                                                  |               |
| LAMB       | Lambda Storage Chain                                                                      |               |
| VCT        | ValueCyber                                                                                |               |
| CZR        | Canonchain                                                                                |               |
| ABBC       | ABBC                                                                                      |               |
| HET        | HET                                                                                       |               |
| XAS        | Asch                                                                                      |               |
| VDL        | Vidulum                                                                                   |               |
| MED        | MediBloc                                                                                  |               |
| ZVC        | ZVChain                                                                                   |               |
| VESTX      | Vestx                                                                                     |               |
| DBT        | DarkBit                                                                                   |               |
| SEOS       | SuperEOS                                                                                  |               |
| MXW        | Maxonrow                                                                                  |               |
| ZNZ        | ZENZO                                                                                     |               |
| XCX        | XChain                                                                                    |               |
| SOX        | SonicX                                                                                    |               |
| NYZO       | Nyzo                                                                                      |               |
| ULC        | ULCoin                                                                                    |               |
| RYO        | Ryo Currency                                                                              |               |
| KAL        | Kaleidochain                                                                              |               |
| XSN        | Stakenet                                                                                  |               |
| DOGEC      | DogeCash                                                                                  |               |
| BMV        | Bitcoin Matteo's Vision                                                                   |               |
| QBC        | Quebecoin                                                                                 |               |
| IMG        | ImageCoin                                                                                 |               |
| QOS        | QOS                                                                                       |               |
| PKT        | PKT                                                                                       |               |
| LHD        | LitecoinHD                                                                                |               |
| CENNZ      | CENNZnet                                                                                  |               |
| HSN        | Hyper Speed Network                                                                       |               |
| CRO        | Crypto Chain                                                                              |               |
| UMBRU      | Umbru                                                                                     |               |
| EVER       | Everscale                                                                                 |               |
| NEAR       | NEAR Protocol                                                                             |               |
| XPC        | XPChain                                                                                   |               |
| ZOC        | 01coin                                                                                    |               |
| NIX        | NIX                                                                                       |               |
| UC         | Utopiacoin                                                                                |               |
| GALI       | Galilel                                                                                   |               |
| OLT        | Oneledger                                                                                 |               |
| XBI        | XBI                                                                                       |               |
| DONU       | DONU                                                                                      |               |
| EARTHS     | Earths                                                                                    |               |
| HDD        | HDDCash                                                                                   |               |
| SUGAR      | Sugarchain                                                                                |               |
| AILE       | AileCoin                                                                                  |               |
| TENT       | TENT                                                                                      |               |
| TAN        | Tangerine Network                                                                         |               |
| AIN        | AIN                                                                                       |               |
| MSR        | Masari                                                                                    |               |
| SUMO       | Sumokoin                                                                                  |               |
| ETN        | Electroneum                                                                               |               |
| BYTZ       | BYTZ                                                                                      |               |
| WOW        | Wownero                                                                                   |               |
| XTNC       | XtendCash                                                                                 |               |
| LTHN       | Lethean                                                                                   |               |
| NODE       | NodeHost                                                                                  |               |
| AGM        | Argoneum                                                                                  |               |
| CCX        | Conceal Network                                                                           |               |
| TNET       | Title Network                                                                             |               |
| TELOS      | TelosCoin                                                                                 |               |
| AION       | Aion                                                                                      |               |
| BC         | Bitcoin Confidential                                                                      |               |
| KTV        | KmushiCoin                                                                                |               |
| ZCR        | ZCore                                                                                     |               |
| ERG        | Ergo                                                                                      |               |
| PESO       | Criptopeso                                                                                |               |
| BTC2       | Bitcoin 2                                                                                 |               |
| XRPHD      | XRPHD                                                                                     |               |
| WE         | WE Coin                                                                                   |               |
| KSM        | Kusama                                                                                    |               |
| PCN        | Peepcoin                                                                                  |               |
| NCH        | NetCloth                                                                                  |               |
| ICU        | CHIPO                                                                                     |               |
| LN         | LINK                                                                                      |               |
| DTP        | DeVault Token Protocol                                                                    |               |
| BTCR       | Bitcoin Royale                                                                            |               |
| AERGO      | AERGO                                                                                     |               |
| XTH        | Dothereum                                                                                 |               |
| LV         | Lava                                                                                      |               |
| PHR        | Phore                                                                                     |               |
| VITAE      | Vitae                                                                                     |               |
| COCOS      | Cocos-BCX                                                                                 |               |
| DIN        | Dinero                                                                                    |               |
| SPL        | Simplicity                                                                                |               |
| YCE        | MYCE                                                                                      |               |
| XLR        | Solaris                                                                                   |               |
| KTS        | Klimatas                                                                                  |               |
| DGLD       | DGLD                                                                                      |               |
| XNS        | Insolar                                                                                   |               |
| EM         | EMPOW                                                                                     |               |
| SHN        | ShineBlocks                                                                               |               |
| SEELE      | Seele                                                                                     |               |
| AE         | æternity                                                                                  |               |
| ODX        | ObsidianX                                                                                 |               |
| KAVA       | Kava                                                                                      |               |
| GLEEC      | GLEEC                                                                                     |               |
| FIL        | Filecoin                                                                                  |               |
| RUTA       | Rutanio                                                                                   |               |
| CSDT       | CSDT                                                                                      |               |
| ETI        | EtherInc                                                                                  |               |
| ZSLP       | Zclassic Simple Ledger Protocol                                                           |               |
| ERE        | EtherCore                                                                                 |               |
| DX         | DxChain Token                                                                             |               |
| CPS        | Capricoin+                                                                                |               |
| BTH        | Bithereum                                                                                 |               |
| MESG       | MESG                                                                                      |               |
| FIMK       | FIMK                                                                                      |               |
| AR         | Arweave                                                                                   |               |
| OGO        | Origo                                                                                     |               |
| ROSE       | Oasis Network                                                                             |               |
| BARE       | BARE Network                                                                              |               |
| GLEEC      | GleecBTC                                                                                  |               |
| CLR        | Color Coin                                                                                |               |
| RNG        | Ring                                                                                      |               |
| OLO        | Tool Global                                                                               |               |
| PEXA       | Pexa                                                                                      |               |
| MOON       | Mooncoin                                                                                  |               |
| OCEAN      | Ocean Protocol                                                                            |               |
| BNT        | Bluzelle Native                                                                           |               |
| AMO        | AMO Blockchain                                                                            |               |
| FCH        | FreeCash                                                                                  |               |
| LAT        | PlatON                                                                                    |               |
| COIN       | Bitcoin Bank                                                                              |               |
| VEO        | Amoveo                                                                                    |               |
| CCA        | Counos Coin                                                                               |               |
| GFN        | Graphene                                                                                  |               |
| BIP        | Minter Network                                                                            |               |
| KPG        | Kunpeng Network                                                                           |               |
| FIN        | FINL Chain                                                                                |               |
| BAND       | Band                                                                                      |               |
| DROP       | Dropil                                                                                    |               |
| BHT        | Bluehelix Chain                                                                           |               |
| LYRA       | Scrypta                                                                                   |               |
| CS         | Credits                                                                                   |               |
| RUPX       | Rupaya                                                                                    |               |
| THETA      | Theta                                                                                     |               |
| SOL        | Solana                                                                                    |               |
| THT        | ThoughtAI                                                                                 |               |
| CFX        | Conflux                                                                                   |               |
| KUMA       | Kumacoin                                                                                  |               |
| HASH       | Provenance                                                                                |               |
| CSPR       | Casper                                                                                    |               |
| EARTH      | EARTH                                                                                     |               |
| EGLD       | MultiversX                                                                                |               |
| CHI        | Xaya                                                                                      |               |
| KOTO       | Koto                                                                                      |               |
| OTC        | θ                                                                                         |               |
| XRD        | Radiant                                                                                   |               |
| SEELEN     | Seele-N                                                                                   |               |
| AETH       | AETH                                                                                      |               |
| DNA        | Idena                                                                                     |               |
| VEE        | Virtual Economy Era                                                                       |               |
| SIERRA     | SierraCoin                                                                                |               |
| LET        | Linkeye                                                                                   |               |
| BSC        | Bitcoin Smart Contract                                                                    |               |
| BTCV       | BitcoinVIP                                                                                |               |
| ABA        | Dabacus                                                                                   |               |
| SCC        | StakeCubeCoin                                                                             |               |
| EDG        | Edgeware                                                                                  |               |
| AMS        | AmsterdamCoin                                                                             |               |
| GOSS       | GOSSIP Coin                                                                               |               |
| BU         | BUMO                                                                                      |               |
| GRAM       | GRAM                                                                                      |               |
| YAP        | Yapstone                                                                                  |               |
| SCRT       | Secret Network                                                                            |               |
| NOVO       | Novo                                                                                      |               |
| GHOST      | Ghost                                                                                     |               |
| HST        | HST                                                                                       |               |
| PRJ        | ProjectCoin                                                                               |               |
| YOU        | YOUChain                                                                                  |               |
| XHV        | Haven Protocol                                                                            |               |
| BYND       | Beyondcoin                                                                                |               |
| JOYS       | Joys Digital                                                                              |               |
| VAL        | Valorbit                                                                                  |               |
| FLOW       | Flow                                                                                      |               |
| SMESH      | Spacemesh Coin                                                                            |               |
| SCDO       | SCDO                                                                                      |               |
| IQS        | IQ-Cash                                                                                   |               |
| BIND       | Compendia                                                                                 |               |
| COINEVO    | Coinevo                                                                                   |               |
| SCRIBE     | Scribe                                                                                    |               |
| HYN        | Hyperion                                                                                  |               |
| BHP        | BHP                                                                                       |               |
| BBC        | BigBang Core                                                                              |               |
| MKF        | MarketFinance                                                                             |               |
| XDC        | XinFin                                                                                    |               |
| STR        | Straightedge                                                                              |               |
| SUM        | Sumcoin                                                                                   |               |
| HBC        | HuobiChain                                                                                |               |
| ---        | reserved                                                                                  |               |
| BCS        | Bitcoin Smart                                                                             |               |
| KTS        | Kratos                                                                                    |               |
| LKR        | Lkrcoin                                                                                   |               |
| TAO        | Tao                                                                                       |               |
| XWC        | Whitecoin                                                                                 |               |
| DEAL       | DEAL                                                                                      |               |
| NTY        | Nexty                                                                                     |               |
| TOP        | TOP NetWork                                                                               |               |
| ---        | reserved                                                                                  |               |
| AG         | Agoric                                                                                    |               |
| CICO       | Coinicles                                                                                 |               |
| IRIS       | Irisnet                                                                                   |               |
| NCG        | Nine Chronicles                                                                           |               |
| LRG        | Large Coin                                                                                |               |
| SERO       | Super Zero Protocol                                                                       |               |
| BDX        | Beldex                                                                                    |               |
| CCXX       | Counos X                                                                                  |               |
| SLS        | Saluscoin                                                                                 |               |
| SRM        | Serum                                                                                     |               |
| ---        | reserved                                                                                  |               |
| VIVT       | VIDT Datalink                                                                             |               |
| BPS        | BitcoinPoS                                                                                |               |
| NKN        | NKN                                                                                       |               |
| ICL        | ILCOIN                                                                                    |               |
| BONO       | Bonorum                                                                                   |               |
| PLC        | PLATINCOIN                                                                                |               |
| DUN        | Dune                                                                                      |               |
| DMCH       | Darmacash                                                                                 |               |
| CTC        | Creditcoin                                                                                |               |
| KELP       | Haidai Network                                                                            |               |
| GBCR       | GoldBCR                                                                                   |               |
| XDAG       | XDAG                                                                                      |               |
| PRV        | Incognito Privacy                                                                         |               |
| SCAP       | SafeCapital                                                                               |               |
| TFUEL      | Theta Fuel                                                                                |               |
| GTM        | Gentarium                                                                                 |               |
| RNL        | RentalChain                                                                               |               |
| GRIN       | Grin                                                                                      |               |
| MWC        | MimbleWimbleCoin                                                                          |               |
| DOCK       | Dock                                                                                      |               |
| POLYX      | Polymesh                                                                                  |               |
| DIVER      | Divergenti                                                                                |               |
| XEP        | Electra Protocol                                                                          |               |
| APN        | Apron                                                                                     |               |
| TFC        | Turbo File Coin                                                                           |               |
| UTE        | Unit-e                                                                                    |               |
| MTC        | Metacoin                                                                                  |               |
| NC         | NobodyCash                                                                                |               |
| XINY       | Xinyuehu                                                                                  |               |
| DYN        | Dynamo                                                                                    |               |
| BUFS       | Buffer                                                                                    |               |
| STOS       | Stratos                                                                                   |               |
| TON        | TON                                                                                       |               |
| TAFT       | TAFT                                                                                      |               |
| HYDRA      | HYDRA                                                                                     |               |
| NOR        | Noir                                                                                      |               |
|            | Manta Network Private Asset                                                               |               |
|            | Calamari Network Private Asset                                                            |               |
| WCN        | Widecoin                                                                                  |               |
| OPT        | Optimistic Ethereum                                                                       |               |
| PSWAP      | PolkaSwap                                                                                 |               |
| VAL        | Validator                                                                                 |               |
| XOR        | Sora                                                                                      |               |
| SSP        | SmartShare                                                                                |               |
| DEI        | DeimosX                                                                                   |               |
| ---        | reserved                                                                                  |               |
| ZERO       | Singularity                                                                               |               |
| ALPHA      | AlphaDAO                                                                                  |               |
| BDECO      | BDCashProtocol Ecosystem                                                                  |               |
| NOBL       | Nobility                                                                                  |               |
| EAST       | Eastcoin                                                                                  |               |
| KDA        | Kadena                                                                                    |               |
| SOUL       | Phantasma                                                                                 |               |
| LORE       | Gitopia                                                                                   |               |
| FNR        | Fincor                                                                                    |               |
| NEXUS      | Nexus                                                                                     |               |
| QTZ        | Quartz                                                                                    |               |
| XMA        | Massa                                                                                     |               |
| CALL       | Callchain                                                                                 |               |
| VAL        | Validity                                                                                  |               |
| POKT       | Pocket Network                                                                            |               |
| EMIT       | EMIT                                                                                      |               |
| APTOS      | Aptos                                                                                     |               |
| ADON       | ADON                                                                                      |               |
| BTSG       | BitSong                                                                                   |               |
| LFC        | Leofcoin                                                                                  |               |
| KCS        | KuCoin Shares                                                                             |               |
| KCC        | KuCoin Community Chain                                                                    |               |
| AZERO      | Aleph Zero                                                                                |               |
| TREE       | Tree                                                                                      |               |
| LX         | Lynx                                                                                      |               |
| XLN        | Lunarium                                                                                  |               |
| CIC        | CIC Chain                                                                                 |               |
| ZRB        | Zarb                                                                                      |               |
| ---        | reserved                                                                                  |               |
| UCO        | Archethic                                                                                 |               |
| SFX        | Safex Cash                                                                                |               |
| SFT        | Safex Token                                                                               |               |
| WSFX       | Wrapped Safex Cash                                                                        |               |
| USDG       | US Digital Gold                                                                           |               |
| WMP        | WAMP                                                                                      |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| KOIN       | Koinos                                                                                    |               |
| PIRATE     | PirateCash                                                                                |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| SFRX       | EtherGem Sapphire                                                                         |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| ACT        | Achain                                                                                    |               |
| PRKL       | Perkle                                                                                    |               |
| SSC        | SelfSell                                                                                  |               |
| GC         | GateChain                                                                                 |               |
| PLGR       | Pledger                                                                                   |               |
| MPLGR      | Pledger                                                                                   |               |
| KNOX       | Knox                                                                                      |               |
| ZED        | ZED                                                                                       |               |
| CNDL       | Candle                                                                                    |               |
| WLKR       | Walker Crypto Innovation Index                                                            |               |
| WLKRR      | Walker                                                                                    |               |
| YUNGE      | Yunge                                                                                     |               |
| Voken      | Voken                                                                                     |               |
| APL        | Apollo                                                                                    |               |
| Evrynet    | Evrynet                                                                                   |               |
| NENG       | Nengcoin                                                                                  |               |
| CHTA       | Cheetahcoin                                                                               |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| OAS        | Oasys                                                                                     |               |
| KAR        | Karura Network                                                                            |               |
|            |                                                                                           |               |
| CET        | CoinEx Chain                                                                              |               |
|            |                                                                                           |               |
| KLV        | KleverChain                                                                               |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| VTBC       | VTB Community                                                                             |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| VEIL       | Veil                                                                                      |               |
| GTB        | GotaBit                                                                                   |               |
| XDAI       | xDai                                                                                      |               |
| COM        | Commercio                                                                                 |               |
| CCC        | Commercio Cash Credit                                                                     |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| MCOIN      | Moneta Coin                                                                               |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| CHC        | Chaincoin                                                                                 |               |
| SERF       | Serfnet                                                                                   |               |
| XTL        | Katal Chain                                                                               |               |
| BNB        | Binance                                                                                   |               |
| SIN        | Sinovate                                                                                  |               |
| DLN        | Delion                                                                                    |               |
| BONTE      | Bontecoin                                                                                 |               |
| PEER       | Peer                                                                                      |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| MCX        | MultiCash                                                                                 |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| HEALIOS    | Tenacity                                                                                  |               |
| BMK        | Bitmark                                                                                   |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| DENTX      | DENTNet                                                                                   |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| ATOP       | Financial Blockchain                                                                      |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| CFG        | Centrifuge                                                                                |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| XPRT       | Persistence                                                                               |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            | Age X25519 Encryption                                                                     |               |
|            | Age NIST Encryption                                                                       |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| HONEY      | HoneyWood                                                                                 |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| BALLZ      | Ballzcoin                                                                                 |               |
|            |                                                                                           |               |
| COSA       | Cosanta                                                                                   |               |
| BR         | BR                                                                                        |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| PLSR       | Pulsar Coin                                                                               |               |
| KEY        | Keymaker Coin                                                                             |               |
| BTW        | Bitcoin World                                                                             |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| PLCUC      | PLC Ultima Classic                                                                        |               |
| PLCUX      | PLC Ultima X                                                                              |               |
| PLCU       | PLC Ultima                                                                                |               |
|            |                                                                                           |               |
| SUI        | Sui                                                                                       |               |
|            |                                                                                           |               |
| UIDD       | UIDD                                                                                      |               |
| ACA        | Acala                                                                                     |               |
| BNC        | Bifrost                                                                                   |               |
| TAU        | Lamden                                                                                    |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| PDEX       | Polkadex                                                                                  |               |
| BEET       | Beetle Coin                                                                               |               |
| DST        | DSTRA                                                                                     |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| ZKS        | zkSync                                                                                    |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| QVT        | Qvolta                                                                                    |               |
| SDN        | Shiden Network                                                                            |               |
| ASTR       | Astar Network                                                                             |               |
| ---        | reserved                                                                                  |               |
|            |                                                                                           |               |
| MEER       | Qitmeer                                                                                   |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| VET        | VeChain Token                                                                             |               |
| REEF       | Reef                                                                                      |               |
| CLO        | Callisto                                                                                  |               |
|            |                                                                                           |               |
| BDB        | BigchainDB                                                                                |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| CCN        | ComputeCoin                                                                               |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| CRUZ       | cruzbit                                                                                   |               |
| SAPP       | Sapphire                                                                                  |               |
| 777        | Jackpot                                                                                   |               |
| KYAN       | Kyanite                                                                                   |               |
| AZR        | Azzure                                                                                    |               |
| CFL        | CryptoFlow                                                                                |               |
| DASHD      | Dash Diamond                                                                              |               |
| TRTT       | Trittium                                                                                  |               |
| UCR        | Ultra Clear                                                                               |               |
| PNY        | Peony                                                                                     |               |
| BECN       | Beacon                                                                                    |               |
| MONK       | Monk                                                                                      |               |
| SAGA       | CryptoSaga                                                                                |               |
| SUV        | Suvereno                                                                                  |               |
| ESK        | EskaCoin                                                                                  |               |
| OWO        | OneWorld Coin                                                                             |               |
| PEPS       | PEPS Coin                                                                                 |               |
| BIR        | Birake                                                                                    |               |
| MOBIC      | MobilityCoin                                                                              |               |
| FLS        | Flits                                                                                     |               |
|            |                                                                                           |               |
| DSM        | Desmos                                                                                    |               |
| PRCY       | PRCY Coin                                                                                 |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| HVH        | HAVAH                                                                                     |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| MOB        | MobileCoin                                                                                |               |
|            |                                                                                           |               |
| IF         | Infinitefuture                                                                            |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| NAM        | Namada                                                                                    |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| LUM        | Lum Network                                                                               |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| ZBC        | ZooBC                                                                                     |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| ADF        | AD Token                                                                                  |               |
|            |                                                                                           |               |
| NEO        | NEO                                                                                       |               |
| TOMO       | TOMO                                                                                      |               |
| XSEL       | Seln                                                                                      |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| LKSC       | LKSCoin                                                                                   |               |
|            |                                                                                           |               |
| AS         | Assetchain                                                                                |               |
| XEC        | eCash                                                                                     |               |
| LMO        | Lumeneo                                                                                   |               |
| NXT        | NxtMeta                                                                                   |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| HNT        | Helium                                                                                    |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| FIS        | StaFi                                                                                     |               |
|            |                                                                                           |               |
| SGE        | Saage                                                                                     |               |
|            |                                                                                           |               |
| GERT       | Gert                                                                                      |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| META       | Metadium                                                                                  |               |
| FRA        | Findora                                                                                   |               |
|            |                                                                                           |               |
| CCD        | Concordium                                                                                |               |
|            |                                                                                           |               |
| AVN        | Avian Network                                                                             |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| DIP        | Dipper Network                                                                            |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| GHM        | HermitMatrixNetwork                                                                       |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| RUNE       | THORChain (RUNE)                                                                          |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| ---        | reserved                                                                                  |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| LTP        | LifetionCoin                                                                              |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            | KickSoccer                                                                                |               |
|            |                                                                                           |               |
| VKAX       | Vkax                                                                                      |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| MATIC      | Matic                                                                                     |               |
|            |                                                                                           |               |
| UNW        | UNW                                                                                       |               |
|            |                                                                                           |               |
| TWINS      | TWINS                                                                                     |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| TLOS       | Telos                                                                                     |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| TAFECO     | Taf ECO Chain                                                                             |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
|            |                                                                                           |               |
| AU         | Autonomy                                                                                  |               |
|            |                                                                                           |               |
| VCG        | VipCoin                                                                                   |               |
| XAZAB      | Xazab core                                                                                |               |
| AIOZ       | AIOZ                                                                                      |               |
| CORE       | Coreum                                                                                    |               |
| PEC        | Phoenix                                                                                   |               |
| UNT        | Unit                                                                                      |               |
| XRB        | X Currency                                                                                |               |
| QUAI       | Quai Network                                                                              |               |
| CAPS       | Ternoa                                                                                    |               |
| OKT        | OKChain Token                                                                             |               |
| SUM        | Solidum                                                                                   |               |
| LBTC       | Lightning Bitcoin                                                                         |               |
| BCD        | Bitcoin Diamond                                                                           |               |
| BTN        | Bitcoin New                                                                               |               |
| TT         | ThunderCore                                                                               |               |
| BKT        | BanKitt                                                                                   |               |
| NODL       | Nodle                                                                                     |               |
| PCOIN      | PCOIN                                                                                     |               |
| TAO        | Bittensor                                                                                 |               |
| FTM        | Fantom                                                                                    |               |
| RPG        | RPG                                                                                       |               |
| HT         | Huobi ECO Chain                                                                           |               |
| ELV        | Eluvio                                                                                    |               |
| BIC        | Beincrypto                                                                                |               |
| EVC        | Evrice                                                                                    |               |
| XRD        | Radix DLT                                                                                 |               |
| ONE        | HARMONY-ONE                                                                               |               |
| ONT        | Ontology                                                                                  |               |
| CZZ        | Classzz                                                                                   |               |
| KEX        | Kira Exchange Token                                                                       |               |
| MCM        | Mochimo                                                                                   |               |
| BTCR       | BTCR                                                                                      |               |
| MFID       | Moonfish ID                                                                               |               |
| BBC        | Big Bitcoin                                                                               |               |
| RISE       | RISE                                                                                      |               |
| CMT        | CyberMiles Token                                                                          |               |
| ETSC       | Ethereum Social                                                                           |               |
| DFI        | DeFiChain                                                                                 |               |
| DFI        | DeFiChain EVM Network                                                                     |               |
| \$DAG      | Constellation Labs                                                                        |               |
| CDY        | Bitcoin Candy                                                                             |               |
| EFI        | Efinity                                                                                   |               |
| HOO        | Hoo Smart Chain                                                                           |               |
| ALPH       | Alephium                                                                                  |               |
|            | Nostr                                                                                     |               |
| GLMR       | Moonbeam                                                                                  |               |
| MOVR       | Moonriver                                                                                 |               |
| WEI        | WEI                                                                                       |               |
| DFC        | Defcoin                                                                                   |               |
| HYC        | Hycon                                                                                     |               |
| TENTSLP    | TENT Simple Ledger Protocol                                                               |               |
| XSC        | XT Smart Chain                                                                            |               |
| AAC        | Double-A Chain                                                                            |               |
|            | Taler                                                                                     |               |
| BEAM       | Beam                                                                                      |               |
| ELF        | AELF                                                                                      |               |
| AUDL       | AUDL                                                                                      |               |
| ATH        | Atheios                                                                                   |               |
| LUME       | Lume Web                                                                                  |               |
| NEW        | Newton                                                                                    |               |
| BTA        | Btachain                                                                                  |               |
| BCX        | BitcoinX                                                                                  |               |
| MEWC       | [Meowcoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/meowcoin)        | Yes           |
| TLS        | Telestai                                                                                  |               |
| XTZ        | Tezos                                                                                     |               |
| LBTC       | Liquid BTC                                                                                |               |
| BBP        | Biblepay                                                                                  |               |
| JPYS       | JPY Stablecoin                                                                            |               |
| VEGA       | Vega Protocol                                                                             |               |
| ADA        | Cardano                                                                                   |               |
| CUBE       | Cube Chain Native Token                                                                   |               |
| TES        | Teslacoin                                                                                 |               |
| ZTX        | Zetrix                                                                                    |               |
| XEC        | eCash token                                                                               |               |
| CLC        | Classica                                                                                  |               |
| VIPS       | VIPSTARCOIN                                                                               |               |
| CITY       | [City Coin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/citycoin)       | Yes           |
| XX         | xx coin                                                                                   |               |
| XMX        | Xuma                                                                                      |               |
| TRTL       | TurtleCoin                                                                                |               |
| SLRT       | Solarti Chain                                                                             |               |
| QTH        | Qing Tong Horizon                                                                         |               |
| EGEM       | EtherGem                                                                                  |               |
| MIRA       | Mira Chain                                                                                |               |
| HODL       | HOdlcoin                                                                                  |               |
| PHL        | Placeholders                                                                              |               |
| SC         | Sia                                                                                       |               |
| MYT        | Mineyourtime                                                                              |               |
| POLIS      | Polis                                                                                     |               |
| XMCC       | Monoeci                                                                                   |               |
| COLX       | ColossusXT                                                                                |               |
| GIN        | GinCoin                                                                                   |               |
| MNP        | MNPCoin                                                                                   |               |
| MLN        | Miraland                                                                                  |               |
| KIN        | Kin                                                                                       |               |
| EOSC       | EOSClassic                                                                                |               |
| GBT        | GoldBean Token                                                                            |               |
| PKC        | PKC                                                                                       |               |
| SKT        | Sukhavati                                                                                 |               |
| XHT        | Xinghuo Token                                                                             |               |
| MCASH      | MCashChain                                                                                |               |
| TRUE       | TrueChain                                                                                 |               |
| KILT       | KILT Spiritnet                                                                            |               |
| SAMA       | Exosama Network                                                                           |               |
| IoTE       | IoTE                                                                                      |               |
| XRG        | Ergon                                                                                     |               |
| CHZ        | Chiliz                                                                                    |               |
| ASK        | ASK                                                                                       |               |
|            | Qiyi Chain                                                                                |               |
| QTUM       | [QTUM](https://github.com/hyperbit-dev/chains/blob/master/src/chains/qtum)                | Yes           |
| ETP        | Metaverse                                                                                 |               |
| GXC        | GXChain                                                                                   |               |
| CRP        | CranePay                                                                                  |               |
| ELA        | Elastos                                                                                   |               |
| SNOW       | Snowblossom                                                                               |               |
| XIN        | Mixin                                                                                     |               |
| AOA        | Aurora                                                                                    |               |
| NAS        | Nebulas                                                                                   |               |
| REOSC      | REOSC Ecosystem                                                                           |               |
| BND        | Blocknode                                                                                 |               |
| LUX        | LUX                                                                                       |               |
| HBAR       | Hedera HBAR                                                                               |               |
| COS        | Contentos                                                                                 |               |
| CCC        | CodeChain                                                                                 |               |
| SXP        | Solar                                                                                     |               |
| ROI        | ROIcoin                                                                                   |               |
| DYN        | Dynamic                                                                                   |               |
| SEQ        | Sequence                                                                                  |               |
| DEO        | Destocoin                                                                                 |               |
| DST        | DeStream                                                                                  |               |
| CY         | Cybits                                                                                    |               |
| FC8        | FCH Network                                                                               |               |
| YEE        | YeeCo                                                                                     |               |
| IOTA       | IOTA                                                                                      |               |
| SMR        | Shimmer                                                                                   |               |
| AXE        | Axe                                                                                       |               |
| XYM        | Symbol                                                                                    |               |
| C4E        | Chain4Energy                                                                              |               |
| XVM        | Venidium                                                                                  |               |
| SBC        | Senior Blockchain                                                                         |               |
| FIC        | FIC                                                                                       |               |
| HNS        | Handshake                                                                                 |               |
| ISK        | ISKRA                                                                                     |               |
| ALTME      | ALTME                                                                                     |               |
| FUND       | Unification                                                                               |               |
| STX        | Stacks                                                                                    |               |
| VOW        | VowChain VOW                                                                              |               |
| SLU        | SILUBIUM                                                                                  |               |
| GO         | GoChain GO                                                                                |               |
| MOI        | My Own Internet                                                                           |               |
| RSC        | Royal Sports City                                                                         |               |
| BPA        | Bitcoin Pizza                                                                             |               |
| SAFE       | SAFE                                                                                      |               |
| COTI       | COTI                                                                                      |               |
| ROGER      | TheHolyrogerCoin                                                                          |               |
| TOPL       | Topl                                                                                      |               |
| KLY        | KLYNTAR                                                                                   |               |
| SHFT       | Shyft                                                                                     |               |
| BTV        | Bitvote                                                                                   |               |
| SKY        | Skycoin                                                                                   |               |
|            | DSRV                                                                                      |               |
| PAC        | pacprotocol                                                                               |               |
| KLAY       | KLAY                                                                                      |               |
| BTQ        | BitcoinQuark                                                                              |               |
| XCH        | Chia                                                                                      |               |
| ---        | reserved                                                                                  |               |
| PLMNT      | Planetmint                                                                                |               |
| SBTC       | Super Bitcoin                                                                             |               |
| NULS       | NULS                                                                                      |               |
| BBC        | Babacoin                                                                                  |               |
| JGC        | JagoanCoin                                                                                |               |
| BTP        | Bitcoin Pay                                                                               |               |
| AVAX       | Avalanche                                                                                 |               |
| ARB1       | Arbitrum                                                                                  |               |
| BOBA       | Boba                                                                                      |               |
| LOOP       | Loopring                                                                                  |               |
| STRK       | StarkNet                                                                                  |               |
| AVAXC      | Avalanche C-Chain                                                                         |               |
| BSC        | Binance Smart Chain                                                                       |               |
| NRG        | Energi                                                                                    |               |
| BTF        | Bitcoin Faith                                                                             |               |
| GOD        | Bitcoin God                                                                               |               |
| FO         | FIBOS                                                                                     |               |
| RTM        | Raptoreum                                                                                 |               |
| XRC        | XRhodium                                                                                  |               |
| XPI        | Lotus                                                                                     |               |
| ESS        | Essentia One                                                                              |               |
| IPOS       | IPOS                                                                                      |               |
| MINA       | Mina                                                                                      |               |
| BTY        | BitYuan                                                                                   |               |
| YCC        | Yuan Chain Coin                                                                           |               |
| WAX        | Worldwide Asset Exchange                                                                  |               |
| SDGO       | SanDeGo                                                                                   |               |
| XTX        | Totem Live Network                                                                        |               |
| ARDR       | Ardor                                                                                     |               |
| MTR        | Meter                                                                                     |               |
| SAFE       | Safecoin                                                                                  |               |
| FLUX       | Flux                                                                                      |               |
| RITO       | [Ritocoin](https://github.com/hyperbit-dev/chains/blob/master/src/chains/ritocoin)        | Yes           |
| XND        | ndau                                                                                      |               |
| C4EI       | c4ei                                                                                      |               |
| PCT        | Pactus                                                                                    |               |
| PWR        | PWRcoin                                                                                   |               |
| BELL       | Bellcoin                                                                                  |               |
| CHX        | Own                                                                                       |               |
| NEXA       | Nexa                                                                                      |               |
| ---        | reserved                                                                                  |               |
| ESN        | EtherSocial Network                                                                       |               |
|            | ThePower                                                                                  |               |
| TEO        | Trust Eth reOrigin                                                                        |               |
| BTCS       | Bitcoin Stake                                                                             |               |
| BTT        | ByteTrade                                                                                 |               |
| FXTC       | FixedTradeCoin                                                                            |               |
| AMA        | Amabig                                                                                    |               |
| FACT       | FACT0RN                                                                                   |               |
| AXIV       | AXIV                                                                                      |               |
| EVE        | evan                                                                                      |               |
| STASH      | STASH                                                                                     |               |
| CELO       | Celo                                                                                      |               |
| TH         | TianHe                                                                                    |               |
| KETH       | Krypton World                                                                             |               |
| GRLC       | Garlicoin                                                                                 |               |
| GWL        | Gewel                                                                                     |               |
| ZYN        | Wethio                                                                                    |               |
| RYO        | [c0ban](https://github.com/hyperbit-dev/chains/blob/master/src/chains/c0ban)              | Yes           |
| WICC       | Waykichain                                                                                |               |
| HOME       | HomeCoin                                                                                  |               |
| STC        | Starcoin                                                                                  |               |
| STRAX      | Strax                                                                                     |               |
| KAS        | Kaspa                                                                                     |               |
| APTA       | Bloqs4Good                                                                                |               |
| AKA        | Akroma                                                                                    |               |
| GENOM      | GENOM                                                                                     |               |
| ATS        | ARTIS sigma1                                                                              |               |
| ZAMA       | Zama                                                                                      |               |
| PI         | Pi Network                                                                                |               |
| VALUE      | Value Chain                                                                               |               |
| 3333       | Pi Value Consensus                                                                        |               |
| X42        | [x42](https://github.com/hyperbit-dev/chains/blob/master/src/chains/x42)                  | Yes           |
| SCR        | Scroll                                                                                    |               |
| VITE       | Vite                                                                                      |               |
| SEA        | Second Exchange Alliance                                                                  |               |
| AMAX       | Armonia Meta Chain                                                                        |               |
| ILT        | iOlite                                                                                    |               |
| ETHO       | Etho Protocol                                                                             |               |
| XERO       | Xerom                                                                                     |               |
| LAX        | LAPO                                                                                      |               |
| EPK        | EPIK Protocol                                                                             |               |
| HYD        | Hydra Token                                                                               |               |
| BCO        | BitcoinOre                                                                                |               |
| BHD        | BitcoinHD                                                                                 |               |
| PTN        | PalletOne                                                                                 |               |
| VLX        | Velas                                                                                     |               |
| WAN        | Wanchain                                                                                  |               |
| WAVES      | Waves                                                                                     |               |
| WEST       | Waves Enterprise                                                                          |               |
| ABC        | Abcmint                                                                                   |               |
| CRM        | Creamcoin                                                                                 |               |
| SEM        | Semux                                                                                     |               |
| ION        | ION                                                                                       |               |
| FCT        | FirmaChain                                                                                |               |
| WGR        | WGR                                                                                       |               |
| OBSR       | OBServer                                                                                  |               |
| AFS        | ANFS                                                                                      |               |
| XDS        | XDS                                                                                       |               |
| AQUA       | Aquachain                                                                                 |               |
| HATCH      | Hatch                                                                                     |               |
| kUSD       | kUSD                                                                                      |               |
| GENS       | GENS                                                                                      |               |
| EQ         | EQ                                                                                        |               |
| FLUID      | Fluid Chains                                                                              |               |
| QKC        | QuarkChain                                                                                |               |
| FVDC       | ForumCoin                                                                                 |               |
|            | Fuel                                                                                      |               |
| XNA        | [Neurai](https://github.com/NeuraiProject/chains/blob/master/src/chains/neurai)           | Yes           |
