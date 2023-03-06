import { NextPage } from 'next';
import useSWR from 'swr';

import { fetchHandTree } from '@/lib/fetch';
const Page: NextPage = () => {
  const { data, error, isLoading } = useSWR('data', fetchHandTree);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{data?.name}</div>;
};
export default Page;
