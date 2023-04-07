import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

type T = typeof Header;
type Story = StoryObj<T>;

export default {
  component: Header,
  args: {},
} as Meta<T>;

export const Default: Story = {};
