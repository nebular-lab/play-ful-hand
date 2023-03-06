import { FC } from 'react';

import { CardTag } from '@/component/common/Tag/CardTag';
import { CardNodeType } from '@/types/db';

import { PositionNode } from '../PositionNode';

export const CardNode: FC<CardNodeType> = (cardNode) => {
  return (
    <li className=" flex gap-1">
      <CardTag cards={cardNode.cards} />
      {cardNode.children && <PositionNode {...cardNode.children} />}
    </li>
  );
};
