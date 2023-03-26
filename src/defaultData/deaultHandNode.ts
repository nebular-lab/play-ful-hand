import { HandNodeType } from '../types/schema';
import { defaultHandRange } from './defaultHandRange';

export const defaultHandNode: HandNodeType = {
  id: '111',
  title: 'testTitle',
  userName: 'testUser',
  iconURL: 'test',
  updatedAt: 92378462334987,
  createdAt: 23104941282137,
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
