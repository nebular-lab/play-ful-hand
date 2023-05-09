import { Meta, StoryObj } from '@storybook/react';

import { ActionNode } from '.';

type T = typeof ActionNode;
type Story = StoryObj<T>;

export default {
  component: ActionNode,
  args: {},
} as Meta<T>;

export const Default: Story = {};
