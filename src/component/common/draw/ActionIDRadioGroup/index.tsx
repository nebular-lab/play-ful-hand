import { SimpleGrid, useRadioGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import { editingSelectedActionIDState } from '@/store/editingSelectedActionIDState';

import { ActionIDRadioCard } from '../ActionIDRadioCard';

export const ActionIDRadioGroup: FC = (props) => {
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
