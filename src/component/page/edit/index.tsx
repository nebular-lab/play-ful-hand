import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

import { Layout } from '@/component/layout/Layout';
import { editingHandNodeState } from '@/store/editingHandNodeState';

import { Draw } from './draw';
import { Tree } from './Tree';

export type HandTreePageProps = {
  // handNode: HandNodeType;
  // treeInfo: {
  //   IP: PositionType;
  //   OOP: PositionType;
  // };
};

export const HandTreePage: FC<HandTreePageProps> = (props) => {
  // const { handNode, treeInfo } = props;
  const [editingHandNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  const path: Array<number | string> = [];
  return (
    <Layout>
      <Box flex="1" overflowY="auto" px={10}>
        <Tree handNode={editingHandNode} path={path} />
      </Box>
      <Box position="sticky" bottom="0" zIndex="1000" bg="white" px={10} pb={5}>
        <Draw />
      </Box>
    </Layout>
  );
};
