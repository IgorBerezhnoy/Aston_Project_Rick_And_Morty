import { ChangeEvent, FC, useState } from 'react'

import { TextField, TextFieldProps } from '@/components/textField'

export type DebounceInput = TextFieldProps & {
  onDebouncedChange?: (value: string) => void
}

export const DebouncedInput: FC<DebounceInput> = ({
  onChange,
  onDebouncedChange,
  ...restProps
}) => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)

  const onChangeTextCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    onChange?.(event)
    if (onDebouncedChange) {
      clearTimeout(timerId)
      const timer = setTimeout(() => {
        onDebouncedChange(value)
      }, 600)

      setTimerId(Number(timer))
    }
  }

  return <TextField onChange={onChangeTextCallback} {...restProps} />
}
