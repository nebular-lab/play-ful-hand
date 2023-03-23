import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Layout } from '@/component/layout/Layout';
import { fetcher, getKey } from '@/lib/handNodeFetcher';

export const DashboardPage: FC = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <Flex direction={'column'}>
        ツリー一覧
        {data[size - 1]?.handNodes.map((handNode) => {
          return <div key={handNode.id}>{handNode.userName}</div>;
        })}
        <Button
          onClick={() => {
            setSize(size - 1).catch((e) => console.error(e));
          }}
        >
          前
        </Button>
        <Button
          onClick={() => {
            setSize(size + 1).catch((e) => console.error(e));
          }}
        >
          次
        </Button>
      </Flex>
    </Layout>
  );
};
