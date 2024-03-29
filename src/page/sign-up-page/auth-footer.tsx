import { Link } from 'react-router-dom'

import s from '@/page/sign-up-page/sign-up-page.module.scss'

export const AuthFooter = ({
  linkText,
  path,
  text,
}: {
  linkText: string
  path: string
  text: string
}) => {
  return (
    <div className={s.footer}>
      <div className={s.text}>{text}</div>
      <div className={s.signUp}>
        <Link to={path}>
          <span>{linkText}</span>
        </Link>
      </div>
    </div>
  )
}
