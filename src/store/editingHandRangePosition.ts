import { atom } from 'recoil';

import { PositionType } from '@/types/schema';

export const editingHandRangePositionState = atom<PositionType >({
  key: 'editingHandRangePositionState',
  default: 'OOP',
});
