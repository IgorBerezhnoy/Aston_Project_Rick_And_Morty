import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CharacterCard } from '.'

const meta: Meta<typeof CharacterCard> = {
  component: CharacterCard,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/CharacterCard',
} satisfies Meta<typeof CharacterCard>

export default meta
type Story = StoryObj<typeof CharacterCard>

const rickData = {
  created: '2017-11-04T18:48:46.250Z',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  gender: 'Male',
  id: 1,
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  isFavorite: true,
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  name: 'Rick Sanchez',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  species: 'Human',
  status: 'Alive',
  type: '',
  url: 'https://rickandmortyapi.com/api/character/1',
}

const WidthDefault = () => {
  return (
    <div style={{ width: 200 }}>
      <CharacterCard char={rickData} />
    </div>
  )
}

export const Default: Story = {
  render: () => <WidthDefault />,
}
