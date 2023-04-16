import { Box } from '@chakra-ui/react';
import { FC, memo, MutableRefObject } from 'react';
import { useRecoilValue } from 'recoil';

import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';

export type HandOneProps = {
  hand: number;
  isMouseDownRef: MutableRefObject<boolean>;
  indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number };
  updateEditingHandRange: (
    indexes: {
      colIndex13: number;
      rowIndex13: number;
      colIndex4: number;
      rowIndex4: number;
    },
    selectedActionID: number,
  ) => void;
  editModeRef: MutableRefObject<'square' | 'one'>;
  selectedActionIDRef: MutableRefObject<number>;
};

export const HandOne: FC<HandOneProps> = memo((props) => {
  const {
    isMouseDownRef,
    hand: actionNumber,
    indexes,
    updateEditingHandRange,
    editModeRef,
    selectedActionIDRef,
  } = props;
  const registeredActions = useRecoilValue(editingRegisteredActionsState);
  // const editMode = useRecoilValue(editModeState);

  const actionColor = registeredActions.find(
    (registeredAction) => actionNumber == registeredAction.id,
  );
  const onMouseOver = () => {
    if (isMouseDownRef.current && editModeRef.current == 'one') {
      updateEditingHandRange(indexes, selectedActionIDRef.current);
    }
  };
  const onMouseDown = () => {
    if (editModeRef.current == 'one') updateEditingHandRange(indexes, selectedActionIDRef.current);
  };

  if (actionColor?.action.move !== 'no-defined' && actionColor !== undefined) {
    return (
      <Box
        h={2}
        w={2}
        bg={actionColor.color}
        border={'1px'}
        borderColor={'gray.200'}
        shadow={'xl'}
        boxSizing={'border-box'}
        onMouseOver={onMouseOver}
        onMouseDown={onMouseDown}
      ></Box>
    );
  } else {
    return <Box h={2} w={2}></Box>;
  }
});
