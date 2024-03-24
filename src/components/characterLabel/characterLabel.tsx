import s from './characterLabel.module.scss'

export type Label = {
  text: string
}

export const CharacterLabel = ({ text }: Label) => {
  return <h3 className={s.characterLabel}>{text}</h3>
}
