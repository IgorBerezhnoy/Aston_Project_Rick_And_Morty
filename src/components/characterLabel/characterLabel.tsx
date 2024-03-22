import './characterLabel.scss'

export interface Label {
  text: string
}

export const CharacterLabel = (labelText: Label) => {
  return (
    <div className={'characterLabel'}>
      <h1 className={'labelText'}>{labelText.text}</h1>
    </div>
  )
}
