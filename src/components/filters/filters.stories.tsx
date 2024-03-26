import type { Meta, StoryObj } from '@storybook/react'

import { useResourceFiltering } from '@/hooks/use-resource-filtering'

import { Filters } from '.'

const meta: Meta<typeof Filters> = {
  component: Filters,
  tags: ['autodocs'],
  title: 'Components/UI/Filters',
} satisfies Meta<typeof Filters>

export default meta
type Story = StoryObj<typeof Filters>

const FilterWithState = () => {
  const { handleButtonClear, handleSearch, search } = useResourceFiltering()

  return <Filters cbClear={handleButtonClear} cbRadio={handleSearch} state={search} />
}

export const WithState: Story = {
  render: () => <FilterWithState />,
}
