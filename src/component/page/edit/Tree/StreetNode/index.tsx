import { FC } from 'react';

import { StreetTag } from '@/component/common/Tag/StreetTag';

import { CardNode } from '../CardNode';
import { StreetNodeType } from '@/types/schema';

export const StreetNode: FC<StreetNodeType> = (streetNode) => {
  return (
    <div className="flex gap-1">
      <StreetTag street={streetNode.street} pot={streetNode.pot} stack={streetNode.stack} />
      <ul className="space-y-1">
        {streetNode.children?.map((cardNode) => (
          <CardNode key={cardNode.id} {...cardNode} />
        ))}
      </ul>
    </div>
  );
};
