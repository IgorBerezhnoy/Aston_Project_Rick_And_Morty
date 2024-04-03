import {
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  VKIcon,
  VKShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import s from '../character-page.module.scss'

export const CharacterShare = ({ name }: { name: string }) => {
  const url = 'https://aston-project-rick-and-morty.vercel.app/'
  const title = `Hi! I'm looking for Rick and Morty character ${name} on Aston Project. Check it out! ${window.location.href}`

  return (
    <div className={s.characterShare}>
      <RedditShareButton className={s.characterShareButton} title={title} url={url}>
        <RedditIcon round />
      </RedditShareButton>
      <TelegramShareButton className={s.characterShareButton} title={title} url={url}>
        <TelegramIcon round />
      </TelegramShareButton>
      <VKShareButton className={s.characterShareButton} title={title} url={url}>
        <VKIcon round />
      </VKShareButton>
      <ViberShareButton className={s.characterShareButton} title={title} url={url}>
        <ViberIcon round />
      </ViberShareButton>
      <WhatsappShareButton className={s.characterShareButton} title={title} url={url}>
        <WhatsappIcon round />
      </WhatsappShareButton>
    </div>
  )
}
