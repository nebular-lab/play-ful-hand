/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import produce from 'immer';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { editingActionIDState } from '@/store/editingActionIDState';
import { editingHandNodeState } from '@/store/editingHandNodeState';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';
import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import { defaultHandRange } from '@/types/data/defaultHandRange';
import { ActionNodeType, CardNodeType, CardType } from '@/types/schema';

export const useHandNode = () => {
  const [editingHandNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  const [editingNodePath, setEditingNodePath] = useRecoilState(editingNodePathState);
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  const [editingActionID, setEditingActionID] = useRecoilState(editingActionIDState);
  const [editingRegisteredActions, setEditingRegisteredActions] = useRecoilState(
    editingRegisteredActionsState,
  );
  const addStreetCard = useCallback(
    (cards: CardType[]) => {
      const nextState = produce(editingHandNode, (draft) => {
        let temp: any = draft;
        editingNodePath.forEach((key) => {
          temp = temp[key];
        });
        const flopCardNode: CardNodeType = {
          id: '1',
          cards: cards,
          child: {
            id: '4',
            position: 'OOP',
            type: 'PositionNode',
            handRange: defaultHandRange,
          },
        };

        temp.child.push(flopCardNode);
      });
      setEditingHandNode(nextState);
    },
    [editingHandNode, editingNodePath],
  );
  const registerHandRange = useCallback(() => {
    const nextState = produce(editingHandNode, (draft) => {
      let temp: any = draft;
      editingNodePath.forEach((key) => {
        temp = temp[key];
      });
      temp.handRange = editingHandRange;
      const actionIDs = new Set<number>();
      editingHandRange.forEach((row13) => {
        row13.forEach((col13) => {
          col13.forEach((row4) => {
            row4.forEach((col) => {
              actionIDs.add(col);
            });
          });
        });
      });
      const actionNodes: ActionNodeType[] = [];
      actionIDs.forEach((actionID) => {
        // no-defineとno-setを除外
        if (actionID == 0 || actionID == 1) return;
        editingRegisteredActions.forEach((registeredAction) => {
          if (
            registeredAction.id == actionID &&
            registeredAction.action.move !== 'no-defined' &&
            registeredAction.action.move !== 'no-set'
          ) {
            const actionNode: ActionNodeType = {
              id: String(actionID),
              move: registeredAction.action.move,
              size: registeredAction.action.size,
            };
            if (registeredAction.action.move == 'CALL') {
              actionNode['child'] = {
                id: '1',
                type: 'StreetNode',
                street: 'FLOP',
                stack: 100,
                pot: 100,
              };
            } else if (temp.position == 'OOP') {
              actionNode['child'] = {
                id: '1',
                type: 'PositionNode',
                position: 'IP',
                handRange: defaultHandRange,
              };
            } else if (
              registeredAction.action.move == 'ALLIN' ||
              registeredAction.action.move == 'BET' ||
              registeredAction.action.move == 'RAISE'
            ) {
              actionNode['child'] = {
                id: '1',
                type: 'PositionNode',
                position: 'OOP',
                handRange: defaultHandRange,
              };
            } else {
              actionNode['child'] = {
                id: '1',
                type: 'StreetNode',
                street: 'FLOP',
                stack: 100,
                pot: 100,
              };
            }
            actionNodes.push(actionNode);
          }
        });
      });
      temp['child'] = actionNodes;
    });

    setEditingHandNode(nextState);
  }, [editingHandNode, editingHandRange]);
  return { addStreetCard, registerHandRange };
};
