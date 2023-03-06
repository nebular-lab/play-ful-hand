import { FC } from 'react';

import { ActionTag } from '@/component/common/Tag/ActionTag';
import { PositionTag } from '@/component/common/Tag/PositionTag';

import { StreetNode } from '../StreetNode';
import { ActionNodeType } from '@/types/schema';

export const ActionNode: FC<ActionNodeType> = (actionNode) => {
  const childrenType = actionNode.children?.type;
  return (
    <div className="gap-1">
      <ActionTag move={actionNode.move} size={actionNode.size} />
      {childrenType == 'StreetNode' && (
        <StreetNode
          id={actionNode.children?.id ?? ''}
          pot={actionNode.children?.pot ?? 0}
          street={actionNode.children?.street ?? 'FLOP'}
          stack={actionNode.children?.stack ?? 0}
          type={actionNode.children?.type ?? 'StreetNode'}
        />
      )}
      {childrenType == 'PositionNode' && <PositionTag position={actionNode.children?.position ?? 'BB'} />}
    </div>
  );
};
