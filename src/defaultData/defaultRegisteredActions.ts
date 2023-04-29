import { RegisteredActionType } from '../types/schema';

export const defaultRegisteredActions: RegisteredActionType[] = [
  { action: { move: 'no-defined', size: 0 }, id: 0, color: 'white' },
  { action: { move: 'no-set', size: 0 }, id: 1, color: 'gray.300' },
  { action: { move: 'PREFLOP', size: 0 }, id: 2, color: 'red.300' },
  { action: { move: 'BET', size: 'S' }, id: 3, color: 'orange.300' },
  { action: { move: 'BET', size: 'M' }, id: 4, color: 'red.300' },
  { action: { move: 'BET', size: 'L' }, id: 5, color: 'purple.300' },
  { action: { move: 'CHECK', size: 0 }, id: 6, color: 'green.300' },
  { action: { move: 'CALL', size: 0 }, id: 7, color: 'green.300' },
  { action: { move: 'RAISE', size: 0 }, id: 8, color: 'red.300' },
  { action: { move: 'ALLIN', size: 0 }, id: 9, color: 'pink.300' },
  { action: { move: 'FOLD', size: 0 }, id: 10, color: 'blue.300' },
];
