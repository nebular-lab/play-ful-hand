import { Flex } from '@chakra-ui/react';
import { FC, memo, MutableRefObject } from 'react';
import { useRecoilValue } from 'recoil';

import { editModeState } from '@/store/editModeState';
import { PositionType } from '@/types/schema';

import { HandOne } from '../HandOne';

export type HandSquareProps = {
  hands: number[][];
  position: PositionType;
  rowIndex13: number;
  colIndex13: number;
  isMouseDownRef: MutableRefObject<boolean>;
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
    isMouseDownRef,
    hands: handRange,
    rowIndex13,
    colIndex13,
    updateEditingHandRange,
    updateEditingHandRangeSquare,
  } = props;
  const editMode = useRecoilValue(editModeState);

  const onMouseOver = () => {
    if (isMouseDownRef.current && editMode == 'square') {
      updateEditingHandRangeSquare({ colIndex13: colIndex13, rowIndex13: rowIndex13 });
    }
  };
  const onMouseDown = () => {
    if (editMode == 'square')
      updateEditingHandRangeSquare({ colIndex13: colIndex13, rowIndex13: rowIndex13 });
  };
  return (
    <Flex
      direction={'column'}
      border={'2px'}
      borderColor={'gray.300'}
      w={'fit-content'}
      onMouseOver={onMouseOver}
      onMouseDown={onMouseDown}
    >
      {handRange.map((rows, colIndex4) => {
        return (
          <Flex key={colIndex4}>
            {rows.map((hand, rowIndex4) => {
              const indexes = {
                colIndex13: colIndex13,
                rowIndex13: rowIndex13,
                colIndex4: colIndex4,
                rowIndex4: rowIndex4,
              };
              return (
                <HandOne
                  key={rowIndex4}
                  hand={hand}
                  indexes={indexes}
                  updateEditingHandRange={updateEditingHandRange}
                  isMouseDownRef={isMouseDownRef}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
});
