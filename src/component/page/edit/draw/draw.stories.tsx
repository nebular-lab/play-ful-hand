import { Meta, StoryObj } from '@storybook/react';

import { Draw } from '.';

type T = typeof Draw;
type Story = StoryObj<T>;

export default {
  component: Draw,
  args: {},
} as Meta<T>;

export const Default: Story = {};
