import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';
import { FC } from 'react';
interface EditModeCardProps {
  value: 'one' | 'square';
  radioProps: UseRadioProps;
}
export const EditModeCard: FC<EditModeCardProps> = (props) => {
  const { value, radioProps } = props;
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps({});
  const checkbox = getCheckboxProps({});
  return (
    <Box as="label">
      <input {...input} />
      <Box
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
        px={5}
        py={3}
      >
        {value}
      </Box>
    </Box>
  );
};
