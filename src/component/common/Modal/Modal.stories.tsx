import { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';

type T = typeof Modal
type Story = StoryObj<T>

export default {
  component: Modal,
  args: {}
} as Meta<T>

export const Default: Story = {}