import { MutableRefObject } from 'react';
import { atom } from 'recoil';

export const editModeState = atom<MutableRefObject<'one'|'square'>>({
  key: 'editModeState',
  default: { current: 'square' },
});
