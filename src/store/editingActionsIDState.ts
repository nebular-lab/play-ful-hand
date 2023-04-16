import { atom } from 'recoil';

export const editingActionsIDState = atom<Array<number>>({
  key: 'editingActionsIDState.ts',
  default: [1, 2],
});
