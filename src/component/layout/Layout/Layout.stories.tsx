import { Meta, StoryObj } from '@storybook/react'
import { Layout } from '.'

type T = typeof Layout
type Story = StoryObj<T>

export default {
  component: Layout,
  args: {}
} as Meta<T>

export const Default: Story = {}