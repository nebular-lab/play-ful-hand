import { Button, Flex, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import produce from 'immer';
import _ from 'lodash';
import { FC, useState } from 'react';

import { Card } from '@/component/common/Card';
import { useHandNode } from '@/hooks/useHandNode';
import { CardMarkType, CardNumType, CardType } from '@/types/schema';

export type FlopCardModalProps = { isOpen: boolean; onClose: () => void };

export const FlopCardModal: FC<FlopCardModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <CardForm onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};
type CardFormProps = {
  onClose: () => void;
};
const CardForm: FC<CardFormProps> = (props) => {
  const { onClose } = props;
  const { addStreetCard } = useHandNode();
  const nums: CardNumType[] = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
  const marks: CardMarkType[] = ['s', 'd', 'c', 'h'];
  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
  const onCardClick = (clickedCard: CardType) => {
    if (_.some(selectedCards, clickedCard)) {
      const nextState = produce(selectedCards, (draft) => {
        return draft.filter((selectedCard) => !_.isEqual(clickedCard, selectedCard));
      });
      setSelectedCards(nextState);
    } else {
      const nextState = produce(selectedCards, (draft) => {
        draft.push(clickedCard);
      });
      setSelectedCards(nextState);
    }
  };
  const onSubmit = () => {
    addStreetCard(selectedCards);
    onClose();
  };
  return (
    <Flex p={5} gap={2}>
      <Flex direction={'column'} gap={2}>
        <Flex h={'10'} gap={1}>
          {selectedCards.map((card) => {
            return (
              <Card key={`${card.mark} ${card.num}`} num={card.num} mark={card.mark} size={'md'} />
            );
          })}
        </Flex>
        <Flex direction={'column'} gap={1}>
          {marks.map((mark) => {
            return (
              <Flex key={mark} gap={1}>
                {nums.map((num) => (
                  <Card
                    key={num}
                    num={num}
                    mark={mark}
                    onClick={() => onCardClick({ num, mark })}
                    size={'md'}
                  />
                ))}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Button onClick={onSubmit}>決定</Button>
    </Flex>
  );
};
