import { Meta, StoryObj } from '@storybook/react';

import { ChakraButton } from '.';

type T = typeof ChakraButton;
type Story = StoryObj<T>;

export default {
  component: ChakraButton,
  args: {},
} as Meta<T>;

export const Default: Story = {};
