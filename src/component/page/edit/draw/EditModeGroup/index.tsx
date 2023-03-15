import { HStack, useRadioGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useSetRecoilState } from 'recoil';

import { editModeState } from '@/store/editModeState';

import { EditModeCard } from '../EditModeCard';

export const EditModeGroup: FC = (props) => {
  const setEditMode = useSetRecoilState(editModeState);
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
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <EditModeCard key={value} {...radio}>
            {value}
          </EditModeCard>
        );
      })}
    </HStack>
  );
};
