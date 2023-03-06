import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

type T = typeof Avatar;
type Story = StoryObj<T>;

export default {
  component: Avatar,
  args: {},
} as Meta<T>;

export const Default: Story = {};
