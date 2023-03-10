import { FC, memo, useMemo } from 'react';

import { registeredActionType } from '@/types/schema';

import { Square } from '../Square';

export type HandSquareProps = {
  hands: number[][];
  rowIndex13: number;
  colIndex13: number;
  isMouseDown: boolean;
  registeredActions: registeredActionType;
  updateEditingHandRange: (indexes: {
    colIndex13: number;
    rowIndex13: number;
    colIndex4: number;
    rowIndex4: number;
  }) => void;
};

export const HandSquare: FC<HandSquareProps> = memo((props) => {
  const {
    isMouseDown,
    hands: handRange,
    registeredActions,
    rowIndex13,
    colIndex13,
    updateEditingHandRange,
  } = props;
  
  return (
    <div className={`flex w-fit flex-col border-2 border-gray-400 `}>
      {handRange.map((rows, colIndex4) => {
        return (
          <div key={colIndex4} className="flex ">
            {rows.map((hand, rowIndex4) => {
              const indexes = useMemo<{
                colIndex13: number;
                rowIndex13: number;
                colIndex4: number;
                rowIndex4: number;
              }>(
                () => ({
                  colIndex13: colIndex13,
                  rowIndex13: rowIndex13,
                  colIndex4: colIndex4,
                  rowIndex4: rowIndex4,
                }),
                [],
              );
              return (
                <Square
                  hand={hand}
                  indexes={indexes}
                  isMouseDown={isMouseDown}
                  registeredActions={registeredActions}
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
