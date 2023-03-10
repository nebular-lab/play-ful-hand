import { Meta, StoryObj } from '@storybook/react';

import { HandSquare } from '.';

type T = typeof HandSquare;
type Story = StoryObj<T>;

export default {
  component: HandSquare,
  args: { type: 'suit', isMouseDown: true, drawingColor: 'bg-green-300' },
} as Meta<T>;

export const Default: Story = {};
