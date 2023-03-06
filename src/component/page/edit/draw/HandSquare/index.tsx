import { registeredActionType } from '@/types/schema';
import { FC, memo } from 'react';
import { Square } from '../Square';

export type HandSquareProps = {
  colIndex13: number;
  rowIndex13: number;
  isMouseDown: boolean;
};

export const HandSquare: FC<HandSquareProps> = memo((props) => {
  const { isMouseDown, colIndex13, rowIndex13,  } = props;

  return (
    <div className="flex w-fit flex-col border-2 border-gray-400">
      {[...Array(4)].map((_, colIndex4) => {
        return (
          <div key={colIndex4} className="flex ">
            {[...Array(4)].map((_, rowIndex4) => {
              return (
                <Square
                  key={rowIndex4}
                  indexes={{ colIndex13, rowIndex13, colIndex4, rowIndex4 }}
                  isMouseDown={isMouseDown}
                  isSquare={true}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
});
