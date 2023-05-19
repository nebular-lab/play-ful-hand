import { Box, Flex } from '@chakra-ui/react';
import { FC, memo, MutableRefObject, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { useHandRange } from '@/hooks/useHandRange';
import { editingHandRangePositionState } from '@/store/editingHandRangePosition';
import { CardNumType, PositionType } from '@/types/schema';

import { RangeHeader } from '../RangeHeader';
import { HandSquare } from './HandSquare';

export type HandRangeProps = {
  position: PositionType;
  editModeRef: MutableRefObject<'square' | 'one'>;
  selectedActionIDRef: MutableRefObject<number>;
};
export const HandRange: FC<HandRangeProps> = memo((props) => {
  const { position, editModeRef, selectedActionIDRef } = props;
  const isMouseDownRef = useRef<boolean>(false);
  const { updateEditingHandRange, updateEditingHandRangeSquare, editingHandRange } = useHandRange();
  const editingHandRangePosition = useRecoilValue(editingHandRangePositionState);
  const onMouseDown = () => {
    isMouseDownRef.current = true;
  };
  const onMouseUp = () => {
    isMouseDownRef.current = false;
  };
  const squareSize = 2;
  const cardNums: CardNumType[] = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

  return (
    <Flex
      direction={'column'}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      pointerEvents={editingHandRangePosition == position ? 'auto' : 'none'}
      border={'1px'}
      borderColor={'stroke'}
    >
      <Flex gap={0}>
        <Box
          h={`${squareSize * 4 * 4 + 2}px`}
          w={`${squareSize * 4 * 4 + 2}px`}
          border={'1px'}
          bg={'rangeBg'}
          borderColor={'stroke'}
        ></Box>
        {cardNums.map((num) => {
          return <RangeHeader key={num} num={num} direction={'row'} size={squareSize} />;
        })}
      </Flex>
      {editingHandRange[position].map((rows, colIndex13) => {
        return (
          <Flex key={colIndex13} gap={0}>
            <RangeHeader num={cardNums[colIndex13]} direction={'column'} size={squareSize} />
            {rows.map((hands, rowIndex13) => {
              return (
                <HandSquare
                  key={rowIndex13}
                  hands={hands}
                  position={position}
                  colIndex13={colIndex13}
                  rowIndex13={rowIndex13}
                  updateEditingHandRangeSquare={updateEditingHandRangeSquare}
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
