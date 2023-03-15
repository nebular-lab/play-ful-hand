import produce from 'immer';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { editingActionIDState } from '@/store/editingActionIDState';
import { editingHandRangeState } from '@/store/editingHandRangeState';

export const useHandRange = () => {
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  const editingActionID = useRecoilValue(editingActionIDState);

  const updateEditingHandRange = useCallback(
    (indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number }) => {
      return setEditingHandRange((prev) => {
        const nextState = produce(prev, (draft) => {
          draft[indexes.colIndex13][indexes.rowIndex13][indexes.colIndex4][indexes.rowIndex4] =
            editingActionID ?? 1;
        });
        return nextState;
      });
    },
    [editingActionID],
  );
  const updateEditingHandRangeSquare = useCallback(
    (indexes: { colIndex13: number; rowIndex13: number }) => {
      return setEditingHandRange((prev) => {
        const nextState = produce(prev, (draft) => {
          for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
              if (draft[indexes.colIndex13][indexes.rowIndex13][col][row] !== 0) {
                draft[indexes.colIndex13][indexes.rowIndex13][col][row] = editingActionID ?? 1;
              }
            }
          }
        });
        return nextState;
      });
    },
    [editingActionID],
  );
  return { updateEditingHandRange, updateEditingHandRangeSquare, editingHandRange };
};
