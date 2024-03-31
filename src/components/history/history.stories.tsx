import type { Meta, StoryObj } from '@storybook/react'

import { History } from './history'

const meta: Meta<typeof History> = {
  component: History,
  tags: ['autodocs'],
  title: 'Components/UI/History',
} satisfies Meta<typeof History>

export default meta
type Story = StoryObj<typeof History>

const historyData = ['0', '1', '2']

export const Default: Story = {
  render: () => <History history={historyData} />,
}
