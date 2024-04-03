import React from 'react'

import s from './characterLabel.module.scss'

type LabelProps = {
  text: React.ReactNode
}

export const CharacterLabel = ({ text }: LabelProps) => {
  return <h3 className={s.characterLabel}>{text}</h3>
}
