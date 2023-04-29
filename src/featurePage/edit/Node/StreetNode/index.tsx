import { Flex, UnorderedList, useDisclosure } from '@chakra-ui/react';
import _ from 'lodash';
import { FC } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { StreetTag } from '@/featurePage/edit/Tag/StreetTag';
import { editingHandRangeState } from '@/store/editingHandRangeState';
import { editingNodePathState } from '@/store/editingNodePathState';
import { StreetNodeType } from '@/types/schema';

import { FlopCardModal } from '../../FlopCardModal';
import { CardNode } from '../CardNode';

export const StreetNode: FC<StreetNodeType & { path: Array<number | string> }> = (streetNode) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingNodePath, setEditingNodePath] = useRecoilState(editingNodePathState);
  const setEditingHandRange = useSetRecoilState(editingHandRangeState);
  const onClick = () => {
    setEditingNodePath(streetNode.path);
    setEditingHandRange(streetNode.handRange);
    onOpen();
  };
  return (
    <Flex gap={1}>
      <StreetTag
        street={streetNode.street}
        onClick={onClick}
        isSelected={_.isEqual(editingNodePath, streetNode.path)}
      />
      <FlopCardModal isOpen={isOpen} onClose={onClose} />
      <UnorderedList m={0} spacing={1}>
        {streetNode.child?.map((cardNode, index) => (
          <CardNode key={cardNode.id} {...cardNode} path={[...streetNode.path, 'child', index]} />
        ))}
      </UnorderedList>
    </Flex>
  );
};
