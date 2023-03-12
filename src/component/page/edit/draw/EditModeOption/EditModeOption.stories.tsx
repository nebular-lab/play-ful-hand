import { Meta, StoryObj } from '@storybook/react';

import { EditModeOption } from '.';

type T = typeof EditModeOption;
type Story = StoryObj<T>;

export default {
  component: EditModeOption,
  args: {},
} as Meta<T>;

export const Default: Story = {};
