import { Meta, StoryObj } from '@storybook/react';

import { ActionIDRadioGroup } from '.';

type T = typeof ActionIDRadioGroup;
type Story = StoryObj<T>;

export default {
  component: ActionIDRadioGroup,
  args: {},
} as Meta<T>;

export const Default: Story = {};
