import type { Meta, StoryObj } from '@storybook/react'

import { Liner } from './'

const meta = {
  component: Liner,
  tags: ['autodocs'],
  title: 'Components/UI/Liner',
} satisfies Meta<typeof Liner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
