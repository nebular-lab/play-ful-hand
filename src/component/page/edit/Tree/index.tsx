import { FC } from 'react';

import { HandNodeType, PositionType } from '@/types/schema';

import { StreetNode } from './StreetNode';

export type HandTreeProps = {
  handNode: HandNodeType;
  path: Array<number | string>;
  treeInfo: {
    IP: PositionType;
    OOP: PositionType;
  };
};
export const Tree: FC<HandTreeProps> = (props) => {
  const { handNode, treeInfo, path } = props;
  return (
    <>
      <StreetNode {...handNode.flopNode} path={[...path, 'flopNode']} />
    </>
  );
};
