import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '.'

const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/UI/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {},
}
