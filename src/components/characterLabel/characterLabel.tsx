import s from './characterLabel.module.scss'

type LabelProps = {
  text: string
}

export const CharacterLabel = ({ text }: LabelProps) => {
  return <h3 className={s.characterLabel}>{text}</h3>
}
