import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination, PaginationProps } from '@/components/pagination/pagination'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/UI/pagination',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    stepValue: 3,
    totalCount: 41,
  },
}

export const Disabled: Story = {
  args: {
    currentPage: 1,
    disabled: true,
    pageSize: 5,
    stepValue: 3,
    totalCount: 41,
  },
}

const PaginationWithHooks = (args: Omit<PaginationProps, 'currentPage' | 'onPageChange'>) => {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      currentPage={page}
      onPageChange={setPage}
      pageSize={args.pageSize}
      stepValue={3}
      totalCount={args.totalCount}
    />
  )
}

export const Action: Story = {
  args: {
    pageSize: 5,
    stepValue: 3,
    totalCount: 45,
  },
  render: args => <PaginationWithHooks {...args} />,
}
