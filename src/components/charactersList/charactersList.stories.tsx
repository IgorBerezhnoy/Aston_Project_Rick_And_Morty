import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store/store'
import { testChars } from '@/constants'

import { CharactersList } from './'

const meta: Meta<typeof CharactersList> = {
  component: CharactersList,
  decorators: [
    Story => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </Provider>
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
