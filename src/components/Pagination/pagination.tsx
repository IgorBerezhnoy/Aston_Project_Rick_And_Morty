import { JSX } from 'react'

import {
  ChevronLeftFilled,
  ChevronRightFilled,
  SkipNextFilled,
  SkipPreviousFilled,
} from '@/assets/icons'
import { usePagination } from '@/components/pagination/lib'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  disabled?: boolean
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingCount?: number
  stepValue: number
  totalCount: number
}

export const Pagination = ({
  currentPage,
  disabled,
  onPageChange,
  pageSize,
  siblingCount = 1,
  stepValue,
  totalCount,
}: PaginationProps): JSX.Element => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const paginationItems = usePagination({ currentPage, siblingCount, totalPageCount })

  const classNames = {
    controller: s.controller,
    dots: clsx(s.dots, disabled && s.disabledDots),
    item(itemNumber: number) {
      return clsx(s.item, itemNumber === currentPage && s.activeItem)
    },
    root: clsx(s.root, disabled && s.disabled),
  }

  const setPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage - stepValue >= 1) {
      onPageChange(currentPage - stepValue)
    }
  }

  const setNextPage = () => {
    if (currentPage !== totalPageCount) {
      onPageChange(currentPage + 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage + stepValue <= totalPageCount) {
      onPageChange(currentPage + stepValue)
    }
  }

  return (
    <div className={classNames.root}>
      <button
        className={classNames.controller}
        disabled={currentPage - stepValue < 1 || disabled}
        onClick={goToPrevPage}
        tabIndex={0}
      >
        <SkipPreviousFilled />
      </button>
      <button
        className={classNames.controller}
        disabled={currentPage === 1 || disabled}
        onClick={setPrevPage}
        tabIndex={0}
      >
        <ChevronLeftFilled />
      </button>
      {paginationItems.map((num: '...' | number, index: number) => {
        if (num === '...') {
          return (
            <span className={classNames.dots} key={index} tabIndex={-1}>
              {num}
            </span>
          )
        } else {
          return (
            <button
              className={classNames.item(num)}
              disabled={disabled}
              key={index}
              onClick={() => onPageChange(num)}
              tabIndex={0}
            >
              <span>{num}</span>
            </button>
          )
        }
      })}
      <button
        className={classNames.controller}
        disabled={currentPage === totalPageCount || disabled}
        onClick={setNextPage}
        tabIndex={0}
      >
        <ChevronRightFilled />
      </button>
      <button
        className={classNames.controller}
        disabled={currentPage + stepValue > totalPageCount || disabled}
        onClick={goToNextPage}
        tabIndex={0}
      >
        <SkipNextFilled />
      </button>
    </div>
  )
}
