import { Meta, StoryObj } from '@storybook/react';

import { ActionIDRadioCard } from '.';

type T = typeof ActionIDRadioCard;
type Story = StoryObj<T>;

export default {
  component: ActionIDRadioCard,
  args: {},
} as Meta<T>;

export const Default: Story = {};
