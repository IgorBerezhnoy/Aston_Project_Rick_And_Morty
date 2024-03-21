/* eslint-disable perfectionist/sort-objects */
import type { Meta, StoryObj } from '@storybook/react'

import { CharacterCard } from '.'

const meta: Meta<typeof CharacterCard> = {
  component: CharacterCard,
  tags: ['autodocs'],
  title: 'Components/UI/CharacterCard',
} satisfies Meta<typeof CharacterCard>

export default meta
type Story = StoryObj<typeof CharacterCard>

const rickData = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
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
