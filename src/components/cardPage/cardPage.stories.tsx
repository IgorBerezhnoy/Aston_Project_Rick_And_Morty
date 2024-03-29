import type { Meta, StoryObj } from '@storybook/react'

import { CardPage } from '@/components/cardPage/cardPage'

const meta: Meta<typeof CardPage> = {
  argTypes: {},
  component: CardPage,
  tags: ['autodocs'],
  title: 'Components/UI/CardPage',
} satisfies Meta<typeof CardPage>

export default meta
type Story = StoryObj<typeof CardPage>

export const Page404: Story = {
  args: {
    title: 'Sorry this page is not found',
  },
}
