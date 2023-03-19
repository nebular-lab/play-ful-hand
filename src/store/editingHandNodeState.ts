import { atom } from 'recoil';

import { defaultHandNode } from '@/defaultData/deaultHandNode';
import { HandNodeType } from '@/types/schema';

export const editingHandNodeState = atom<HandNodeType>({
  key: 'editingHandNodeState',
  default: defaultHandNode,
});
