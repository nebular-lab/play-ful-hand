import { HandNodeType } from '../schema';

export const defaultHandNode: HandNodeType = {
  id: '111',
  flopNode: {
    id: 'test',
    type: 'StreetNode',
    street: 'FLOP',
    pot: 100,
    stack: 100,
    child: [],
  },
};
