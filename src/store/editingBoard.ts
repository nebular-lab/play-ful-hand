import { atom } from 'recoil';

import { CardType } from '@/types/schema';

export const editingBoardState = atom<CardType[]>({
  key: 'editingBoardState',
  default: [],
});
