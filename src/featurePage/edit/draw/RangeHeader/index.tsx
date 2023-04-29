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

  const w = `${size * 4 * 4 + 2}px`;
  const h = `${size * 4 * 4 + 2}px`;
  return (
    <Flex
      w={w}
      h={h}
      direction={direction == 'row' ? 'column' : 'row'}
      border={'1px'}
      bg={'rangeBg'}
      borderColor={'stroke'}
      boxSizing={'border-box'}
      alignItems={'center'}
      pl={direction == 'column' ? 1 : 0}
      justifyContent={'space-between'}
    >
      <Center w={3} userSelect={'none'} color={'paragraph'} fontWeight={'bold'}>
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
              boxSizing={'border-box'}
              borderColor={'white'}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
