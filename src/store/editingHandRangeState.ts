import { defaultHandRange } from '@/types/data/defaultHandRange';
import { HandRangeType } from '@/types/schema';
import { atom } from 'recoil';

export const editingHandRangeState = atom<HandRangeType>({
  key: 'editingHandRange',
  default: defaultHandRange,
});
