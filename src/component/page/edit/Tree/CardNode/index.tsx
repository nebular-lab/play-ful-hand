import { FC } from 'react';

import { CardTag } from '@/component/common/Tag/CardTag';
import { CardNodeType } from '@/types/schema';

import { PositionNode } from '../PositionNode';

export const CardNode: FC<CardNodeType & { path: Array<number | string> }> = (cardNode) => {
  return (
    <li className=" flex gap-1">
      <CardTag cards={cardNode.cards} />
      {cardNode.child && (
        <PositionNode {...cardNode.child} path={[...cardNode.path, 'child']} />
      )}
    </li>
  );
};
