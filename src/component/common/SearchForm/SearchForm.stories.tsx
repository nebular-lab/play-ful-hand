import { Meta, StoryObj } from '@storybook/react';

import { SearchForm } from '.';

type T = typeof SearchForm;
type Story = StoryObj<T>;

export default {
  component: SearchForm,
  args: {},
} as Meta<T>;

export const Default: Story = {};
