import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { CardType } from '@/types/schema';

import { Card } from '../../../../component/Card';

export type CardTagProps = {
  cards: CardType[];
};

export const CardTag: FC<CardTagProps> = (props) => {
  const { cards } = props;
  return (
    <Flex
      border={'2px'}
      borderColor={'stroke'}
      rounded={'md'}
      p={'2'}
      h={8}
      w={20}
      justifyContent={'center'}
      alignItems={'center'}
      gap={1}
    >
      {cards.map((card) => (
        <Card key={card.num + card.mark} num={card.num} mark={card.mark} size={'sm'} />
      ))}
    </Flex>
  );
};
