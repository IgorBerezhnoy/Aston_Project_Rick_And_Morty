import s from './characterPlaceholder.module.scss'

export type Placeholder = {
  name: string
}

export const CharacterPlaceholder = ({ name }: Placeholder) => {
  return (
    <div className={s.placeholderConteiner}>
      <h1 className={s.placeholderName}>{name}</h1>
    </div>
  )
}
