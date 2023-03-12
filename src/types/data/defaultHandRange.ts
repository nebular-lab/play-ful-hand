import { HandRangeType } from '../schema';
const pc = [
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
];
const st = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
const os = [
  [0, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 0],
];
export const defaultHandRange: HandRangeType = [
  [pc, st, st, st, st, st, st, st, st, st, st, st, st],
  [os, pc, st, st, st, st, st, st, st, st, st, st, st],
  [os, os, pc, st, st, st, st, st, st, st, st, st, st],
  [os, os, os, pc, st, st, st, st, st, st, st, st, st],
  [os, os, os, os, pc, st, st, st, st, st, st, st, st],
  [os, os, os, os, os, pc, st, st, st, st, st, st, st],
  [os, os, os, os, os, os, pc, st, st, st, st, st, st],
  [os, os, os, os, os, os, os, pc, st, st, st, st, st],
  [os, os, os, os, os, os, os, os, pc, st, st, st, st],
  [os, os, os, os, os, os, os, os, os, pc, st, st, st],
  [os, os, os, os, os, os, os, os, os, os, pc, st, st],
  [os, os, os, os, os, os, os, os, os, os, os, pc, st],
  [os, os, os, os, os, os, os, os, os, os, os, os, pc],
];
