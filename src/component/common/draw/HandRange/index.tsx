import { Flex } from '@chakra-ui/react';
import { FC, memo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useHandRange } from '@/hooks/useHandRange';
import { editingHandRangePositionState } from '@/store/editingHandRangePosition';
import { PositionType } from '@/types/schema';

import { HandSquare } from '../HandSquare';
export type HandRangeProps = {
  position: PositionType;
};
export const HandRange: FC<HandRangeProps> = memo((props) => {
  const { position } = props;
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const { updateEditingHandRange, updateEditingHandRangeSquare, editingHandRange } = useHandRange();
  const editingHandRangePosition = useRecoilValue(editingHandRangePositionState);
  const onMouseDown = () => {
    setIsMouseDown(true);
  };
  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <Flex
      direction={'column'}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      pointerEvents={editingHandRangePosition == position ? 'auto' : 'none'}
    >
      {editingHandRange[position].map((rows, colIndex13) => {
        return (
          <Flex key={colIndex13}>
            {rows.map((hands, rowIndex13) => {
              return (
                <HandSquare
                  key={rowIndex13}
                  hands={hands}
                  position={position}
                  colIndex13={colIndex13}
                  rowIndex13={rowIndex13}
                  // isMouseDown={isMouseDown}
                  updateEditingHandRangeSquare={updateEditingHandRangeSquare}
                  updateEditingHandRange={updateEditingHandRange}
                  isMouseDown={isMouseDown}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
});
