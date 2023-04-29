import { HandNodeType } from '../types/schema';
import { defaultHandRange } from './defaultHandRange';
import { defaultDrawKind, defaultHandKind } from './handKind';

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
    handKind: defaultHandKind,
    drawKind: defaultDrawKind,
    board: [],
    handRange: { OOP: defaultHandRange, IP: defaultHandRange },
  },
};
