import { FC } from 'react';
import { useRecoilState } from 'recoil';

import { Layout } from '@/component/layout/Layout';
import { editingHandNodeState } from '@/store/editingHandNodeState';
import { HandNodeType, PositionType } from '@/types/schema';

import { Draw } from './draw';
import { Tree } from './Tree';

export type HandTreePageProps = {
  handNode: HandNodeType;
  treeInfo: {
    IP: PositionType;
    OOP: PositionType;
  };
};

export const HandTreePage: FC<HandTreePageProps> = (props) => {
  const { handNode, treeInfo } = props;
  const [editingHandNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  const path: Array<number | string> = [];
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <Tree handNode={editingHandNode} treeInfo={treeInfo} path={path} />
        <Draw />
      </div>
    </Layout>
  );
};
