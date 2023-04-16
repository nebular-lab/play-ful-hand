import { Flex } from '@chakra-ui/react';
import { type FC } from 'react';

import { CardType } from '@/types/schema';

export interface CardProps extends CardType {
  onClick?: () => void;
  size: 'sm' | 'md';
}
export const Card: FC<CardProps> = (props) => {
  const { num, mark, onClick, size } = props;
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
  const height = size == 'sm' ? 6 : 10;
  const width = size == 'sm' ? 5 : 8;
  return (
    <Flex
      bg={bgColor}
      h={height}
      w={width}
      alignItems={'center'}
      justifyContent={'center'}
      rounded={'sm'}
      fontSize={'sm'}
      fontWeight={'bold'}
      textColor={'white'}
      onClick={onClick}
      cursor={onClick && 'pointer'}
    >
      {num}
    </Flex>
  );
};
