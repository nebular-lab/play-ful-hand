import _ from 'lodash';

import { CardType, HandRangeType } from '@/types/schema';

import { convertCardValue, convertSuit } from './convertCardType';

export const deletedHandRange = (handRange: HandRangeType, deleteCards: CardType[]) => {
  const clonedHandRange = _.cloneDeep(handRange);
  deleteCards.forEach((card) => {
    const cardValue = convertCardValue(card.num);
    const cardSuit = convertSuit(card.mark);
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        clonedHandRange[i][cardValue][j][cardSuit] = 0;
        clonedHandRange[cardValue][i][cardSuit][j] = 0;
      }
    }
  });
  return clonedHandRange;
};
