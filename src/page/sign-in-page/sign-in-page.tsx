import { ChangeEvent, MouseEvent, memo } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { CardBg } from '@/components/cardBg'
import { TextField } from '@/components/textField'
import { urlPaths } from '@/enums/enums'

import s from '@/page/sign-in-page/sign-in-page.module.scss'

type Props = {
  email: string
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  password: string
  signInHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

export const SignInPage = memo(
  ({ email, onChangeEmail, onChangePassword, password, signInHandler }: Props) => {
    return (
      <CardBg className={s.container}>
        <h2 className={s.title}>Sign in</h2>
        <form className={s.form}>
          <TextField
            label={'Email'}
            name={'email'}
            onChange={onChangeEmail}
            placeholder={'email'}
            value={email}
          />
          <TextField
            label={'Password'}
            name={'password'}
            onChange={onChangePassword}
            placeholder={'password'}
            type={'password'}
            value={password}
          />
          <Button onClick={signInHandler}>Sign In</Button>
        </form>
        <div className={s.footer}>
          <div className={s.text}>{"Don't have an account?"}</div>
          <div className={s.signUp}>
            <Link to={urlPaths.signUp}>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </CardBg>
    )
  }
)
