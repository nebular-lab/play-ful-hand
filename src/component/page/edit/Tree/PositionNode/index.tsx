import { FC } from 'react';
import { useRecoilState } from 'recoil';

import { PositionTag } from '@/component/common/Tag/PositionTag';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { PositionNodeType } from '@/types/schema';

import { ActionNode } from '../ActionNode';

export const PositionNode: FC<PositionNodeType> = (positionNode) => {
  const [editingHandRange, setEditingHandRange] = useRecoilState(editingHandRangeState);
  return (
    <>
      <PositionTag
        position={positionNode.position}
        onClick={() => {
          console.log(positionNode.handRange);
          setEditingHandRange(positionNode.handRange);
        }}
      />
      <ul className="">
        {positionNode.children.map((actionNode) => (
          <ActionNode key={actionNode.id} {...actionNode} />
        ))}
      </ul>
    </>
  );
};
