import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxDemo } from './'

const meta: Meta<typeof CheckboxDemo> = {
  component: CheckboxDemo,
  tags: ['autodocs'],
  title: 'Components/UI/CheckboxDemo',
} satisfies Meta<typeof CheckboxDemo>

export default meta
type Story = StoryObj<typeof CheckboxDemo>

export const Default: Story = {
  args: {},
}
