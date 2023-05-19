import { Meta, StoryObj } from '@storybook/react';

import { PositionTag } from '.';

type T = typeof PositionTag;
type Story = StoryObj<T>;

export default {
  component: PositionTag,
  args: {},
} as Meta<T>;

export const Default: Story = {};
