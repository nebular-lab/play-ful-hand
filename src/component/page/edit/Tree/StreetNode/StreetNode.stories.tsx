import { Meta, StoryObj } from '@storybook/react';

import { StreetNode } from '.';

type T = typeof StreetNode;
type Story = StoryObj<T>;

export default {
  component: StreetNode,
  args: {},
} as Meta<T>;

export const Default: Story = {};
