import { Meta, StoryObj } from '@storybook/react';

import { EditModeRadio } from '.';

type T = typeof EditModeRadio;
type Story = StoryObj<T>;

export default {
  component: EditModeRadio,
  args: {},
} as Meta<T>;

export const Default: Story = {};
