import { Meta, StoryObj } from '@storybook/react';

import { defaultHandRange } from '@/defaultData/defaultHandRange';

import { Node } from '.';

type T = typeof Node;
type Story = StoryObj<T>;

export default {
  component: Node,
  args: {
    treeInfo: {
      IP: 'BTN',
      OOP: 'BB',
    },
    handNode: {
      id: '111',
      flopNode: {
        type: 'StreetNode',
        street: 'FLOP',
        pot: 100,
        stack: 100,
        children: [
          {
            id: '111',
            cards: [
              { num: '2', mark: 'd' },
              { num: '3', mark: 'c' },
              { num: 'T', mark: 's' },
            ],
            children: {
              id: '55',
              position: 'BB',
              type: 'PositionNode',
              handRange: defaultHandRange,
              children: [
                { id: '4', size: 10, move: 'BET' },
                { id: '5', size: 10, move: 'BET' },
              ],
            },
          },
          {
            id: '114',
            cards: [
              { num: '2', mark: 'd' },
              { num: '3', mark: 'c' },
              { num: 'T', mark: 's' },
            ],
            children: {
              id: '55',
              position: 'BB',
              type: 'PositionNode',
              handRange: defaultHandRange,
              children: [
                { id: '4', size: 10, move: 'BET' },
                { id: '5', size: 10, move: 'BET' },
              ],
            },
          },
        ],
      },
    },
  },
} as Meta<T>;

export const Default: Story = {};
