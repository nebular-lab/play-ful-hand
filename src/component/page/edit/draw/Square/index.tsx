import { FC, memo } from 'react';
import { useRecoilValue } from 'recoil';

import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import { editModeState } from '@/store/editModeState';

export type SquareProps = {
  hand: number;
  isMouseDown: boolean;
  indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number };
  updateEditingHandRange: (indexes: {
    colIndex13: number;
    rowIndex13: number;
    colIndex4: number;
    rowIndex4: number;
  }) => void;
};

export const Square: FC<SquareProps> = memo((props) => {
  const { isMouseDown, hand: actionNumber, indexes, updateEditingHandRange } = props;

  const registeredActions = useRecoilValue(editingRegisteredActionsState);
  const editMode = useRecoilValue(editModeState);

  const actionColor = registeredActions.find(
    (registeredAction) => actionNumber == registeredAction.id,
  );

  const onMouseOver = () => {
    if (isMouseDown && editMode == 'one') {
      updateEditingHandRange(indexes);
    }
  };
  const onClick = () => {
    if (editMode == 'one') updateEditingHandRange(indexes);
  };

  if (actionColor?.action.move !== 'no-defined' && actionColor !== undefined) {
    return (
      <div
        className={` h-2 w-2 ${actionColor.color} border`}
        onMouseOver={onMouseOver}
        onClick={onClick}
      ></div>
    );
  } else {
    return <div className={` h-2 w-2  `}></div>;
  }
});
