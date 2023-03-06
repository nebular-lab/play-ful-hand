import { CardType } from '@/types/schema';
import { FC } from 'react';


import { Card } from '../../Card';

export type CardTagProps = {
  cards: CardType[];
};

export const CardTag: FC<CardTagProps> = (props) => {
  const { cards } = props;
  return (
    <div className="inline-block">
      <div className="flex h-8 items-center  justify-center gap-1 rounded-md border border-gray-400 bg-white px-2">
        {cards.map((card) => (
          <Card key={card.num + card.mark} num={card.num} mark={card.mark} />
        ))}
      </div>
    </div>
  );
};
