import { Meta, StoryObj } from '@storybook/react';

import { Test } from '.';

type T = typeof Test;
type Story = StoryObj<T>;

export default {
  component: Test,
  args: {},
} as Meta<T>;

export const Default: Story = {};
