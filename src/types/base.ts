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
  decimalPlaces: number;
  messagePrefix?: string;
  messagePrefixAlts?: string[];
  seedsDns?: string[];
  isProofOfStake?: boolean;
  bech32?: string;
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

export type Networks = Record<
  'mainnet' | 'testnet' | 'regtest' | 'simnet',
  MainNet | TestNet | RegTest | SimNet
>;

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
