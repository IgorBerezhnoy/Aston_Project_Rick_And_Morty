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

export const CharacterShare = () => {
  const currentPageUrl = window.location.href

  return (
    <div className={s.characterShare}>
      <RedditShareButton className={s.characterShareButton} url={currentPageUrl}>
        <RedditIcon round />
      </RedditShareButton>
      <TelegramShareButton className={s.characterShareButton} url={currentPageUrl}>
        <TelegramIcon round />
      </TelegramShareButton>
      <VKShareButton className={s.characterShareButton} url={currentPageUrl}>
        <VKIcon round />
      </VKShareButton>
      <ViberShareButton className={s.characterShareButton} url={currentPageUrl}>
        <ViberIcon round />
      </ViberShareButton>
      <WhatsappShareButton className={s.characterShareButton} url={currentPageUrl}>
        <WhatsappIcon round />
      </WhatsappShareButton>
    </div>
  )
}
