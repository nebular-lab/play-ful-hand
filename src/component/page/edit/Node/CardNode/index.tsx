import { Flex, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

import { CardNodeType } from '@/types/schema';

import { PositionNode } from '../PositionNode';
import { CardTag } from '../../Tag/CardTag';

export const CardNode: FC<CardNodeType & { path: Array<number | string> }> = (cardNode) => {
  return (
    <ListItem listStyleType={'none'} p={0}>
      <Flex gap={1}>
        <CardTag cards={cardNode.cards} />
        {cardNode.child && <PositionNode {...cardNode.child} path={[...cardNode.path, 'child']} />}
      </Flex>
    </ListItem>
  );
};
