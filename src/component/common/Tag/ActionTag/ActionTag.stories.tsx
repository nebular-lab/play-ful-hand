import { Meta, StoryObj } from '@storybook/react';

import { ActionTag } from '.';

type T = typeof ActionTag;
type Story = StoryObj<T>;

export default {
  component: ActionTag,
  args: {},
} as Meta<T>;

export const Default: Story = {};
