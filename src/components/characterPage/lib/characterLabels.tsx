import { CharacterLabel } from '@/components/characterLabel'
import { Character } from '@/service/ResoursesService/CharactersApi'

import s from '../characterPage.module.scss'

type Props = {
  char: Character
}

export const CharacterLabels = ({ char }: Props) => {
  const hashMap: { key: string; value: string }[] = [
    { key: 'Gender: ', value: `${char.gender}` },
    { key: 'Last location: ', value: `${char.location.name}` },
    { key: 'Origin: ', value: `${char.origin.name}` },
    { key: 'Species:', value: `${char.species}` },
    { key: 'Status: ', value: `${char.status}` },
  ]

  return (
    <div className={s.characterLabels}>
      {hashMap.map(props => (
        <CharacterLabel key={props.key} text={`${props.key} ${props.value}`} />
      ))}
    </div>
  )
}
