/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import produce from 'immer';
import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Button } from '@/component/common/Button';
import { editingHandNodeState } from '@/store/editingHandNodeState';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';

import { EditModeGroup } from './EditModeGroup';
import { HandRange } from './HandRange';
import { RadioGroup } from './RadioGroup';

export const Draw: FC = (props) => {
  const editingNodePath = useRecoilValue(editingNodePathState);
  const [editingNode, setEditingHandNode] = useRecoilState(editingHandNodeState);
  const editingHandRange = useRecoilValue(editingHandRangeState);
  const registerHandRange = () => {
    const nextState = produce(editingNode, (draft) => {
      let temp: any = draft;
      editingNodePath.forEach((key) => {
        temp = temp[key];
      });
      temp.handRange = editingHandRange;
    });
    setEditingHandNode(nextState);
  };
  return (
    <div className="flex gap-10">
      <HandRange />
      <div className=" flex w-full flex-col gap-4">
        <RadioGroup />
        <div>色塗りモード</div>
        <EditModeGroup />
        <Button onClick={registerHandRange}>登録</Button>
      </div>
    </div>
  );
};
