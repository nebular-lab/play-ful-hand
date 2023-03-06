---
to: <%= path %>/<%= name%>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react'
import { <%= name %> } from '.'

type T = typeof <%= name %>
type Story = StoryObj<T>

export default {
  component: <%= name %>,
  <% if (have_props) { -%>
args: {}
<% } -%>
} as Meta<T>

export const Default: Story = {}