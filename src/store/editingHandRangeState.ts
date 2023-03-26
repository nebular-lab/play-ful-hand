import { atom } from 'recoil';

import { defaultHandRange } from '@/defaultData/defaultHandRange';
import { PairHandRangeType } from '@/types/schema';

export const editingHandRangeState = atom<PairHandRangeType>({
  key: 'editingHandRangeState',
  default: { OOP: defaultHandRange, IP: defaultHandRange },
});
