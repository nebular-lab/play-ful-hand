/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import produce from 'immer';
import _ from 'lodash';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { createHandNode } from '@/lib/firebase/firestore/createHandNode';
import { editingActionIDState } from '@/store/editingActionIDState';
import { editingHandNodeState } from '@/store/editingHandNodeState';
import { editingHandRangePositionState } from '@/store/editingHandRangePosition';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';
import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import { ActionNodeType, CardNodeType, CardType } from '@/types/schema';

import { useAuth } from './useAuth';

export const useHandNode = () => {
  const [editingHandNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  const [editingNodePath, setEditingNodePath] = useRecoilState(editingNodePathState);
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  const [editingActionID, setEditingActionID] = useRecoilState(editingActionIDState);
  const [editingRegisteredActions, setEditingRegisteredActions] = useRecoilState(
    editingRegisteredActionsState,
  );
  const [editingHandRangePosition, setEditingHandPosition] = useRecoilState(
    editingHandRangePositionState,
  );
  const { user } = useAuth();
  const addStreetCard = useCallback(
    (cards: CardType[]) => {
      const nextState = produce(editingHandNode, (draft) => {
        let temp: any = draft;
        editingNodePath.forEach((key) => {
          temp = temp[key];
        });
        // この時点でtempはstreetNode
        const cardNode: CardNodeType = {
          id: String(Date.now()),
          cards: cards,
          child: {
            id: String(Date.now()),
            position: 'OOP',
            type: 'PositionNode',
            handRange: { OOP: temp.handRange.OOP, IP: temp.handRange.IP },
          },
        };
        if (!temp['child']) temp['child'] = [];
        temp.child.push(cardNode);
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
      editingHandRange[editingHandRangePosition].forEach((row13) => {
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
        const nextHandRange = _.cloneDeep(editingHandRange[editingHandRangePosition]);
        editingHandRange[editingHandRangePosition].forEach((row13, rowIndex13) => {
          row13.forEach((col13, colIndex13) => {
            col13.forEach((row4, rowIndex4) => {
              row4.forEach((col, colIndex4) => {
                if (col == actionID)
                  nextHandRange[rowIndex13][colIndex13][rowIndex4][colIndex4] = 1; //no-set
                else {
                  nextHandRange[rowIndex13][colIndex13][rowIndex4][colIndex4] = 0; //no-define
                }
              });
            });
          });
        });
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
            if (temp.position == 'OOP' && registeredAction.action.move == 'CALL') {
              // TODO 次のHandRangeをどこに保存するか。StreetNodeに保存するのがいいと思う
              actionNode['child'] = {
                id: '1',
                type: 'StreetNode',
                street: 'FLOP',
                handRange: { OOP: nextHandRange, IP: editingHandRange.IP },
                stack: 100,
                pot: 100,
              };
              setEditingHandPosition('OOP');
            } else if (temp.position == 'IP' && registeredAction.action.move == 'CALL') {
              actionNode['child'] = {
                id: '1',
                type: 'StreetNode',
                street: 'FLOP',
                handRange: { OOP: editingHandRange.OOP, IP: nextHandRange },
                stack: 100,
                pot: 100,
              };
              setEditingHandPosition('OOP');
            } else if (temp.position == 'OOP') {
              actionNode['child'] = {
                id: '1',
                type: 'PositionNode',
                position: 'IP',
                handRange: { OOP: nextHandRange, IP: editingHandRange.IP },
              };
              setEditingHandPosition('IP');
              setEditingHandRange({ OOP: nextHandRange, IP: editingHandRange.IP });
              setEditingNodePath([...editingNodePath, 'child']);
            } else if (
              registeredAction.action.move == 'ALLIN' ||
              registeredAction.action.move == 'BET' ||
              registeredAction.action.move == 'RAISE'
            ) {
              actionNode['child'] = {
                id: '1',
                type: 'PositionNode',
                position: 'OOP',
                handRange: { OOP: editingHandRange.OOP, IP: nextHandRange },
              };
              setEditingHandPosition('OOP');
              setEditingHandRange({ OOP: editingHandRange.OOP, IP: nextHandRange });
              setEditingNodePath([...editingNodePath, 'child']);
            } else {
              // TODO 次のHandRangeをどこに保存するか。StreetNodeに保存するのがいいと思う
              actionNode['child'] = {
                id: '1',
                type: 'StreetNode',
                street: 'FLOP',
                handRange: { OOP: editingHandRange.OOP, IP: nextHandRange },
                stack: 100,
                pot: 100,
              };
              setEditingHandPosition('OOP');
            }
            actionNodes.push(actionNode);
          }
        });
      });
      temp['child'] = actionNodes;
    });

    setEditingHandNode(nextState);
  }, [
    editingHandNode,
    editingHandRange,
    editingHandRangePosition,
    editingNodePath,
    editingRegisteredActions,
  ]);

  const saveHandNode = useCallback(async () => {
    if (!user) throw Error;
    console.log(user);
    const userName = user.displayName;
    const iconURL = user.photoURL;
    const nextState = produce(editingHandNode, (draft) => {
      draft.userName = userName ?? '匿名';
      draft.iconURL = iconURL ?? '';
    });
    await createHandNode(_.omit(nextState, ['id']));
  }, [editingHandNode]);
  return { addStreetCard, registerHandRange, saveHandNode };
};
