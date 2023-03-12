import { ChangeEventHandler, FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { editingActionIDState } from '@/store/editingActionIDState';
import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';

import { RadioCard } from '../RadioCard';

export const RadioGroup: FC = (props) => {
  const setEditingActionID = useSetRecoilState(editingActionIDState);
  const registeredActions = useRecoilValue(editingRegisteredActionsState);
  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
    setEditingActionID(Number(e.target.value));
  };

  return (
    <div className="grid  grid-cols-4 gap-2">
      {registeredActions.map((registeredAction) => {
        return (
          <RadioCard
            key={registeredAction.id}
            id={registeredAction.id}
            move={registeredAction.action.move}
            size={registeredAction.action.size}
            borderColor={registeredAction.color}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};
