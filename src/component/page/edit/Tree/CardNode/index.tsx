import { FC } from 'react';

import { CardTag } from '@/component/common/Tag/CardTag';

import { PositionNode } from '../PositionNode';
import { CardNodeType } from '@/types/schema';

export const CardNode: FC<CardNodeType> = (cardNode) => {
  return (
    <li className=" flex gap-1">
      <CardTag cards={cardNode.cards} />
      {cardNode.children && <PositionNode {...cardNode.children} />}
    </li>
  );
};
