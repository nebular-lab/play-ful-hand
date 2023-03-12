import { ChangeEventHandler, FC } from 'react';

import { MoveTypeForException } from '@/types/schema';

export type RadioCardProps = {
  id: number;
  move: MoveTypeForException;
  size: number;
  borderColor: string;
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const RadioCard: FC<RadioCardProps> = (props) => {
  const { id, move, size, borderColor, handleChange } = props;
  if (move == 'no-defined') return null;
  return (
    <div>
      <input
        type="radio"
        id={`${id}`}
        name="action"
        value={id}
        className={`peer hidden`}
        onChange={handleChange}
      />
      <label
        htmlFor={`${id}`}
        className={`flex w-full h-10 cursor-pointer items-center justify-center rounded-lg border ${borderColor} bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 `}
      >
        {move == 'no-set' ? '消去' : move} {size == 0 ? '' : size}
      </label>
    </div>
  );
};
