import { Meta, StoryObj } from '@storybook/react';

import { HandRange } from '.';

type T = typeof HandRange;
type Story = StoryObj<T>;

export default {
  component: HandRange,
  args: {},
} as Meta<T>;

export const Default: Story = {};
