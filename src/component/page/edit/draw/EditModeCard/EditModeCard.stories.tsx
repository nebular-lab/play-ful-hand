import { Meta, StoryObj } from '@storybook/react';

import { EditModeCard } from '.';

type T = typeof EditModeCard;
type Story = StoryObj<T>;

export default {
  component: EditModeCard,
  args: {},
} as Meta<T>;

export const Default: Story = {};
