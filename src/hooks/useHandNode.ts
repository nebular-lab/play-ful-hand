/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import produce from 'immer';
import _ from 'lodash';
import { useCallback } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { UUID } from 'uuidjs';

import { defaultDrawKind, defaultHandKind } from '@/defaultData/handKind';
import { deletedHandRange } from '@/lib/deletedHandRange';
import { createHandNode } from '@/lib/firebase/firestore/createHandNode';
import { editingBoardState } from '@/store/editingBoard';
import { editingHandNodeState } from '@/store/editingHandNodeState';
import { editingHandRangePositionState } from '@/store/editingHandRangePosition';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';
import { editingRegisteredActionsState } from '@/store/editingRegisteredActionsState';
import {
  ActionNodeType,
  CardNodeType,
  CardType,
  HandRangeSchema,
  StreetNodeType,
} from '@/types/schema';

import { useAuth } from './useAuth';

export const useHandNode = () => {
  const [editingHandNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  const [editingNodePath, setEditingNodePath] = useRecoilState(editingNodePathState);
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);

  const [editingRegisteredActions, setEditingRegisteredActions] = useRecoilState(
    editingRegisteredActionsState,
  );
  const [editingHandRangePosition, setEditingHandPosition] = useRecoilState(
    editingHandRangePositionState,
  );
  const editingBoard = useRecoilValue(editingBoardState);
  const { user } = useAuth();

  const addStreetCard = useRecoilCallback(
    ({ snapshot, set }) =>
      async (addCards: CardType[]) => {
        const editingHandNodeSnap = await snapshot.getPromise(editingHandNodeState);
        const editingNodePathSnap = await snapshot.getPromise(editingNodePathState);
        const editingBoardSnap = await snapshot.getPromise(editingBoardState);
        const nextState = produce(editingHandNodeSnap, (draft) => {
          let tempNode: any = draft;
          editingNodePathSnap.forEach((key) => {
            tempNode = tempNode[key];
          });
          // この時点でtempNodeはstreetNode
          const streetNode: StreetNodeType = tempNode;
          const OOPHandRange = HandRangeSchema.parse(streetNode.handRange.OOP);
          const IPHandRange = HandRangeSchema.parse(streetNode.handRange.IP);
          // const { handKinds, drawKinds } = handDrawKind(OOPHandRange, editingBoard);
          const cardNode: CardNodeType = {
            id: String(Date.now()),
            cards: addCards,
            child: {
              id: String(Date.now()),
              position: 'OOP',
              type: 'PositionNode',
              actionIDs: [3, 4, 5, 6, 9],
              drawKind: defaultDrawKind,
              handKind: defaultHandKind,
              board: [...editingBoardSnap, ...addCards],
              handRange: {
                OOP: deletedHandRange(OOPHandRange, [...addCards, ...editingBoardSnap]),
                IP: deletedHandRange(IPHandRange, [...addCards, ...editingBoardSnap]),
              },
            },
          };
          if (!streetNode['child']) streetNode['child'] = [];
          streetNode.child.push(cardNode);
        });
        set(editingHandNodeState, nextState);
      },
    [],
  );

  const registerHandRange = useCallback(() => {
    const nextState = produce(editingHandNode, (draft) => {
      let tempNode: any = draft;
      editingNodePath.forEach((key) => {
        tempNode = tempNode[key];
      });

      tempNode.handRange = editingHandRange;
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

        //次のハンドレンジを作成
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
        const deletedNextHandRange = deletedHandRange(nextHandRange, editingBoard);

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
            const position = tempNode.position == 'OOP' ? 'OOP' : 'IP';
            const move = registeredAction.action.move;
            if (move == 'PREFLOP' && position == 'OOP') {
              actionNode['child'] = {
                id: UUID.generate(),
                type: 'PositionNode',
                position: 'IP',
                actionIDs: [2],
                handKind: defaultHandKind,
                drawKind: defaultDrawKind,
                board: editingBoard,
                handRange: { OOP: deletedNextHandRange, IP: editingHandRange.IP },
              };
              setEditingHandPosition('IP');
            } else if (move == 'PREFLOP' && position == 'IP') {
              actionNode['child'] = {
                id: UUID.generate(),
                type: 'StreetNode',
                street: 'FLOP',
                board: [],
                handRange: { OOP: editingHandRange.OOP, IP: deletedNextHandRange },
              };
              setEditingHandPosition('OOP');
            } else if (move == 'FOLD') {
              //何もしない
              const _ = 1;
            } else if (position == 'OOP' && move == 'CALL') {
              actionNode['child'] = {
                id: UUID.generate(),
                type: 'StreetNode',
                street: 'FLOP',
                board: editingBoard,
                handRange: { OOP: deletedNextHandRange, IP: editingHandRange.IP },
              };
              setEditingHandPosition('OOP');
            } else if (position == 'OOP') {
              let actionIDs: number[];
              if (move == 'CHECK') {
                actionIDs = [3, 4, 5, 6, 9];
              } else if (move == 'BET') {
                actionIDs = [7, 8, 9, 10];
              } else if (move == 'RAISE') {
                actionIDs = [7, 8, 9, 10];
              } else if (move == 'ALLIN') {
                actionIDs = [7, 8, 9];
              } else {
                actionIDs = [];
              }
              actionNode['child'] = {
                id: UUID.generate(),
                type: 'PositionNode',
                position: 'IP',
                actionIDs: actionIDs,
                handKind: defaultHandKind,
                drawKind: defaultDrawKind,
                board: editingBoard,
                handRange: { OOP: deletedNextHandRange, IP: editingHandRange.IP },
              };
              setEditingHandPosition('IP');
              setEditingHandRange({ OOP: deletedNextHandRange, IP: editingHandRange.IP });
            } else if (position == 'IP' && (move == 'CALL' || move == 'CHECK')) {
              actionNode['child'] = {
                id: UUID.generate(),
                type: 'StreetNode',
                street: 'FLOP',
                board: editingBoard,
                handRange: { OOP: editingHandRange.OOP, IP: deletedNextHandRange },
              };
              setEditingHandPosition('OOP');
            } else if (position == 'IP' && (move == 'ALLIN' || move == 'BET' || move == 'RAISE')) {
              let actionIDs: number[];
              if (move == 'ALLIN') {
                actionIDs = [7, 8, 9];
              } else if (move == 'BET' || move == 'RAISE') {
                actionIDs = [7, 8, 9, 10];
              } else {
                actionIDs = [];
              }

              actionNode['child'] = {
                id: UUID.generate(),
                type: 'PositionNode',
                position: 'OOP',
                actionIDs: actionIDs,
                handKind: defaultHandKind,
                drawKind: defaultDrawKind,
                board: editingBoard,
                handRange: { OOP: editingHandRange.OOP, IP: deletedNextHandRange },
              };
              setEditingHandPosition('OOP');
              setEditingHandRange({ OOP: editingHandRange.OOP, IP: nextHandRange });
              // setEditingNodePath([...editingNodePath, 'child']);
            } else {
              actionNode['child'] = {
                id: UUID.generate(),
                type: 'StreetNode',
                street: 'FLOP',
                board: editingBoard,
                handRange: { OOP: editingHandRange.OOP, IP: deletedNextHandRange },
              };
              setEditingHandPosition('OOP');
            }
            actionNodes.push(actionNode);
          }
        });
      });
      tempNode['child'] = actionNodes;
    });

    setEditingHandNode(nextState);
  }, [
    editingHandNode,
    editingHandRange,
    editingHandRangePosition,
    editingNodePath,
    editingRegisteredActions,
    editingBoard,
  ]);

  const saveHandNode = useCallback(async () => {
    if (!user) throw Error;
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
