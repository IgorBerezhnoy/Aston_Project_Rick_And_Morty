import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { testChars } from '@/constants'

import { CharactersList } from './'

const meta: Meta<typeof CharactersList> = {
  component: CharactersList,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/CharactersList',
} satisfies Meta<typeof CharactersList>

export default meta
type Story = StoryObj<typeof CharactersList>

export const Default: Story = {
  args: {
    chars: testChars,
  },
}
