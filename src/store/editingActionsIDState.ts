import { atom } from 'recoil';

export const editingActionsIDState = atom<Array<number>>({
  key: 'editingActionsIDState',
  default: [1, 2],
});
