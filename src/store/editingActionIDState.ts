import { atom } from 'recoil';

export const editingActionIDState = atom<number | null>({
  key: 'editingActionIDState',
  default: 2,
});
