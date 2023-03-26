import { atom } from 'recoil';

import { defaultRegisteredActions } from '@/defaultData/defaultRegisteredActions';
import { RegisteredActionType } from '@/types/schema';

export const editingRegisteredActionsState = atom<RegisteredActionType[]>({
  key: 'editingRegisteredActionsState',
  default: defaultRegisteredActions,
});
