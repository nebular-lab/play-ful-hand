import { HandNodeType } from '../types/schema';
import { defaultHandRange } from './defaultHandRange';

export const defaultHandNode: HandNodeType = {
  id: '111',
  title: 'test title',
  userName: 'testUser',
  iconURL: 'test',
  updatedAt: Date.now(),
  createdAt: Date.now(),
  preflopHandRange: { OOP: defaultHandRange, IP: defaultHandRange },
  child: {
    id: 'test',
    type: 'StreetNode',
    street: 'FLOP',
    pot: 100,
    stack: 100,
    handRange: { OOP: defaultHandRange, IP: defaultHandRange },
  },
};
