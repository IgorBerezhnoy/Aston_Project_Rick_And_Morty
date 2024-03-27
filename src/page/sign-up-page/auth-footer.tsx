import { Link } from 'react-router-dom'

import { urlPaths } from '@/enums'

import s from '@/page/sign-up-page/sign-up-page.module.scss'

export const AuthFooter = ({ linkText, text }: { linkText: string; text: string }) => {
  return (
    <div className={s.footer}>
      <div className={s.text}>{text}</div>
      <div className={s.signUp}>
        <Link to={urlPaths.signIn}>
          <span>{linkText}</span>
        </Link>
      </div>
    </div>
  )
}
