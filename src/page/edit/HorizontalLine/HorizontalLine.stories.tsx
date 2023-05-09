import { Meta, StoryObj } from '@storybook/react';

import { HorizontalLine } from '.';

type T = typeof HorizontalLine;
type Story = StoryObj<T>;

export default {
  component: HorizontalLine,
  args: {},
} as Meta<T>;

export const Default: Story = {};
