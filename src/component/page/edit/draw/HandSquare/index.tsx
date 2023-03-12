import { FC, memo } from 'react';
import { useRecoilValue } from 'recoil';

import { editModeState } from '@/store/editModeState';

import { Square } from '../Square';

export type HandSquareProps = {
  hands: number[][];
  rowIndex13: number;
  colIndex13: number;
  isMouseDown: boolean;
  updateEditingHandRange: (indexes: {
    colIndex13: number;
    rowIndex13: number;
    colIndex4: number;
    rowIndex4: number;
  }) => void;
  updateEditingHandRangeSquare: (indexes: { colIndex13: number; rowIndex13: number }) => void;
};

export const HandSquare: FC<HandSquareProps> = memo((props) => {
  const {
    isMouseDown,
    hands: handRange,
    rowIndex13,
    colIndex13,
    updateEditingHandRange,
    updateEditingHandRangeSquare,
  } = props;
  const editMode = useRecoilValue(editModeState);

  const onMouseOver = () => {
    if (isMouseDown && editMode == 'square') {
      updateEditingHandRangeSquare({ colIndex13: colIndex13, rowIndex13: rowIndex13 });
    }
  };
  const onClick = () => {
    if (editMode == 'square')
      updateEditingHandRangeSquare({ colIndex13: colIndex13, rowIndex13: rowIndex13 });
  };
  return (
    <div
      className={`flex w-fit flex-col border-2 ${
        (colIndex13 == 4 && rowIndex13 == 4||colIndex13 == 8 && rowIndex13 == 8) ? 'border-red-400' : 'border-gray-400'
      } `}
      onMouseOver={onMouseOver}
      onClick={onClick}
    >
      {handRange.map((rows, colIndex4) => {
        return (
          <div key={colIndex4} className="flex ">
            {rows.map((hand, rowIndex4) => {
              const indexes = {
                colIndex13: colIndex13,
                rowIndex13: rowIndex13,
                colIndex4: colIndex4,
                rowIndex4: rowIndex4,
              };
              return (
                <Square
                  key={rowIndex4}
                  hand={hand}
                  indexes={indexes}
                  isMouseDown={isMouseDown}
                  updateEditingHandRange={updateEditingHandRange}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
});
