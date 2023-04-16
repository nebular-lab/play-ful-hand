import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import { editingSelectedActionIDState } from '@/store/editingSelectedActionIDState';
import { MoveTypeForException } from '@/types/schema';


export const ActionIDRadio: FC = (props) => {
  const setEditingSelectedActionID = useSetRecoilState(editingSelectedActionIDState);
  const registeredActions = useRecoilValue(editingRegisteredActionsState);
  const handleChange = (value: string) => {
    setEditingSelectedActionID(Number(value));
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'colorMode',
    defaultValue: '1',
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <SimpleGrid columns={4} spacing={2} {...group}>
      {registeredActions.map((action) => {
        const radio = getRadioProps({ value: String(action.id) });
        const move = action.action.move;
        const size = action.action.size;
        const color = action.color;
        if (move == 'no-defined') return null;
        return (
          <ActionIDRadioCard key={action.id} move={move} size={size} color={color} {...radio} />
        );
      })}
    </SimpleGrid>
  );
};

interface ActionIDRadioCardProps extends UseRadioProps {
  move: MoveTypeForException;
  size: number;
  color: string;
}

const ActionIDRadioCard: FC<ActionIDRadioCardProps> = (props) => {
  const { move, size, color } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps({});
  const checkbox = getCheckboxProps({});

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
          bg: color,
          color: 'white',
          borderColor: color,
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
