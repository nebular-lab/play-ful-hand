import { judgeDraw } from "./judgeDraw";

describe(`judgeDraw`, () => {
  const testCases = [
    {
      boardCards: [
        { num: 5, mark: 0 },
        { num: 6, mark: 0 },
        { num: 0, mark: 1 },
      ],
      handCards: [
        { num: 7, mark: 0 },
        { num: 8, mark: 0 },
      ],
      expected: 'ComboDraw',
    },
    {
      boardCards: [
        { num: 5, mark: 0 },
        { num: 6, mark: 0 },
        { num: 0, mark: 1 },
      ],
      handCards: [
        { num: 7, mark: 0 },
        { num: 8, mark: 3 },
      ],
      expected: 'OESD',
    },
    {
      boardCards: [
        { num: 5, mark: 0 },
        { num: 6, mark: 0 },
        { num: 0, mark: 1 },
      ],
      handCards: [
        { num: 4, mark: 0 },
        { num: 8, mark: 3 },
      ],
      expected: 'GSSD',
    },
    {
      boardCards: [
        { num: 5, mark: 0 },
        { num: 6, mark: 0 },
        { num: 0, mark: 1 },
      ],
      handCards: [
        { num: 4, mark: 0 },
        { num: 10, mark: 0 },
      ],
      expected: 'FlushDraw',
    },
    {
      boardCards: [
        { num: 5, mark: 0 },
        { num: 6, mark: 0 },
        { num: 0, mark: 0 },
      ],
      handCards: [
        { num: 4, mark: 0 },
        { num: 10, mark: 1 },
      ],
      expected: 'FlushDraw',
    },
  ];
  testCases.forEach(({ boardCards, handCards, expected }, index) => {
    it(`Test case ${index + 1}: ${expected}`, () => {
      expect(judgeDraw(boardCards, handCards)).toBe(expected);
    });
  });
});
