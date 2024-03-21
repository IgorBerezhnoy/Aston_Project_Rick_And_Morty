import type { Meta, StoryObj } from '@storybook/react'

import { CardBg } from '@/components/cardBg/cardBg'

const meta: Meta<typeof CardBg> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: CardBg,
  tags: ['autodocs'],
  title: 'Components/UI/CardBg',
} satisfies Meta<typeof CardBg>

export default meta
type Story = StoryObj<typeof CardBg>

export const Default: Story = {
  args: {
    children: <div>hi</div>,
  },
}
