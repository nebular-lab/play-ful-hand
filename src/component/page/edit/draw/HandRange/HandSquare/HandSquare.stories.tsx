import { Meta, StoryObj } from '@storybook/react';

import { HandSquare } from '.';

type T = typeof HandSquare;
type Story = StoryObj<T>;

export default {
  component: HandSquare,
  args: {
    type: 'suit',
    isMouseDown: true,
    drawingColor: 'green.300',
    hands: [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
    ],
  },
} as Meta<T>;

export const Default: Story = {};
