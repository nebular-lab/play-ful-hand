import { atom } from 'recoil';

export const editingSelectedActionIDState = atom<number | null>({
  key: 'editingSelectedActionIDState',
  default: 2,
});
