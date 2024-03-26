import s from '../characterPage.module.scss'

type Props = {
  img: string
  name: string
}

export const CharacterImageContainer = ({ img, name }: Props) => {
  return (
    <div className={s.characterImageContainer}>
      <img alt={name} className={s.characterImage} src={img} />
    </div>
  )
}
