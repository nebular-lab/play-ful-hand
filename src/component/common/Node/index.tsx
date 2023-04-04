import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { HandNodeType } from '@/types/schema';

import { PositionNode } from './PositionNode';

export type HandTreeProps = {
  handNode: HandNodeType;
  path: Array<number | string>;
};
export const Tree: FC<HandTreeProps> = (props) => {
  const { handNode, path } = props;
  return (
    <Flex>{handNode.child && <PositionNode {...handNode.child} path={[...path, 'child']} />}</Flex>
  );
};
