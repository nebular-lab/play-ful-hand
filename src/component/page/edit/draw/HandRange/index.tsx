import { Flex } from '@chakra-ui/react';
import { FC, memo, useState } from 'react';

import { useHandRange } from '@/hooks/useHandRange';

import { HandSquare } from '../HandSquare';

export const HandRange: FC = memo((props) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const { updateEditingHandRange, updateEditingHandRangeSquare, editingHandRange } = useHandRange();
  const onMouseDown = () => {
    setIsMouseDown(true);
  };
  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <Flex direction={'column'} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {editingHandRange.map((rows, colIndex13) => {
        return (
          <Flex key={colIndex13}>
            {rows.map((hands, rowIndex13) => {
              return (
                <HandSquare
                  key={rowIndex13}
                  hands={hands}
                  colIndex13={colIndex13}
                  rowIndex13={rowIndex13}
                  isMouseDown={isMouseDown}
                  updateEditingHandRangeSquare={updateEditingHandRangeSquare}
                  updateEditingHandRange={updateEditingHandRange}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
});
