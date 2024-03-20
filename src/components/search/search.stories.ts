import type { Meta, StoryObj } from '@storybook/react'

import { Search } from '@/components/search/search'

const meta: Meta<typeof Search> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: Search,
  tags: ['autodocs'],
  title: 'Components/UI/Search',
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {
    placeholder: 'Search',
  },
}
