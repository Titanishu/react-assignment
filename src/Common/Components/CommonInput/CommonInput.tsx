import clsx from 'clsx'
import React, { ChangeEvent, FC, useCallback } from 'react'

import s from './CommonInput.module.scss'

interface Props {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  title?: string
  placeholder?: string
  className?: string
}

/**
 * Common text input.
 */
export const CommonInput: FC<Props> = (props) => {
  const { value, onChange, title, placeholder, disabled, className } = props

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    },
    [onChange],
  )

  const classes = clsx(s.CommonInput, className)

  return (
    <div className={classes}>
      <span className={s.CommonInput__Title}>{title}</span>
      <input
        className={s.CommonInput__Input}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
