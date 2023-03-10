import { FC } from 'react';

import { HandNodeType, PositionType } from '@/types/schema';

import { StreetNode } from './StreetNode';

export type HandTreeProps = {
  handNode: HandNodeType;
  treeInfo: {
    IP: PositionType;
    OOP: PositionType;
  };
};
export const Tree: FC<HandTreeProps> = (props) => {
  const { handNode, treeInfo } = props;
  return (
    <>
      <StreetNode {...handNode.flopNode} />
    </>
  );
};
