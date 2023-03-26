import { Meta, StoryObj } from '@storybook/react';

import { DashboardPage } from '.';

type T = typeof DashboardPage;
type Story = StoryObj<T>;

export default {
  component: DashboardPage,
  args: {},
} as Meta<T>;

export const Default: Story = {};
