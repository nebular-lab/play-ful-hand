import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { PositionType } from '@/types/schema';

export type PositionTagProps = {
  position: PositionType;
  onClick?: () => void;
  isSelected: boolean;
};

export const PositionTag: FC<PositionTagProps> = (props) => {
  const { position, onClick, isSelected } = props;
  return (
    <Flex
      onClick={onClick}
      border={'2px'}
      borderColor={isSelected ? 'violet' : 'gray.300'}
      rounded={'xl'}
      p={'2'}
      h={8}
      w={20}
      justifyContent={'center'}
      alignItems={'center'}
      cursor={'pointer'}
    >
      {position}
    </Flex>
  );
};
