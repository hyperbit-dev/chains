import * as _chains from './chains';
import { Networks, Symbol } from './types/base';

export const chains: Record<Symbol, Networks> = _chains;
export * from './chains';
export * from './utils';
export * from './types';
