import { limit, QueryDocumentSnapshot } from 'firebase/firestore';
import { SWRInfiniteKeyLoader } from 'swr/infinite';

import { HandNodeType } from '@/types/schema';

import { fetchHandNodesSnapshot } from './fetchHandNodes';

// previousPageData の型でもある
type FetcherOutputType = {
  handNodes: HandNodeType[];
  cursor: QueryDocumentSnapshot<Omit<HandNodeType, 'child'>>;
};
type FetcherInputType = {
  pageIndex: number;
  nextCursor?: QueryDocumentSnapshot<Omit<HandNodeType, 'child'>>;
};
export const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData: FetcherOutputType) => {
  if (previousPageData && !previousPageData.handNodes.length) return null; // 最後に到達した
  if (pageIndex === 0) return { pageIndex, limit }; //最初のキー
  return { pageIndex, limit, nextCursor: previousPageData.cursor }; //次からのキー;
};

export const fetcher = async (key: FetcherInputType): Promise<FetcherOutputType> => {
  // カーソル無し → 初期ページ
  // カーソル有り → 2ページ目以降
  const { nextCursor } = key;
  const LIMIT = 3;
  const handNodesData = nextCursor
    ? await fetchHandNodesSnapshot(LIMIT, nextCursor)
    : await fetchHandNodesSnapshot(LIMIT);
  const handNodes = handNodesData.handNodes;
  // 次のカーソルを返す
  const cursor = handNodesData.querySnapshot.docs[handNodesData.querySnapshot.docs.length - 1];
  return { handNodes, cursor };
};
