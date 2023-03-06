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
export const defaultHandRange: HandRangeType = {
  registeredActions: [
    { action: { move: 'undefined', size: 0 }, actionNum: 0, color: 'bg-white' },
    { action: { move: 'no-set', size: 0 }, actionNum: 1, color: 'bg-gray-300' },
    { action: { move: 'BET', size: 10 }, actionNum: 2, color: 'bg-orange-300' },
  ],
  handRange: [
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
  ],
};
