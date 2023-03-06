import { Meta, StoryObj } from '@storybook/react';

import { PositionNode } from '.';

type T = typeof PositionNode;
type Story = StoryObj<T>;

export default {
  component: PositionNode,
  args: {},
} as Meta<T>;

export const Default: Story = {};
