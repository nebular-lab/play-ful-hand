import { Meta, StoryObj } from '@storybook/react';

import { RadioCard } from '.';

type T = typeof RadioCard;
type Story = StoryObj<T>;

export default {
  component: RadioCard,
  args: {},
} as Meta<T>;

export const Default: Story = {};
