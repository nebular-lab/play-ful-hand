import { Flex } from '@chakra-ui/react';
import { FC, memo, MutableRefObject } from 'react';

import { PositionType } from '@/types/schema';

import { HandOne } from '../HandOne';

export type HandSquareProps = {
  hands: number[][];
  position: PositionType;
  rowIndex13: number;
  colIndex13: number;
  isMouseDownRef: MutableRefObject<boolean>;
  updateEditingHandRange: (
    indexes: {
      colIndex13: number;
      rowIndex13: number;
      colIndex4: number;
      rowIndex4: number;
    },
    selectedActionID: number,
  ) => void;
  updateEditingHandRangeSquare: (
    indexes: { colIndex13: number; rowIndex13: number },
    selectedActionID: number,
  ) => void;
  editModeRef: MutableRefObject<'square' | 'one'>;
  selectedActionIDRef: MutableRefObject<number>;
};

export const HandSquare: FC<HandSquareProps> = memo((props) => {
  const {
    isMouseDownRef,
    hands: handRange,
    rowIndex13,
    colIndex13,
    updateEditingHandRange,
    updateEditingHandRangeSquare,
    editModeRef,
    selectedActionIDRef,
  } = props;
  // const editMode = useRecoilValue(editModeState);
  const onMouseOver = () => {
    if (isMouseDownRef.current && editModeRef.current == 'square') {
      updateEditingHandRangeSquare(
        { colIndex13: colIndex13, rowIndex13: rowIndex13 },
        selectedActionIDRef.current,
      );
    }
  };
  const onMouseDown = () => {
    if (editModeRef.current == 'square')
      updateEditingHandRangeSquare(
        { colIndex13: colIndex13, rowIndex13: rowIndex13 },
        selectedActionIDRef.current,
      );
  };
  const border = colIndex13 == rowIndex13 ? '1px':'1px';
  return (
    <Flex
      direction={'column'}
      border={border}
      borderColor={'stroke'}
      // w={'fit-content'}
      boxSizing={'border-box'}
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
                  editModeRef={editModeRef}
                  selectedActionIDRef={selectedActionIDRef}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
});
