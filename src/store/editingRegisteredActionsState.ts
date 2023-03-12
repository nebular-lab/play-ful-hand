import { atom } from 'recoil';

import { defaultRegisteredActons } from '@/types/data/defaultRegisteredActions';
import { RegisteredActionType } from '@/types/schema';

export const editingRegisteredActionsState = atom<RegisteredActionType[]>({
  key: 'editingRegisteredActionsState',
  default: defaultRegisteredActons,
});
