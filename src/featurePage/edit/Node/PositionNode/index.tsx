import { UnorderedList } from '@chakra-ui/react';
import _ from 'lodash';
import { FC } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { PositionTag } from '@/featurePage/edit/Tag/PositionTag';
import { editingActionsIDState } from '@/store/editingActionsIDState';
import { editingHandRangePositionState } from '@/store/editingHandRangePosition';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';
import { PositionNodeType } from '@/types/schema';

import { ActionNode } from '../ActionNode';

export const PositionNode: FC<PositionNodeType & { path: Array<number | string> }> = (
  positionNode,
) => {
  const setEditingHandRange = useSetRecoilState(editingHandRangeState);
  const [editingNodePath, setEditingNodePath] = useRecoilState(editingNodePathState);
  const setEditingHandRangePosition = useSetRecoilState(editingHandRangePositionState);
  const setEditingActionIDs = useSetRecoilState(editingActionsIDState);
  console.log(positionNode.actionIDs);

  return (
    <>
      <PositionTag
        position={positionNode.position}
        isSelected={_.isEqual(editingNodePath, positionNode.path)}
        onClick={() => {
          setEditingHandRange(positionNode.handRange);
          setEditingNodePath(positionNode.path);
          setEditingHandRangePosition(positionNode.position);
          setEditingActionIDs(positionNode.actionIDs);
        }}
      />

      <UnorderedList m={0} spacing={2}>
        {positionNode.child?.map((actionNode, index) => (
          <ActionNode
            key={actionNode.id}
            {...actionNode}
            path={[...positionNode.path, 'child', index]}
          />
        ))}
      </UnorderedList>
    </>
  );
};
