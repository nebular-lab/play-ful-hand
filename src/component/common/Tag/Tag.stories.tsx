import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '.';

type T = typeof Tag;
type Story = StoryObj<T>;

export default {
  component: Tag,
  args: {},
} as Meta<T>;

export const Default: Story = {};
