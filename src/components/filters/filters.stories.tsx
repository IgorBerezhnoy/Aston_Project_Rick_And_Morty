import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'

import { Filters } from '.'

const meta: Meta<typeof Filters> = {
  component: Filters,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Filters',
} satisfies Meta<typeof Filters>

export default meta
type Story = StoryObj<typeof Filters>

const FilterWithState = () => {
  const { handleFiltersClear, handleSearch, search } = useResourceFiltering()

  return <Filters cbClear={handleFiltersClear} cbRadio={handleSearch} state={search} />
}

export const WithState: Story = {
  render: () => <FilterWithState />,
}
