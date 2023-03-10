import { FC, memo } from 'react';

import { registeredActionType } from '@/types/schema';

export type SquareProps = {
  hand: number;
  isMouseDown: boolean;
  registeredActions: registeredActionType;
  indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number };
  updateEditingHandRange: (indexes: {
    colIndex13: number;
    rowIndex13: number;
    colIndex4: number;
    rowIndex4: number;
  }) => void;
};

export const Square: FC<SquareProps> = memo((props) => {
  const {
    isMouseDown,
    hand: actionNumber,
    registeredActions,
    indexes,
    updateEditingHandRange,
  } = props;

  const actionColor = registeredActions.find(
    (registeredAction) => actionNumber == registeredAction.actionNum,
  );

  const onMouseOver = () => {
    if (isMouseDown) {
      updateEditingHandRange(indexes);
    }
  };
  const onClick = () => {
    updateEditingHandRange(indexes);
  };

  if (actionColor?.action.move !== 'undefined' && actionColor !== undefined) {
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
