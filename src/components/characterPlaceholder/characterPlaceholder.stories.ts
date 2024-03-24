import type { Meta, StoryObj } from '@storybook/react'

import { CharacterPlaceholder } from './'

const meta: Meta<typeof CharacterPlaceholder> = {
  component: CharacterPlaceholder,
  tags: ['autodocs'],
  title: 'Components/UI/CharacterPlaceholder',
} satisfies Meta<typeof CharacterPlaceholder>

export default meta
type Story = StoryObj<typeof CharacterPlaceholder>

export const Test: Story = {
  args: { name: 'Hello' },
}
