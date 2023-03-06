import { editingHandRangeState } from '@/store/editingHandRangeState';
import { defaultHandRange } from '@/types/data/defaultHandRange';
import produce from 'immer';
import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { HandSquare } from '../HandSquare';

export type HandRangeProps = {};

export const HandRange: FC<HandRangeProps> = (props) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  // const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  const onMouseDown = () => {
    setIsMouseDown(true);
  };
  const onMouseUp = () => {
    setIsMouseDown(false);
  };
  return (
    <div className="flex flex-col" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {[...Array(13)].map((_, colIndex13) => {
        return (
          <div key={colIndex13} className="flex">
            {[...Array(13)].map((_, rowIndex13) => {
              return (
                <HandSquare
                  key={rowIndex13}
                  colIndex13={colIndex13}
                  rowIndex13={rowIndex13}
                  isMouseDown={isMouseDown}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
