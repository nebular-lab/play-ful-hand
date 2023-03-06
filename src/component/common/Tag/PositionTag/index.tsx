import { FC } from 'react';

import { PositionType } from '@/types/type';

export type PositionTagProps = {
  position: PositionType;
};

export const PositionTag: FC<PositionTagProps> = (props) => {
  const { position } = props;
  return (
    <div className="flex h-8 w-10 items-center justify-center rounded-md border border-gray-400 bg-white">
      {position}
    </div>
  );
};
