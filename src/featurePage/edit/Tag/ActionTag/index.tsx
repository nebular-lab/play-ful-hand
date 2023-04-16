import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { ActionSizeType, MoveType } from '@/types/schema';

export type ActionTagProps = {
  move: MoveType;
  size: ActionSizeType;
};

export const ActionTag: FC<ActionTagProps> = (props) => {
  const { move, size } = props;
  if (move == 'PREFLOP') return null;
  const moveColor =
    move == 'CALL'
      ? 'green.400'
      : move == 'CHECK'
      ? 'green.400'
      : move == 'ALLIN'
      ? 'red.400'
      : move == 'BET'
      ? 'red.400'
      : move == 'RAISE'
      ? 'orange.400'
      : move == 'FOLD'
      ? 'blue.400'
      : '';
  return (
    <Flex
      h={8}
      w={20}
      rounded={'xl'}
      border={'1px'}
      p={'2'}
      justifyContent={'center'}
      alignItems={'center'}
      borderColor={moveColor}
      bg={'white'}
    >
      {move} {size == 0 ? '' : size}
    </Flex>
  );
};
