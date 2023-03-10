import produce from 'immer';
import { FC, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

import { editingHandRangeState } from '@/store/editingHandRangeState';

import { HandSquare } from '../HandSquare';

export type HandRangeProps = {};

export const HandRange: FC<HandRangeProps> = (props) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  const onMouseDown = () => {
    setIsMouseDown(true);
  };
  const onMouseUp = () => {
    setIsMouseDown(false);
  };
  const updateEditingHandRange = useCallback(
    (indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number }) => {
      return setEditingHandRange((prev) => {
        const nextState = produce(prev, (draft) => {
          draft.handRange[indexes.colIndex13][indexes.rowIndex13][indexes.colIndex4][
            indexes.rowIndex4
          ] = 2;
        });
        return nextState;
      });
    },
    [],
  );
  return (
    <div className="flex flex-col" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {editingHandRange.handRange.map((rows, colIndex13) => {
        return (
          <div className="flex">
            {rows.map((hands, rowIndex13) => {
              return (
                <HandSquare
                  hands={hands}
                  colIndex13={colIndex13}
                  rowIndex13={rowIndex13}
                  registeredActions={editingHandRange.registeredActions}
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
};
