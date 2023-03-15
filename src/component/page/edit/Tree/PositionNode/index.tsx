import { UnorderedList } from '@chakra-ui/react';
import { FC } from 'react';
import { useSetRecoilState } from 'recoil';

import { PositionTag } from '@/component/common/Tag/PositionTag';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';
import { PositionNodeType } from '@/types/schema';

import { ActionNode } from '../ActionNode';

export const PositionNode: FC<PositionNodeType & { path: Array<number | string> }> = (
  positionNode,
) => {
  const setEditingHandRange = useSetRecoilState(editingHandRangeState);
  const setEditingNodePath = useSetRecoilState(editingNodePathState);
  return (
    <>
      <PositionTag
        position={positionNode.position}
        onClick={() => {
          setEditingHandRange(positionNode.handRange);
          setEditingNodePath(positionNode.path);
        }}
      />

      <UnorderedList  m={0}>
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
