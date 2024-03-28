import { Link } from 'react-router-dom'

import { CardBg } from '@/components/cardBg'
import { urlPaths } from '@/enums'

import s from './cardPage.module.scss'

import img from '../../../public/pageNotFound.gif'

export const CardPage = ({ title }: Props) => {
  return (
    <CardBg className={s.container}>
      <h1>{title}</h1>
      <img alt={'Sorry this page is not found'} src={img} />
      <h3>
        You can return to the{' '}
        <Link className={s.link} to={urlPaths.root}>
          main page
        </Link>
      </h3>
    </CardBg>
  )
}

type Props = {
  title: string
}
