import s from '../character-page.module.scss'
type Props = {
  name: string
}

export const CharacterNameContainer = ({ name }: Props) => {
  return (
    <div className={s.characterNameContainer}>
      <div className={s.characterName}>
        <h2>{name}</h2>
      </div>
    </div>
  )
}
