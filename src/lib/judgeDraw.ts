type Card = {
  num: number;
  mark: number;
};
// カードの配列を昇順に並べ替える関数
function sortCards(cards: Card[]): Card[] {
  return cards.sort((a, b) => a.num - b.num);
}
function isStraightDraw(
  boardCards: Card[],
  handCards: Card[],
): { isOpenEnd: boolean; isGutshot: boolean } {
  const possibleStraights = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9],
    [6, 7, 8, 9, 10],
    [7, 8, 9, 10, 11],
    [8, 9, 10, 11, 12],
    [9, 10, 11, 12, 0],
  ];

  const allCardsNums = [...boardCards, ...handCards].map((card) => card.num);
  const isOpenEnded = false;
  const isGutshot = false;
  const straightCompleteCards = new Set();
  for (const straight of possibleStraights) {
    const missingCards = straight.filter((num) => !allCardsNums.includes(num));
    if (missingCards.length === 1) {
      straightCompleteCards.add(missingCards[0]);
    }
  }

  return {
    isOpenEnd: straightCompleteCards.size >= 2,
    isGutshot: straightCompleteCards.size === 1,
  };
}

function isFlushDraw(boardCards: Card[], handCards: Card[]): boolean {
  const suitedCards = new Array(4).fill(0);
  [...boardCards, ...handCards].forEach((card) => suitedCards[card.mark]++);
  return suitedCards.some((count) => count == 4);
}

export const judgeDraw = (boardCards: Card[], handCards: Card[]) => {
  const straightDraw = isStraightDraw(boardCards, handCards);
  const flushDraw = isFlushDraw(boardCards, handCards);

  if ((straightDraw.isGutshot || straightDraw.isOpenEnd) && flushDraw) return 'ComboDraw';
  if (straightDraw.isOpenEnd) return 'OESD';
  if (straightDraw.isGutshot) return 'GSSD';
  if (flushDraw) return 'FlushDraw';
  return 'nothing';
};
