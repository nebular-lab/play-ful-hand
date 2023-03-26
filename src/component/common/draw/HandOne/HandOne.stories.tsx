import { Meta, StoryObj } from '@storybook/react';

import { HandOne } from '.';

type T = typeof HandOne;
type Story = StoryObj<T>;

export default {
  component: HandOne,
  args: {
    drawingColor: 'bg-green-500',
    isMouseDown: true,
    isSquare: false,
    defaultColor: 'bg-gray-300',
  },
} as Meta<T>;

export const Default: Story = {};
