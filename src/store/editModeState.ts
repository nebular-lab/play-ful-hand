import { atom } from 'recoil';

export const editModeState = atom<'one' | 'square'>({
  key: 'editModeState',
  default: 'square',
});
