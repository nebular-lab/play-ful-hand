import { SimpleGrid, useRadioGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { editingActionIDState } from '@/store/editingActionIDState';
import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';

import { ActionIDRadioCard } from '../ActionIDRadioCard';

export const ActionIDRadioGroup: FC = (props) => {
  const setEditingActionID = useSetRecoilState(editingActionIDState);
  const registeredActions = useRecoilValue(editingRegisteredActionsState);
  const handleChange = (value: string) => {
    setEditingActionID(Number(value));
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
        const radio = getRadioProps({ value: action.id });
        const move = action.action.move;
        const size = action.action.size;
        if (move == 'no-defined') return null;
        return (
          <ActionIDRadioCard key={action.id} {...radio}>
            {move == 'no-set' ? '消去' : move} {size == 0 ? '' : size}
          </ActionIDRadioCard>
        );
      })}
    </SimpleGrid>
  );
};
