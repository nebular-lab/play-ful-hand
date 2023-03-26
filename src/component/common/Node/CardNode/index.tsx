import { Flex, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

import { CardTag } from '@/component/common/Tag/CardTag';
import { CardNodeType } from '@/types/schema';

import { PositionNode } from '../PositionNode';

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
