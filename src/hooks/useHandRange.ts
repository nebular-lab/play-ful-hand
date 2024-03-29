import produce from 'immer';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { editingHandRangePositionState } from '@/store/editingHandRangePosition';
import { editingHandRangeState } from '@/store/editingHandRangeState';

export const useHandRange = () => {
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  const editingHandRangePosition = useRecoilValue(editingHandRangePositionState);

  const updateEditingHandRange = useCallback(
    (
      indexes: { colIndex13: number; rowIndex13: number; colIndex4: number; rowIndex4: number },
      selectedActionID: number,
    ) => {
      return setEditingHandRange((prev) => {
        const nextState = produce(prev, (draft) => {
          draft[editingHandRangePosition][indexes.colIndex13][indexes.rowIndex13][
            indexes.colIndex4
          ][indexes.rowIndex4] = selectedActionID ?? 1;
        });
        return nextState;
      });
    },
    [editingHandRangePosition],
  );
  const updateEditingHandRangeSquare = useCallback(
    (indexes: { colIndex13: number; rowIndex13: number }, selectedActionID: number) => {
      return setEditingHandRange((prev) => {
        const nextState = produce(prev, (draft) => {
          for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
              if (
                draft[editingHandRangePosition][indexes.colIndex13][indexes.rowIndex13][col][
                  row
                ] !== 0
              ) {
                draft[editingHandRangePosition][indexes.colIndex13][indexes.rowIndex13][col][row] =
                  selectedActionID ?? 1;
              }
            }
          }
        });
        return nextState;
      });
    },
    [editingHandRangePosition],
  );
  return {
    updateEditingHandRange,
    updateEditingHandRangeSquare,
    editingHandRange,
  };
};
