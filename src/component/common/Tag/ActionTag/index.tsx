import { MoveType } from '@/types/schema';
import { FC } from 'react';


export type ActionTagProps = {
  move: MoveType;
  size: number;
};

export const ActionTag: FC<ActionTagProps> = (props) => {
  const { move, size } = props;
  const moveColor =
    move == 'CALL'
      ? 'border-green-400'
      : move == 'CHECK'
      ? 'border-green-400'
      : move == 'ALLIN'
      ? 'border-red-400'
      : move == 'BET'
      ? 'border-red-400'
      : move == 'RAISE'
      ? 'border-orange-400'
      : move == 'FOLD'
      ? 'border-blue-400'
      : '';
  return (
    <div className={`flex h-8 w-20 items-center justify-center rounded-md border-2 ${moveColor} bg-white`}>
      {move} {size == 0 ? '' : size}
    </div>
  );
};
