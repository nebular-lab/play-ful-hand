import { FC, memo } from 'react';

import { Layout } from '@/component/layout/Layout';
import { HandNodeType, PositionType } from '@/types/schema';

import { HandRange } from './draw/HandRange';
import { Tree } from './Tree';

export type HandTreePageProps = {
  handNode: HandNodeType;
  treeInfo: {
    IP: PositionType;
    OOP: PositionType;
  };
};

export const HandTreePage: FC<HandTreePageProps> = memo((props) => {
  const { handNode, treeInfo } = props;
  return (
    <Layout>
      <div className="flex flex-col">
        <Tree handNode={handNode} treeInfo={treeInfo} />
        <HandRange />
      </div>
    </Layout>
  );
});
