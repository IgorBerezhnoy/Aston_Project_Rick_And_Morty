import { Helmet } from 'react-helmet'

import { CharacterPlaceholder } from '@/components/characterPlaceholder'
import { CharacterImageContainer } from '@/page/character-page/lib/characterImageContainer'
import { CharacterLabels } from '@/page/character-page/lib/characterLabels'
import { CharacterNameContainer } from '@/page/character-page/lib/characterNameContainer'
import { Character } from '@/service/charactersApi'

import s from './character-page.module.scss'

import { CharacterShare } from './lib/characterShare'

type CharacterPageProps = {
  char: Character
}

export const CharacterPage = ({ char }: CharacterPageProps) => {
  return (
    <div className={s.characterName}>
      <Helmet>
        <title>{char.name}</title>
        <meta
          content={
            'Aston Project: Rick and Morty This project is a web application that provides information about the popular TV show Rick and Morty. It utilizes various technologies and tools to create a seamless user experience.'
          }
          name={'description'}
        />
        <meta content={'website'} property={'og:type'} />
        <meta content={`${window.location.href}`} property={'og:url'} />
        <meta content={'Rick and Morty'} property={'og:title'} />
        <meta
          content={
            'Aston Project: Rick and Morty This project is a web application that provides information about the popular TV show Rick and Morty. It utilizes various technologies and tools to create a seamless user experience.'
          }
          property={'og:description'}
        />
        <meta
          content={'https://i.pinimg.com/originals/6b/ba/73/6bba73ad75ca99ea30c9dfb3e24c55bf.jpg'}
          property={'og:image'}
        />
      </Helmet>
      <CharacterPlaceholder name={char.name} />

      <div className={s.characterContentConteiner}>
        <CharacterNameContainer name={char.name} />

        <CharacterImageContainer img={char.image} name={char.name} />

        <CharacterLabels char={char} />
        <CharacterShare name={char.name} />
      </div>
    </div>
  )
}
