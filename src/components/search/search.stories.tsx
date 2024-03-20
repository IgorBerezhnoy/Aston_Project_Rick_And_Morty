import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useState } from 'react'

import { Search } from '@/components/search/search'

const meta: Meta<typeof Search> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: Search,
  tags: ['autodocs'],
  title: 'Components/UI/Search',
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {
    placeholder: 'Search',
  },
}

const SearchWithState = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const clearValue = () => {
    setValue('')
  }

  return <Search clearValue={clearValue} onChange={onChange} value={value} />
}

export const WithState: Story = {
  render: () => <SearchWithState />,
}
