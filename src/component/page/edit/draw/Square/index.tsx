import { editingHandRangeState } from '@/store/editingHandRangeState';
import produce from 'immer';
import { FC, memo } from 'react';
import { useRecoilState } from 'recoil';

export type SquareProps = {
  indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number };
  isMouseDown: boolean;
  isSquare: boolean;
};

export const Square: FC<SquareProps> = memo((props) => {
  const { isMouseDown, indexes } = props;
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  
  const actionNumber =
    editingHandRange.handRange[indexes.colIndex13][indexes.rowIndex13][indexes.colIndex4][
      indexes.rowIndex4
    ];

  const actionColor = editingHandRange.registeredActions.find(
    (registeredAction) => actionNumber == registeredAction.actionNum,
  );

  const updateEditingHandRange = (indexes: {
    colIndex13: number;
    rowIndex13: number;
    colIndex4: number;
    rowIndex4: number;
  }) => {
    const nextState = produce(editingHandRange, (draft) => {
      draft.handRange[indexes.colIndex13][indexes.rowIndex13][indexes.colIndex4][
        indexes.rowIndex4
      ] = 2;
    });
    // setEditingHandRange(nextState);
  };
  const onMouseOver = () => {
    if (isMouseDown) {
      updateEditingHandRange({
        colIndex13: indexes.colIndex13,
        rowIndex13: indexes.rowIndex13,
        colIndex4: indexes.colIndex4,
        rowIndex4: indexes.rowIndex4,
      });
    }
  };
  const onClick = () => {
    updateEditingHandRange({
      colIndex13: indexes.colIndex13,
      rowIndex13: indexes.rowIndex13,
      colIndex4: indexes.colIndex4,
      rowIndex4: indexes.rowIndex4,
    });
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
    return <div className={` h-2 w-2 bg-white `}></div>;
  }
});
