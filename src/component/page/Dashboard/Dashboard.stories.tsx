import { Meta, StoryObj } from '@storybook/react';

import { Dashboard } from '.';

type T = typeof Dashboard
type Story = StoryObj<T>

export default {
  component: Dashboard,
  args: {}
} as Meta<T>;

export const Default: Story = {};