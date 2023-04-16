import { Box, Center, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { CardMarkType, CardNumType } from '@/types/schema';

export type HeaderType = {
  num: CardNumType;
  size: number;
  direction: 'row' | 'column';
};
export const RangeHeader: FC<HeaderType> = (props) => {
  const { num, size, direction } = props;
  const cardMarks: CardMarkType[] = ['s', 'h', 'd', 'c'];

  const w = direction == 'row' ? size * 4 + 1 : size * 4;
  const h = direction == 'row' ? size * 4 : size * 4 + 1;
  return (
    <Flex
      w={w}
      h={h}
      direction={direction == 'row' ? 'column' : 'row'}
      border={'1px'}
      borderColor={'gray.300'}
      alignItems={'center'}
      pl={direction == 'column' ? 1 : 0}
      pr={direction == 'column' ? '1px' : 0}
      pb={direction == 'row' ? '1px' : 0}
      justifyContent={'space-between'}
    >
      <Center w={3} userSelect={'none'}>
        {num}
      </Center>
      <Flex direction={direction}>
        {cardMarks.map((mark) => {
          const bgColor =
            mark == 'h'
              ? 'red.400'
              : mark == 'c'
              ? 'green.400'
              : mark == 'd'
              ? 'blue.400'
              : mark == 's'
              ? 'gray.400'
              : '';
          return (
            <Box
              key={mark}
              w={size}
              h={size}
              bgColor={bgColor}
              border={'1px'}
              borderColor={'gray.200'}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
