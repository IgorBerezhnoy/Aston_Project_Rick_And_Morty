import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { CharacterPage } from '@/page/character-page/character-page'

const meta: Meta<typeof CharacterPage> = {
  component: CharacterPage,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/CharacterPage',
} satisfies Meta<typeof CharacterPage>

export default meta
type Story = StoryObj<typeof CharacterPage>

const rickData = {
  created: '2017-11-04T18:48:46.250Z',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  gender: 'Male',
  id: 1,
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
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

const CharacterPageWithButton = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleButtonClick() {
    setIsFavorite(!isFavorite)
  }

  return <CharacterPage cbClick={handleButtonClick} char={rickData} isFavorite={isFavorite} />
}

export const Default: Story = {
  render: () => <CharacterPageWithButton />,
}
