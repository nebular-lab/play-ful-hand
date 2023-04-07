import { HStack, useRadioGroup } from '@chakra-ui/react';
import { FC } from 'react';

import { EditModeCard } from '../EditModeCard';
export type EditModeGroupProps = { setEditMode: (value: 'square' | 'one') => void };
export const EditModeGroup: FC<EditModeGroupProps> = (props) => {
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
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return <EditModeCard key={value} value={value} radioProps={radio} />;
      })}
    </HStack>
  );
};
