import { judgeHand } from './judgeHand';

describe('determineHand', () => {
  const testCases = [
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 4, mark: 0 },
        { num: 7, mark: 0 },
      ],
      handCards: [
        { num: 0, mark: 0 },
        { num: 11, mark: 0 },
      ],
      expected: 'flush',
    },
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 4, mark: 0 },
        { num: 7, mark: 0 },
      ],
      handCards: [
        { num: 0, mark: 1 },
        { num: 11, mark: 1 },
      ],
      expected: 'topHit',
    },
    {
      boardCards: [
        { num: 1, mark: 0 },
        { num: 4, mark: 0 },
        { num: 7, mark: 0 },
      ],
      handCards: [
        { num: 0, mark: 0 },
        { num: 0, mark: 1 },
      ],
      expected: 'overPocket',
    },
    {
      boardCards: [
        { num: 1, mark: 0 },
        { num: 2, mark: 0 },
        { num: 3, mark: 0 },
        { num: 4, mark: 0 },
      ],
      handCards: [
        { num: 0, mark: 0 },
        { num: 5, mark: 0 },
      ],
      expected: 'straightFlush',
    },
    {
      boardCards: [
        { num: 2, mark: 0 },
        { num: 3, mark: 1 },
        { num: 4, mark: 2 },
        { num: 5, mark: 0 },
        { num: 6, mark: 1 },
      ],
      handCards: [
        { num: 7, mark: 2 },
        { num: 8, mark: 1 },
      ],
      expected: 'straight',
    },
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 0, mark: 1 },
        { num: 0, mark: 2 },
        { num: 1, mark: 0 },
        { num: 2, mark: 1 },
      ],
      handCards: [
        { num: 0, mark: 3 },
        { num: 3, mark: 0 },
      ],
      expected: 'fourCard',
    },
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 1, mark: 1 },
        { num: 1, mark: 2 },
        { num: 2, mark: 0 },
        { num: 2, mark: 1 },
      ],
      handCards: [
        { num: 1, mark: 3 },
        { num: 2, mark: 2 },
      ],
      expected: 'fullHouse',
    },
    {
      boardCards: [
        { num: 3, mark: 1 },
        { num: 4, mark: 1 },
        { num: 5, mark: 2 },
        { num: 6, mark: 1 },
      ],
      handCards: [
        { num: 7, mark: 1 },
        { num: 8, mark: 1 },
      ],
      expected: 'flush',
    },
    {
      boardCards: [
        { num: 2, mark: 0 },
        { num: 3, mark: 1 },
        { num: 4, mark: 2 },
        { num: 5, mark: 0 },
      ],
      handCards: [
        { num: 1, mark: 2 },
        { num: 7, mark: 1 },
      ],
      expected: 'straight',
    },
    {
      boardCards: [
        { num: 9, mark: 0 },
        { num: 10, mark: 1 },
        { num: 11, mark: 2 },
        { num: 12, mark: 0 },
      ],
      handCards: [
        { num: 0, mark: 2 },
        { num: 7, mark: 1 },
      ],
      expected: 'straight',
    },
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 0, mark: 1 },
        { num: 0, mark: 2 },
        { num: 1, mark: 0 },
      ],
      handCards: [
        { num: 2, mark: 2 },
        { num: 3, mark: 0 },
      ],
      expected: 'threeCard',
    },
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 1, mark: 1 },
        { num: 1, mark: 2 },
        { num: 2, mark: 0 },
        { num: 8, mark: 1 },
      ],
      handCards: [
        { num: 2, mark: 2 },
        { num: 3, mark: 3 },
      ],
      expected: 'twoPair',
    },
    {
      boardCards: [
        { num: 4, mark: 0 },
        { num: 5, mark: 1 },
        { num: 6, mark: 2 },
      ],
      handCards: [
        { num: 0, mark: 2 },
        { num: 1, mark: 3 },
      ],
      expected: 'AHigh',
    },
    {
      boardCards: [
        { num: 4, mark: 0 },
        { num: 4, mark: 1 },
        { num: 6, mark: 2 },
      ],
      handCards: [
        { num: 0, mark: 2 },
        { num: 1, mark: 3 },
      ],
      expected: 'AHigh',
    },
    {
      boardCards: [
        { num: 4, mark: 0 },
        { num: 4, mark: 1 },
        { num: 6, mark: 2 },
      ],
      handCards: [
        { num: 5, mark: 2 },
        { num: 1, mark: 3 },
      ],
      expected: 'KHigh',
    },
    {
      boardCards: [
        { num: 0, mark: 0 },
        { num: 1, mark: 1 },
        { num: 1, mark: 2 },
      ],
      handCards: [
        { num: 4, mark: 2 },
        { num: 5, mark: 3 },
      ],
      expected: 'nothing',
    },

  ];

  testCases.forEach(({ boardCards, handCards, expected }, index) => {
    it(`Test case ${index + 1}: ${expected}`, () => {
      expect(judgeHand(boardCards, handCards)).toBe(expected);
    });
  });
});

