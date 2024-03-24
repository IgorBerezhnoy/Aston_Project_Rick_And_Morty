import type { Meta, StoryObj } from '@storybook/react'

import { Root } from '@radix-ui/react-radio-group'

import { Radio } from '.'

const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/UI/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

const Container = () => {
  return (
    <Root style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Radio value={'male'} />
    </Root>
  )
}

export const Default: Story = {
  render: () => <Container />,
}
