import { Flex, UnorderedList, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { useSetRecoilState } from 'recoil';

import { StreetTag } from '@/component/common/Tag/StreetTag';
import { editingNodePathState } from '@/store/editingNodePathState';
import { StreetNodeType } from '@/types/schema';

import { CardNode } from '../CardNode';
import { FlopCardModal } from '../FlopCardModal';

export const StreetNode: FC<StreetNodeType & { path: Array<number | string> }> = (streetNode) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setEditingNodePath = useSetRecoilState(editingNodePathState);
  const onClick = () => {
    setEditingNodePath(streetNode.path);
    onOpen();
  };
  return (
    <Flex gap={1}>
      <StreetTag
        street={streetNode.street}
        pot={streetNode.pot}
        stack={streetNode.stack}
        onClick={onClick}
      />
      <FlopCardModal isOpen={isOpen} onClose={onClose} />
      <UnorderedList m={0}>
        {streetNode.child?.map((cardNode, index) => (
          <CardNode key={cardNode.id} {...cardNode} path={[...streetNode.path, 'child', index]} />
        ))}
      </UnorderedList>
    </Flex>
  );
};
