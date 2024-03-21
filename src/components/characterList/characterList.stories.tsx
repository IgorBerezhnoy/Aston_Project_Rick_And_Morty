/* eslint-disable perfectionist/sort-objects */
import type { Meta, StoryObj } from '@storybook/react'

import { CharacterList } from './'

const meta: Meta<typeof CharacterList> = {
  component: CharacterList,
  tags: ['autodocs'],
  title: 'Components/UI/CharacterList',
} satisfies Meta<typeof CharacterList>

export default meta
type Story = StoryObj<typeof CharacterList>

export const Default: Story = {
  args: {
    chars: [
      {
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
      },
      {
        id: 2,
        name: 'Morty Smith',
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
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          // ...
        ],
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z',
      },
      {
        id: 183,
        name: 'Johnny Depp',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-500A)',
          url: 'https://rickandmortyapi.com/api/location/23',
        },
        location: {
          name: 'Earth (C-500A)',
          url: 'https://rickandmortyapi.com/api/location/23',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/8'],
        url: 'https://rickandmortyapi.com/api/character/183',
        created: '2017-12-29T18:51:29.693Z',
      },
      {
        id: 361,
        name: 'Toxic Rick',
        status: 'Dead',
        species: 'Humanoid',
        type: "Rick's Toxic Side",
        gender: 'Male',
        origin: {
          name: 'Alien Spa',
          url: 'https://rickandmortyapi.com/api/location/64',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/27'],
        url: 'https://rickandmortyapi.com/api/character/361',
        created: '2018-01-10T18:20:41.703Z',
      },
    ],
  },
}
