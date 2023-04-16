import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { defaultHandRange } from '@/defaultData/defaultHandRange';
import { ActionTag } from '@/featurePage/edit/Tag/ActionTag';
import { ActionNodeType } from '@/types/schema';

import { PositionNode } from '../PositionNode';
import { StreetNode } from '../StreetNode';

export const ActionNode: FC<ActionNodeType & { path: Array<number | string> }> = (actionNode) => {
  const childType = actionNode.child?.type;
  return (
    <Flex gap={1}>
      <ActionTag move={actionNode.move} size={actionNode.size} />
      {childType == 'StreetNode' && (
        <StreetNode
          id={actionNode.child?.id ?? ''}
          pot={actionNode.child?.pot ?? 0}
          street={actionNode.child?.street ?? 'FLOP'}
          stack={actionNode.child?.stack ?? 0}
          type={actionNode.child?.type ?? 'StreetNode'}
          path={[...actionNode.path, 'child']}
          handRange={actionNode.child?.handRange ?? { OOP: defaultHandRange, IP: defaultHandRange }}
          child={actionNode.child?.child}
        />
      )}
      {childType == 'PositionNode' && actionNode.child && (
        <PositionNode
          id={actionNode.child.id}
          type={actionNode.child.type}
          path={[...actionNode.path, 'child']}
          position={actionNode.child.position}
          handRange={actionNode.child.handRange}
          actionIDs={actionNode.child.actionIDs}
          child={actionNode.child.child}
        />
      )}
    </Flex>
  );
};
