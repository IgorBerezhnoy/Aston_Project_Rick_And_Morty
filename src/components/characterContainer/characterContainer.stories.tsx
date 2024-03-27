import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { MemoryRouter } from 'react-router-dom'

import { testChars } from '@/constants'

import { CharacterContainer } from './'

const meta: Meta<typeof CharacterContainer> = {
  component: CharacterContainer,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/CharacterContainer',
} satisfies Meta<typeof CharacterContainer>

export default meta
type Story = StoryObj<typeof CharacterContainer>

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
    <CharacterContainer
      chars={testChars}
      currPage={currPage}
      info={info}
      setAnotherPage={setAnotherPage}
    />
  )
}

export const WithState: Story = {
  render: () => <ContainerWithState />,
}
