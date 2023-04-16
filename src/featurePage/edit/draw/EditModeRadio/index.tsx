import { Box, Flex, SimpleGrid, useRadio, useRadioGroup, UseRadioProps } from '@chakra-ui/react';
import { FC } from 'react';

export type EditModeRadioProps = { setEditMode: (value: 'square' | 'one') => void };
export const EditModeRadio: FC<EditModeRadioProps> = (props) => {
  const { setEditMode } = props;
  const options: Array<'one' | 'square'> = ['one', 'square'];
  const handleEditMode = (value: 'one' | 'square') => {
    setEditMode(value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'editMode',
    defaultValue: 'square',
    onChange: handleEditMode,
  });

  const group = getRootProps();

  return (
    <SimpleGrid columns={2} spacing={2} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return <EditModeCard key={value} value={value} radioProps={radio} />;
      })}
    </SimpleGrid>
  );
};

interface EditModeCardProps {
  value: 'one' | 'square';
  radioProps: UseRadioProps;
}
const EditModeCard: FC<EditModeCardProps> = (props) => {
  const { value, radioProps } = props;
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps({});
  const checkbox = getCheckboxProps({});
  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
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
        px={5}
        py={3}
      >
        {value}
      </Flex>
    </Box>
  );
};
