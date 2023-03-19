import { HandNodeType } from '../types/schema';
import { defaultHandRange } from './defaultHandRange';

export const defaultHandNode: HandNodeType = {
  id: '111',
  flopNode: {
    id: 'test',
    type: 'StreetNode',
    street: 'FLOP',
    pot: 100,
    stack: 100,
    handRange: { OOP: defaultHandRange, IP: defaultHandRange },
  },
};
