import { Box, Flex, useRadio, UseRadioProps } from '@chakra-ui/react';
import { FC } from 'react';

interface ActionIDRadioCardProps extends UseRadioProps {
  children: React.ReactNode;
}

export const ActionIDRadioCard: FC<ActionIDRadioCardProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
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
        {props.children}
      </Flex>
    </Box>
  );
};
