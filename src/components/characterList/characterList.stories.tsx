import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { testChars } from '@/constants'

import { CharacterList } from './'

const meta: Meta<typeof CharacterList> = {
  component: CharacterList,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/CharacterList',
} satisfies Meta<typeof CharacterList>

export default meta
type Story = StoryObj<typeof CharacterList>

export const Default: Story = {
  args: {
    chars: testChars,
  },
}
