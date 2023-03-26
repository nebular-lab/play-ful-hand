import { Meta, StoryObj } from '@storybook/react';

import { FlopCardModal } from '.';

type T = typeof FlopCardModal;
type Story = StoryObj<T>;

export default {
  component: FlopCardModal,
  args: {},
} as Meta<T>;

export const Default: Story = {};
