import type { Meta, StoryObj } from '@storybook/react'

import { Filters } from '.'

const meta: Meta<typeof Filters> = {
  component: Filters,
  tags: ['autodocs'],
  title: 'Components/UI/Filters',
} satisfies Meta<typeof Filters>

export default meta
type Story = StoryObj<typeof Filters>

export const Default: Story = {
  args: {},
}
