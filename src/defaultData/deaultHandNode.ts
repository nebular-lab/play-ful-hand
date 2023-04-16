import { HandNodeType } from '../types/schema';
import { defaultHandRange } from './defaultHandRange';

export const defaultHandNode: HandNodeType = {
  id: '111',
  title: 'test title',
  userName: 'testUser',
  iconURL: 'test',
  updatedAt: Date.now(),
  createdAt: Date.now(),
  child: {
    id: 'test',
    type: 'PositionNode',
    position: 'OOP',
    actionIDs:[2],
    handRange: { OOP: defaultHandRange, IP: defaultHandRange },
  },
};
