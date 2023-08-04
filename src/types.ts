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

export type Network = Common & {
  hashGenesisBlock: string;
  port: number;
  portRpc: number;
  protocol?: Record<string, number>;
  seedsDns: string[];
  versions: Versions;
};

export type TestNetwork = Common & {
  hashGenesisBlock: string;
  port: number;
  portRpc: number;
  protocol?: Record<string, number>;
  versions: Versions;
};

export type BitcoinJS = (Network | TestNetwork) & {
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
  dustThreshold: null;
};

export type BitCore = (Network | TestNetwork) & {
  name: string;
  alias: string;
  networkMagic: number;
  pubkeyhash: number;
  privatekey: number;
  xpubkey: number;
  xprivkey: number;
  dnsSeeds: string[];
};
