import {
  Avatar,
  Button,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Layout } from '@/component/layout/Layout';
import { getKey, handNodeDocFetcher } from '@/lib/firebase/firestore/handNodeDocFetcher';
import { timestampToDate } from '@/lib/getDate';

export const DashboardPage: FC = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, handNodeDocFetcher);

  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <Flex direction={'column'} px={'36'} py={10}>
        <Flex>
          <Text fontWeight={'bold'} fontSize={'2xl'}>
            ハンドツリー一覧
          </Text>
        </Flex>
        <Flex>
          <Button
            onClick={() => {
              setSize(size - 1).catch((e) => console.error(e));
            }}
          >
            前
          </Button>
          <Spacer />
          <Button
            onClick={() => {
              setSize(size + 1).catch((e) => console.error(e));
            }}
          >
            次
          </Button>
        </Flex>
        <TableContainer>
          <Table>
            <Thead>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Thead>
            <Tbody>
              {data[size - 1]?.handNodes.map((handNode) => {
                const { year, month, day } = timestampToDate(handNode.createdAt);
                return (
                  <Link href={`dashboard/${handNode.id}`} key={handNode.id}>
                    <Tr>
                      <Td>
                        <Avatar />
                      </Td>
                      <Td>{handNode.userName}</Td>
                      <Td>{handNode.title}</Td>
                      <Td>{handNode.title}</Td>
                      <Td>{`${year}年${month}月${day}日`}</Td>
                    </Tr>
                  </Link>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Layout>
  );
};
