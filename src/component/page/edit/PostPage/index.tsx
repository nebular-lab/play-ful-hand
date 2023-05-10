import { Box, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';

import { Layout } from '@/component/layout/Layout';
import { fetchHandNode } from '@/lib/firebase/firestore/fetchFromFirestore';
import { Draw } from '@/page/edit/draw';
import { Node } from '@/page/edit/Node';
import { editingHandNodeState } from '@/store/editingHandNodeState';
export type PostPageProps = {
  id: string;
};
export const PostPage: FC<PostPageProps> = (props) => {
  const { id } = props;
  const { data, isLoading } = useSWR(id, fetchHandNode);
  const [editingHandNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  if (isLoading || !data)
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  setEditingHandNode(data);
  const path: Array<number | string> = [];
  return (
    <Layout>
      <Box flex="1" overflowY="auto" px={10}>
        <Node path={path} />
      </Box>
      <Box position="sticky" bottom="0" zIndex="1000" bg="white" px={10} pb={5}>
        <Draw />
      </Box>
    </Layout>
  );
};
