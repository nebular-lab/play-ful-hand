import { Meta, StoryObj } from '@storybook/react';

import { CardTag } from '.';

type T = typeof CardTag;
type Story = StoryObj<T>;

export default {
  component: CardTag,
  args: {
    cards: [
      { num: '8', mark: 'h' },
      { num: '9', mark: 's' },
      { num: 'T', mark: 'c' },
    ],
  },
} as Meta<T>;

export const Default: Story = {};
