import { Box, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { StreetType } from '@/types/schema';

export type StreetTagProps = {
  street: StreetType;
  pot: number;
  stack: number;
  onClick?: () => void;
  isSelected: boolean;
};

export const StreetTag: FC<StreetTagProps> = (props) => {
  const { street, pot, stack, onClick, isSelected } = props;
  return (
    <VStack
      w={32}
      border={'2px'}
      borderColor={isSelected ? 'violet' : 'gray.300'}
      rounded={'xl'}
      p={'2'}
      onClick={onClick}
      cursor={'pointer'}
    >
      <Box>{street}</Box>
      <Box>POT {pot}</Box>
      <Box>STACK {stack}</Box>
    </VStack>
  );
};
