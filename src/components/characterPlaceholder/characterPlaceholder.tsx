import './characterPlaceholder.scss'

export interface Placeholder {
  name: string
}

export const CharacterPlaceholder = (placeholderText: Placeholder) => {
  return (
    <div className={'placeholder-conteiner'}>
      <h1 className={'placeholder-name'}>{placeholderText.name}</h1>
    </div>
  )
}
