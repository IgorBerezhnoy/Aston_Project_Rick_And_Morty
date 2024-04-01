import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'

import { FiltersContainer } from '.'

const meta: Meta<typeof FiltersContainer> = {
  component: FiltersContainer,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/FiltersContainer',
} satisfies Meta<typeof FiltersContainer>

export default meta
type Story = StoryObj<typeof FiltersContainer>

const FilterWithState = () => {
  const { handleFiltersClear, handleSearch, search } = useResourceFiltering()

  return (
    <FiltersContainer
      cbClear={handleFiltersClear}
      cbPopup={() => null}
      cbRadio={handleSearch}
      isPopup
      state={search}
    />
  )
}

export const WithState: Story = {
  render: () => <FilterWithState />,
}
