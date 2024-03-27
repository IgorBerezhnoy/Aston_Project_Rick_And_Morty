import type { Meta, StoryObj } from '@storybook/react'

import { CharacterLabel } from './'

const meta: Meta<typeof CharacterLabel> = {
  component: CharacterLabel,
  tags: ['autodocs'],
  title: 'Components/UI/CharacterLabel',
} satisfies Meta<typeof CharacterLabel>

export default meta
type Story = StoryObj<typeof CharacterLabel>

export const Test: Story = {
  args: { text: 'Hello' },
}
