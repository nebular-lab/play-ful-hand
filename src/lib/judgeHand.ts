import { NumCardType } from '@/types/schema';

// カードの配列を昇順に並べ替える関数
function sortCards(cards: NumCardType[]): NumCardType[] {
  return cards.sort((a, b) => a.num - b.num);
}

// 同じ数字のカードの数を数える関数
function countSameNumberCards(cards: NumCardType[]): { num: number; count: number }[] {
  const counts: { [key: number]: number } = {};

  cards.forEach((card) => {
    counts[card.num] = (counts[card.num] || 0) + 1;
  });

  return Object.entries(counts).map(([num, count]) => ({
    num: parseInt(num),
    count: count,
  }));
}

type HandResult = {
  isStraight: boolean;
  isFlush: boolean;
  isStraightFlush: boolean;
};

// ストレートとフラッシュを同時に判定する関数
function getStraightAndFlush(cards: NumCardType[]): HandResult {
  const sortedCards = sortCards(cards);
  const markCounts: { [key: number]: number } = {};
  const numCounts: { [key: number]: number } = {};

  sortedCards.forEach((card) => {
    markCounts[card.mark] = (markCounts[card.mark] || 0) + 1;
    numCounts[card.num] = (numCounts[card.num] || 0) + 1;
  });

  const flushMark = Object.keys(markCounts).find((mark) => markCounts[parseInt(mark)] >= 5);
  const isFlush = !!flushMark;
  let isStraight = false;
  let isStraightFlush = false;
  let consecutiveCount = 1;

  for (let i = 0; i < sortedCards.length - 1; i++) {
    if (sortedCards[i].num + 1 === sortedCards[i + 1].num) {
      consecutiveCount += 1;
      if (consecutiveCount === 5) {
        isStraight = true;

        if (isFlush) {
          // ストレートフラッシュのチェック
          const straightFlushCards = sortedCards.slice(i - 3, i + 2);
          if (straightFlushCards.every((card) => card.mark === parseInt(flushMark))) {
            isStraightFlush = true;
          }
        }
      }
    } else if (sortedCards[i].num !== sortedCards[i + 1].num) {
      consecutiveCount = 1;
    }
  }

  // A2345のストレートチェック
  if (
    consecutiveCount === 4 &&
    sortedCards[0].num === 0 &&
    sortedCards[sortedCards.length - 1].num === 12
  ) {
    isStraight = true;

    if (isFlush) {
      // A2345のストレートフラッシュチェック
      const wheelStraightFlushCards = sortedCards
        .slice(0, 1)
        .concat(sortedCards.slice(sortedCards.length - 4));
      if (wheelStraightFlushCards.every((card) => card.mark === parseInt(flushMark))) {
        isStraightFlush = true;
      }
    }
  }

  return {
    isStraight: isStraight,
    isFlush: isFlush,
    isStraightFlush: isStraightFlush,
  };
}
// 役を判定する関数
export const judgeHand = (boardCards: NumCardType[], handCards: NumCardType[]) => {
  const cards = sortCards([...boardCards, ...handCards]);
  const sortedBoardCards = sortCards(boardCards);
  const sortedHandCards = sortCards(handCards);
  const sameNumberCounts = countSameNumberCards(cards);
  const boardSameNumberCounts = countSameNumberCards(boardCards);
  const { isFlush, isStraight, isStraightFlush } = getStraightAndFlush(cards);

  // ストレートフラッシュ
  if (isStraightFlush) return 'straightFlush';

  // 同じ数字のカードの数によって役を判定
  const fourOfAKind = sameNumberCounts.some((c) => c.count === 4);
  const threeOfAKind = sameNumberCounts.some((c) => c.count === 3);
  const twoThreeOfAKind = sameNumberCounts.filter((c) => c.count === 3).length >= 2;
  const twoPairs = sameNumberCounts.filter((c) => c.count === 2).length >= 2;
  const onePair = sameNumberCounts.some((c) => c.count === 2);

  const pairBoard = boardSameNumberCounts.some((c) => c.count === 2);

  if (fourOfAKind) return 'fourCard';
  if ((threeOfAKind && onePair) || twoThreeOfAKind) return 'fullHouse';
  if (isFlush) return 'flush';
  if (isStraight) return 'straight';
  if (threeOfAKind) return 'threeCard';
  if (twoPairs) return 'twoPair';

  const topBoardCard = Math.min(...boardCards.map((card) => card.num));

  // オーバーポケット
  if (handCards[0].num === handCards[1].num && handCards[0].num < topBoardCard && !pairBoard) {
    return 'overPocket';
  }

  // トップヒットワンペア
  if (handCards.some((handCard) => handCard.num === topBoardCard) && !pairBoard) {
    return 'topHit';
  }

  // セカンドポケットペア

  if (
    handCards[0].num === handCards[1].num &&
    handCards[0].num > sortedBoardCards[0].num &&
    handCards[0].num < sortedBoardCards[1].num &&
    !pairBoard
  ) {
    return 'secondPocket';
  }

  // セカンドヒット
  if (handCards.some((handCard) => handCard.num === sortedBoardCards[1].num) && !pairBoard) {
    return 'secondHit';
  }

  if (onePair && !pairBoard) {
    return 'lowPair';
  }

  // ペアがない場合
  const highestCard = sortCards(handCards)[0].num;
  if (highestCard === 0) return 'AHigh';
  if (highestCard === 1) return 'KHigh';

  return 'nothing';
};
