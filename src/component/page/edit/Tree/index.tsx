import { HandNodeType, PositionType } from '@/types/schema';
import { FC } from 'react';

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
