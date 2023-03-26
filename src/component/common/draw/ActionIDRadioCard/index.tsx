import { Box, Flex, Text, useRadio, UseRadioProps } from '@chakra-ui/react';
import { FC } from 'react';

import { MoveTypeForException } from '@/types/schema';

interface ActionIDRadioCardProps extends UseRadioProps {
  move: MoveTypeForException;
  size: number;
}

export const ActionIDRadioCard: FC<ActionIDRadioCardProps> = (props) => {
  const { move, size } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        h={'14'}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        alignItems={'center'}
        justifyContent={'center'}
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        p={1}
      >
        <Text fontSize={'sm'}>
          {move == 'no-set' ? '消去' : move} {size == 0 ? '' : size}
        </Text>
      </Flex>
    </Box>
  );
};
