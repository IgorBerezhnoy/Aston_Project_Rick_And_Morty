import { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { CardBg } from '@/components/cardBg'
import { TextField } from '@/components/textField'

import s from '@/page/sign-up-page/sign-up-page.module.scss'

export const SignUpPage = ({
  email,
  onChangeEmail,
  onChangePassword,
  onSecondChangePassword,
  password,
  secondPassword,
  signUpHandler,
}: Props) => {
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
        <TextField
          label={'Confirm Password'}
          name={'Confirm Password'}
          onChange={onSecondChangePassword}
          placeholder={'Confirm Password'}
          type={'password'}
          value={secondPassword}
        />
        <Button onClick={signUpHandler}>Sign Up</Button>
      </form>
      <div className={s.footer}>
        <div className={s.text}>Already have an account?</div>
        <div className={s.signUp}>
          <Link to={'/sign-in'}>
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </CardBg>
  )
}

interface Props {
  email: string
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onSecondChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  password: string
  secondPassword: string
  signUpHandler: () => void
}
