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
  const currentPageUrl = window.location.href
  const title = `Hi! I'm looking for Rick and Morty character ${name}`

  return (
    <div className={s.characterShare}>
      <RedditShareButton className={s.characterShareButton} title={title} url={currentPageUrl}>
        <RedditIcon round />
      </RedditShareButton>
      <TelegramShareButton className={s.characterShareButton} title={title} url={currentPageUrl}>
        <TelegramIcon round />
      </TelegramShareButton>
      <VKShareButton className={s.characterShareButton} title={title} url={currentPageUrl}>
        <VKIcon round />
      </VKShareButton>
      <ViberShareButton className={s.characterShareButton} title={title} url={currentPageUrl}>
        <ViberIcon round />
      </ViberShareButton>
      <WhatsappShareButton className={s.characterShareButton} title={title} url={currentPageUrl}>
        <WhatsappIcon round />
      </WhatsappShareButton>
    </div>
  )
}
