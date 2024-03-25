import { DetailedHTMLProps, ElementRef, InputHTMLAttributes, JSX, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

export interface TextFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  classNameWrapper?: string
  errorMessage?: string
  label?: string
}

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ className, classNameWrapper, disabled, errorMessage, label, ...rest }, ref): JSX.Element => {
    return (
      <div
        className={clsx(
          s.wrapper,
          disabled && s.disabled,
          errorMessage && s.error,
          classNameWrapper
        )}
      >
        {label && <label className={clsx(s.label, disabled && s.disabled)}>{label}</label>}
        <input className={clsx(s.input, className)} disabled={disabled} {...rest} ref={ref} />
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
      </div>
    )
  }
)
