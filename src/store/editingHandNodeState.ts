import { atom } from 'recoil';

import { defaultHandNode } from '@/types/data/deaultHandNode';
import { HandNodeType } from '@/types/schema';

export const editingHandNodeState = atom<HandNodeType>({
  key: 'editingHandNodeState',
  default: defaultHandNode,
});
