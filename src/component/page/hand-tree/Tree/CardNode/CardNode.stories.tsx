import { Meta, StoryObj } from '@storybook/react';

import { CardNode } from '.';

type T = typeof CardNode;
type Story = StoryObj<T>;

export default {
  component: CardNode,
  args: {},
} as Meta<T>;

export const Default: Story = {};
