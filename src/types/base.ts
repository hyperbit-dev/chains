export type Bip32 = {
  private: number;
  public: number;
};

export type Versions = {
  bip32: Bip32;
  bip44?: number;
  private: number;
  private2?: number;
  public: number;
  scripthash: number;
  scripthash2?: number;
};

export type Common = {
  name: string;
  messageName?: string; // Message name can be different than the name (e.g. Pigeon => DarkCoin)
  unit: string;
  symbol: string;
  decimalPlaces: number;
  messagePrefix?: string;
  messagePrefixAlts?: string[];
  seedsDns?: string[];
  consensus?: Consensus;
  bech32?: string;
  algorithm?: Algorithm;
  confirmations?: number;
};

export type MainNet = Common & {
  id: string;
  network: 'mainnet';
  hashGenesisBlock: string;
  port: number;
  portRpc: number;
  protocol?: Record<string, number>;
  seedsDns: string[];
  versions: Versions;
};

export type TestNet = Common & {
  id: string;
  network: 'testnet';
  hashGenesisBlock: string;
  port: number;
  portRpc: number;
  protocol?: Record<string, number>;
  versions: Versions;
};

export type RegTest = Omit<TestNet, 'network'> & {
  network: 'regtest';
};
export type SimNet = Omit<TestNet, 'network'> & {
  network: 'simnet';
};

export type Network = MainNet | TestNet | RegTest | SimNet;

export type Networks = Record<string, Network>;

export type BitcoinJS = (MainNet | TestNet | RegTest | SimNet) & {
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
  dustThreshold: null;
};

export type BitCore = (MainNet | TestNet | RegTest | SimNet) & {
  name: string;
  alias: string;
  networkMagic: number;
  pubkeyhash: number;
  privatekey: number;
  xpubkey: number;
  xprivkey: number;
  dnsSeeds: string[];
};

export type Consensus =
  | 'PoW' // Proof of Work
  | 'PoS' // Proof of Stake
  | 'PoB' // Proof of Burn
  | 'DPoS' // Delegated Proof of Stake
  | 'PBFT' // Practical Byzantine Fault Tolerance
  | 'PoET' // Proof of Elapsed Time
  | 'PoC' // Proof of Capacity
  | 'PoA'; // Proof of Authority

export type Algorithm =
  | 'allium'
  | 'bcrypt'
  | 'bitcore'
  | 'blake'
  | 'blake2s'
  | 'boolberry'
  | 'c11'
  | 'cryptonight'
  | 'cryptonight_fast'
  | 'equihash'
  | 'evrprogpow'
  | 'firopow'
  | 'fresh'
  | 'fugue'
  | 'ghostrider'
  | 'groestl'
  | 'hefty1'
  | 'kawpow'
  | 'keccak'
  | 'lbry'
  | 'lyra2re'
  | 'lyra2z'
  | 'meraki'
  | 'meowpow'
  | 'minotaur'
  | 'minotaurx'
  | 'neoscrypt'
  | 'nist5'
  | 'polytimos'
  | 'progpow'
  | 'quark'
  | 'qubit'
  | 'scrypt'
  | 'scrypt-jane'
  | 'scrypt-n'
  | 'scryptjane'
  | 'scryptn'
  | 'sha1'
  | 'sha256d'
  | 'shavite3'
  | 'skein'
  | 'timetravel'
  | 'verthash'
  | 'x11'
  | 'x13'
  | 'x15'
  | 'x16r'
  | 'x16rt'
  | 'x16rv2'
  | 'x21s'
  | 'xevan'
  | 'zhash';
