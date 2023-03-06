import { CardType } from '@/types/schema';
import { type FC } from 'react';

export type CardProps = CardType;

export const Card: FC<CardProps> = (props) => {
  const { num, mark } = props;
  const bgColor =
    mark == 'h'
      ? 'bg-red-400'
      : mark == 'c'
      ? 'bg-green-400'
      : mark == 'd'
      ? 'bg-blue-400'
      : mark == 's'
      ? 'bg-gray-400'
      : '';
  return <div className={`${bgColor} flex h-6  w-5 items-center justify-center rounded text-sm text-white`}>{num}</div>;
};
