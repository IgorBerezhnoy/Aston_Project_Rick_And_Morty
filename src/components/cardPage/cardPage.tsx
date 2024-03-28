import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { CardBg } from '@/components/cardBg'
import { urlPaths } from '@/enums'

import s from './cardPage.module.scss'

import img from '../../../public/pageNotFound.gif'

export const CardPage = ({
  imgTag = <img alt={'Sorry this page is not found'} src={img} />,
  subtitle = (
    <h3>
      You can return to the{' '}
      <Link className={s.link} to={urlPaths.root}>
        main page
      </Link>
    </h3>
  ),
  title,
}: Props) => {
  return (
    <CardBg className={s.container}>
      <h1>{title}</h1>
      {imgTag}
      {subtitle}
    </CardBg>
  )
}

type Props = {
  imgTag?: ReactNode
  subtitle?: ReactNode
  title: string
}
