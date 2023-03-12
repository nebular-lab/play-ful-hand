import { FC } from 'react';

import { StreetTag } from '@/component/common/Tag/StreetTag';
import { StreetNodeType } from '@/types/schema';

import { CardNode } from '../CardNode';

export const StreetNode: FC<StreetNodeType & { path: Array<number | string> }> = (streetNode) => {
  return (
    <div className="flex gap-1">
      <StreetTag street={streetNode.street} pot={streetNode.pot} stack={streetNode.stack} />
      <ul className="space-y-1">
        {streetNode.child?.map((cardNode, index) => (
          <CardNode key={cardNode.id} {...cardNode} path={[...streetNode.path, 'child', index]} />
        ))}
      </ul>
    </div>
  );
};
