import { atom } from 'recoil';

export const editingActionsIDState = atom<Array<number> | null>({
  key: 'editingActionsIDState.ts',
  default: [1,2],
});
