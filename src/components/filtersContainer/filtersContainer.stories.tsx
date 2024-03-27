import type { Meta, StoryObj } from '@storybook/react'

import { useResourceFiltering } from '@/hooks/use-resource-filtering'

import { FiltersContainer } from '.'

const meta: Meta<typeof FiltersContainer> = {
  component: FiltersContainer,
  tags: ['autodocs'],
  title: 'Components/UI/FiltersContainer',
} satisfies Meta<typeof FiltersContainer>

export default meta
type Story = StoryObj<typeof FiltersContainer>

const FilterWithState = () => {
  const { handleButtonClear, handleSearch, search } = useResourceFiltering()

  return (
    <FiltersContainer
      cbClear={handleButtonClear}
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
