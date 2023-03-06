import { PositionType } from '@/types/schema';
import { FC } from 'react';

export type PositionTagProps = {
  position: PositionType;
  onClick: () => void;
};

export const PositionTag: FC<PositionTagProps> = (props) => {
  const { position, onClick } = props;
  return (
    <div
      className="flex h-8 w-10 items-center justify-center rounded-md border border-gray-400 bg-white"
      onClick={onClick}
    >
      {position}
    </div>
  );
};
