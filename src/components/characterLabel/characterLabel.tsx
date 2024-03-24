import './characterLabel.scss'

export interface Label {
  text: string
}

export const CharacterLabel = (labelText: Label) => {
  return <h3 className={'character-label'}>{labelText.text}</h3>
}
