import { Meta, StoryObj } from '@storybook/react';

import { Square } from '.';

type T = typeof Square;
type Story = StoryObj<T>;

export default {
  component: Square,
  args: {
    drawingColor: 'bg-green-500',
    isMouseDown: true,
    isSquare: false,
    defaultColor: 'bg-gray-300',
  },
} as Meta<T>;

export const Default: Story = {};
