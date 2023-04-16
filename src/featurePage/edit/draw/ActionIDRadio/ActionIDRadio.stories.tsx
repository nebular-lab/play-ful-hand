import { Meta, StoryObj } from '@storybook/react';

import { ActionIDRadio } from '.';

type T = typeof ActionIDRadio;
type Story = StoryObj<T>;

export default {
  component: ActionIDRadio,
  args: {},
} as Meta<T>;

export const Default: Story = {};
