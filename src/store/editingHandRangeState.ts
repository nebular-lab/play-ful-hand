import { atom } from 'recoil';

import { defaultHandRange } from '@/types/data/defaultHandRange';
import { HandRangeType } from '@/types/schema';

export const editingHandRangeState = atom<HandRangeType>({
  key: 'editingHandRangeState',
  default: defaultHandRange,
});
