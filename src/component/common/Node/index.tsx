import { FC } from 'react';

import { HandNodeType } from '@/types/schema';

import { StreetNode } from './StreetNode';

export type HandTreeProps = {
  handNode: HandNodeType;
  path: Array<number | string>;
};
export const Tree: FC<HandTreeProps> = (props) => {
  const { handNode, path } = props;
  return <>{handNode.child && <StreetNode {...handNode.child} path={[...path, 'child']} />}</>;
};
