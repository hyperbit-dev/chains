export type Common = {
  name: string;
  unit: string;
  decimalPlaces: number;
  messagePrefix?: string;
  messagePrefixAlts?: string[];
  seedsDns?: string[];
  isProofOfStake?: boolean;
}

export type Network = Common & {
  hashGenesisBlock: string;
  port: number;
  portRpc: number;
  protocol?: Record<string, number>;
  seedsDns: string[];
  versions: Record<string, any>;
  bech32?: string;
}

export type TestNetwork = Common & {
  hashGenesisBlock: string;
  port: number;
  portRpc: number;
  protocol?: Record<string, number>;
  versions: Record<string, any>;
  bech32?: string;
}