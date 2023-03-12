import { RegisteredActionType } from '../schema';

export const defaultRegisteredActons: RegisteredActionType[] = [
  { action: { move: 'no-defined', size: 0 }, id: 0, color: 'bg-white' },
  { action: { move: 'no-set', size: 0 }, id: 1, color: 'bg-gray-300' },
  { action: { move: 'BET', size: 10 }, id: 2, color: 'bg-orange-300' },
  { action: { move: 'CHECK', size: 0 }, id: 3, color: 'bg-green-300' },
];
