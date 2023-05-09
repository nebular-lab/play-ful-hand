import { VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { StreetType } from '@/types/schema';

export type StreetTagProps = {
  street: StreetType;
  onClick?: () => void;
  isSelected: boolean;
};

export const StreetTag: FC<StreetTagProps> = (props) => {
  const { street, onClick, isSelected } = props;
  return (
    <VStack
      w={8}
      h={8}
      border={'2px'}
      bg={'gray.200'}
      borderColor={isSelected ? 'violet' : 'stroke'}
      _hover={{ bg: 'main' }}
      rounded={'full'}
      p={'2'}
      onClick={onClick}
      cursor={'pointer'}
    >
    </VStack>
  );
};
