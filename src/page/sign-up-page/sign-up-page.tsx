import { memo } from 'react'
import { Control } from 'react-hook-form'

import { Button } from '@/components/button'
import { CardBg } from '@/components/cardBg'

import { ControlledTextField } from '@/components/controlled-textField'
import { AuthFooter } from '@/page/sign-up-page/auth-footer'
import { SignUpData } from '@/utils/validators/schemes'


import s from '@/page/sign-up-page/sign-up-page.module.scss'

type Props = {
  control: Control<SignUpData>
  onSubmit: () => void
}

export const SignUpPage = memo(({ control, onSubmit }: Props) => {
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
        <ControlledTextField
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          type={'password'}
        />
        <Button>Sign Up</Button>
      </form>
      <AuthFooter linkText={'Sign In'} text={'Already have an account?'} />
    </CardBg>
  )
})
