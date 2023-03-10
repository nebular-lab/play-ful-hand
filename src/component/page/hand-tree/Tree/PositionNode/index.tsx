import { FC } from 'react';

import { PositionTag } from '@/component/common/Tag/PositionTag';

import { ActionNode } from '../ActionNode';
import { PositionNodeType } from '@/types/schema';

export const PositionNode: FC<PositionNodeType> = (positionNode) => {
  return (
    <>
      <PositionTag position={positionNode.position} />
      <ul className="">
        {positionNode.children.map((actionNode) => (
          <ActionNode key={actionNode.id} {...actionNode} />
        ))}
      </ul>
    </>
  );
};
