type CardValueMap = {
  [key in 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2']: number;
};

export function convertCardValue(card: keyof CardValueMap) {
  const cardValues = {
    A: 0,
    K: 1,
    Q: 2,
    J: 3,
    T: 4,
    '9': 5,
    '8': 6,
    '7': 7,
    '6': 8,
    '5': 9,
    '4': 10,
    '3': 11,
    '2': 12,
  };

  return cardValues[card];
}
type SuitMap = {
  [key in 's' | 'h' | 'd' | 'c']: number;
};

export function convertSuit(suit: keyof SuitMap): number {
  const suitValues: SuitMap = {
    s: 0,
    h: 1,
    d: 2,
    c: 3,
  };

  return suitValues[suit];
}
