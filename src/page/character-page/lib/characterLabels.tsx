import { CharacterLabel } from '@/components/characterLabel'
import { Character } from '@/service/charactersApi'

import s from '../character-page.module.scss'

type Props = {
  char: Character
}

export const CharacterLabels = ({ char }: Props) => {
  const hashMap = new Map<string, string>([
    ['Gender: ', `${char.gender}`],
    ['Last location: ', `${char.location.name}`],
    ['Origin: ', `${char.origin.name}`],
    ['Species: ', `${char.species}`],
    ['Status: ', `${char.status}`],
  ])

  const dataFromLabel = [...hashMap]

  return (
    <div className={s.characterLabels}>
      {dataFromLabel.map((props, index) => (
        <CharacterLabel
          key={index}
          text={
            <>
              <b>{props[0]}</b> <span>{props[1]}</span>
            </>
          }
        />
      ))}
    </div>
  )
}
