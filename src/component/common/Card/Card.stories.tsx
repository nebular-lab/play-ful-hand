import { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

type T = typeof Card;
type Story = StoryObj<T>;

export default {
  component: Card,
  args: {},
} as Meta<T>;

export const Default: Story = {};
