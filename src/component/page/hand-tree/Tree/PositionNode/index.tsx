import { FC } from 'react';

import { PositionTag } from '@/component/common/Tag/PositionTag';
import { PositionNodeType } from '@/types/db';

import { ActionNode } from '../ActionNode';

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
