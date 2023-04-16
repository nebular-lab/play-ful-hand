import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

import { Layout } from '@/component/layout/Layout';
import { editingHandNodeState } from '@/store/editingHandNodeState';

import { Draw } from './draw';
import { Tree } from './Node';

export const HandTreePage: FC = () => {
  const [editingHandNode] = useRecoilState(editingHandNodeState);
  const path: Array<number | string> = [];
  return (
    <Layout isEditPage={true}>
      <Box flex="1" overflowY="auto" px={10} py={5} bg="bg">
        <Tree handNode={editingHandNode} path={path} />
      </Box>
      <Box position="sticky" bottom="0" zIndex="1000" bg="bg" px={10} pb={5}>
        <Draw />
      </Box>
    </Layout>
  );
};
