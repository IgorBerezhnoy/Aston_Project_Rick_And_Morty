import type { Meta, StoryObj } from '@storybook/react'

import { FiltersContainer } from '.'

const meta: Meta<typeof FiltersContainer> = {
  component: FiltersContainer,
  tags: ['autodocs'],
  title: 'Components/UI/FiltersContainer',
} satisfies Meta<typeof FiltersContainer>

export default meta
type Story = StoryObj<typeof FiltersContainer>

export const Default: Story = {
  args: {},
}
