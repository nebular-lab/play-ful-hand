import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useRecoilValue } from 'recoil';

import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import { editModeState } from '@/store/editModeState';

export type HandOneProps = {
  hand: number;
  isMouseDown: boolean;
  indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number };
  updateEditingHandRange: (indexes: {
    colIndex13: number;
    rowIndex13: number;
    colIndex4: number;
    rowIndex4: number;
  }) => void;
};

export const HandOne: FC<HandOneProps> = memo((props) => {
  const { isMouseDown, hand: actionNumber, indexes, updateEditingHandRange } = props;

  const registeredActions = useRecoilValue(editingRegisteredActionsState);
  const editMode = useRecoilValue(editModeState);

  const actionColor = registeredActions.find(
    (registeredAction) => actionNumber == registeredAction.id,
  );
  const onMouseOver = () => {
    if (isMouseDown && editMode == 'one') {
      updateEditingHandRange(indexes);
    }
  };
  const onClick = () => {
    if (editMode == 'one') updateEditingHandRange(indexes);
  };

  if (actionColor?.action.move !== 'no-defined' && actionColor !== undefined) {
    return (
      <Box
        h={2}
        w={2}
        bg={actionColor.color}
        border={'1px'}
        borderColor={'gray.200'}
        onMouseOver={onMouseOver}
        onClick={onClick}
      ></Box>
    );
  } else {
    return <Box h={2} w={2}></Box>;
  }
});
