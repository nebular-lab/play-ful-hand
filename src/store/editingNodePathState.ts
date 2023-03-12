import { atom } from 'recoil';

export const editingNodePathState = atom<Array<string | number>>({
  key: 'editingHandNodePathState',
  default: [],
});
