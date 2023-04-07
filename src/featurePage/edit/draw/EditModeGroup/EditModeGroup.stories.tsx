import { Meta, StoryObj } from '@storybook/react';

import { EditModeGroup } from '.';

type T = typeof EditModeGroup;
type Story = StoryObj<T>;

export default {
  component: EditModeGroup,
  args: {},
} as Meta<T>;

export const Default: Story = {};
