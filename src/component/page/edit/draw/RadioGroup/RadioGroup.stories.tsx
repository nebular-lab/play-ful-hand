import { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '.';

type T = typeof RadioGroup;
type Story = StoryObj<T>;

export default {
  component: RadioGroup,
  args: {},
} as Meta<T>;

export const Default: Story = {};
