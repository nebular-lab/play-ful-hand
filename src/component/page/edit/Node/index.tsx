import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

import { editingHandNodeState } from '@/store/editingHandNodeState';

import { PositionNode } from './PositionNode';

export type NodeProps = {
  path: Array<number | string>;
};
export const Node: FC<NodeProps> = (props) => {
  const { path } = props;
  const [editingHandNode] = useRecoilState(editingHandNodeState);

  return (
    <Flex>
      {editingHandNode.child && (
        <PositionNode {...editingHandNode.child} path={[...path, 'child']} />
      )}
    </Flex>
  );
};
