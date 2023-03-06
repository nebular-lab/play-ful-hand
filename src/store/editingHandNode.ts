import { defaultHandNode } from '@/types/data/deaultHandNode';
import { HandNodeType } from '@/types/schema';
import { atom } from 'recoil';

export const editingHandNodeState = atom<HandNodeType>({
  key: 'editingHandNode',
  default: defaultHandNode,
});
