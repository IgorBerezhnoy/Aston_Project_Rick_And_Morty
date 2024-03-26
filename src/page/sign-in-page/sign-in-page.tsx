import { memo } from 'react'
import { Control } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { CardBg } from '@/components/cardBg'
import { ControlledTextField } from '@/components/controlled-textField'
import { urlPaths } from '@/enum/urlPaths'
import { SignInData } from '@/page/sign-in-page/sign-in-page-container'

import s from '@/page/sign-in-page/sign-in-page.module.scss'

type Props = {
  control: Control<SignInData>
  onSubmit: () => void
}

export const SignInPage = memo(({ control, onSubmit }: Props) => {
  return (
    <CardBg className={s.container}>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form} onSubmit={onSubmit}>
        <ControlledTextField
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'email'}
        />
        <ControlledTextField
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={'password'}
        />
        <Button>Sign In</Button>
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
})
