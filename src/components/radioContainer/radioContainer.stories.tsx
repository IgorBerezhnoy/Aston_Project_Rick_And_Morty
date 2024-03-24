import type { Meta, StoryObj } from '@storybook/react'

import { RadioContainer } from '.'

const meta: Meta<typeof RadioContainer> = {
  component: RadioContainer,
  tags: ['autodocs'],
  title: 'Components/UI/RadioContainer',
} satisfies Meta<typeof RadioContainer>

export default meta
type Story = StoryObj<typeof RadioContainer>

export const Default: Story = {
  args: {},
}
