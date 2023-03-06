import { Meta, StoryObj } from '@storybook/react';

import { PostCard } from '.';

type T = typeof PostCard;
type Story = StoryObj<T>;

export default {
  component: PostCard,
  args: {
    iconURL: 'https://placehold.jp/40x40.png',
    name: 'nebular',
    cards: [
      { num: '8', mark: 'h' },
      { num: '8', mark: 'h' },
      { num: '8', mark: 'h' },
    ],
    tags: ['3bet', '3bet', '3bet', '3bet', '3bet', '3bet', '3bet'],
  },
} as Meta<T>;

export const Default: Story = {};
