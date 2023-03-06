import { FC } from 'react';

export type StreetTagProps = {
  street: 'FLOP' | 'TURN' | 'RIVER';
  pot: number;
  stack: number;
};

export const StreetTag: FC<StreetTagProps> = (props) => {
  const { street, pot, stack } = props;
  return (
    <div>
      <div className="flex w-24 flex-col items-center gap-2 rounded-md border-2 border-gray-400 bg-white py-1">
        <div className="rounded-2xl border border-gray-400 p-1">{street}</div>
        <div>POT {pot}</div>
        <div>STACK {stack}</div>
      </div>
    </div>
  );
};
