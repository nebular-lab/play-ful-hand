import { ChangeEventHandler, FC } from 'react';
import { useSetRecoilState } from 'recoil';

import { editModeState } from '@/store/editModeState';

import { EditModeOption } from '../EditModeOption';

export const EditModeGroup: FC = (props) => {
  const setEditMode = useSetRecoilState(editModeState);
  const editModes: Array<'one' | 'square'> = ['one', 'square'];
  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
    setEditMode(e.target.value == 'one' ? 'one' : 'square');
  };
  return (
    <div className="grid  grid-cols-2 gap-2">
      {editModes.map((editMode) => {
        return <EditModeOption key={editMode} mode={editMode} handleChange={handleChange} />;
      })}
    </div>
  );
};
