import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store/store'
import { testChars } from '@/constants'

import { CharactersContainer } from './'

const meta: Meta<typeof CharactersContainer> = {
  component: CharactersContainer,
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
  title: 'Components/UI/CharactersContainer',
} satisfies Meta<typeof CharactersContainer>

export default meta
type Story = StoryObj<typeof CharactersContainer>

const info = {
  count: 200,
  next: null,
  pages: 10,
  prev: null,
}

const ContainerWithState = () => {
  const [currPage, setCurrPage] = useState(1)

  function setAnotherPage(nextPage: number) {
    setCurrPage(nextPage)
  }

  return (
    <CharactersContainer
      chars={testChars}
      count={info.count}
      currPage={currPage}
      pages={info.pages}
      setAnotherPage={setAnotherPage}
    />
  )
}

export const WithState: Story = {
  render: () => <ContainerWithState />,
}
