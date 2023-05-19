import { CardType, DrawKindType, HandKindType, HandRangeType } from '@/types/schema';

import { convertCardValue, convertSuit } from './convertCardType';
import { judgeDraw } from './judgeDraw';
import { judgeHand } from './judgeHand';

export const handDrawKind = (handRange: HandRangeType, boardCards: CardType[]) => {
  const handKinds: HandKindType = {
    straightFlush: [],
    fourCard: [],
    fullHouse: [],
    flush: [],
    straight: [],
    threeCard: [],
    twoPair: [],
    overPocket: [],
    topHit: [],
    secondPocket: [],
    secondHit: [],
    lowPair: [],
    AHigh: [],
    KHigh: [],
    nothing: [],
  };
  const drawKinds: DrawKindType = {
    comboDraw: [],
    OESD: [],
    GSSD: [],
    BDSD: [],
    flushDraw: [],
    noDraw: [],
  };
  for (let col13 = 0; col13 < 13; col13++) {
    for (let row13 = 0; row13 < 13; row13++) {
      for (let col4 = 0; col4 < 4; col4++) {
        for (let row4 = 0; row4 < 4; row4++) {
          if (handRange[row13][col13][row4][col4] === 1) {
            const numBoardCards = boardCards.map((card) => {
              return { num: convertCardValue(card.num), mark: convertSuit(card.mark) };
            });
            const handKind = judgeHand(numBoardCards, [
              { num: col13, mark: col4 },
              { num: row13, mark: row4 },
            ]);
            const drawKind = judgeDraw(numBoardCards, [
              { num: col13, mark: col4 },
              { num: row13, mark: row4 },
            ]);
            handKinds[handKind].push({ col13, row13, col4, row4 });
            drawKinds[drawKind].push({ col13, row13, col4, row4 });
          }
        }
      }
    }
  }
  return { handKinds, drawKinds };
};
