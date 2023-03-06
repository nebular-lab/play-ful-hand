import { Meta, StoryObj } from '@storybook/react';

import { StreetTag } from '.';

type T = typeof StreetTag;
type Story = StoryObj<T>;

export default {
  component: StreetTag,
  args: {},
} as Meta<T>;

export const Default: Story = {};
