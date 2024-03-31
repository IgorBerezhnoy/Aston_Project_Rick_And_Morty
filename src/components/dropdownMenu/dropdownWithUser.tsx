import { Link } from 'react-router-dom'

import { Bookmark, HouseOutline, LogOut, SearchIcon } from '@/assets/icons'
import { Avatar } from '@/components/avatar'
import { DropdownMenu } from '@/components/dropdownMenu/dropdownMenu'
import { DropDownItem } from '@/components/dropdownMenu/lib/dropDownItem'
import { DropdownSeparator } from '@/components/dropdownMenu/lib/dropdownSeparator'
import { urlPaths } from '@/enums'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

type Props = { logOutHandler: () => void; name: string }
export const DropdownWithUser = ({ logOutHandler, name }: Props) => {
  return (
    <DropdownMenu
      classNameTrigger={s.triggerButton}
      trigger={
        <div className={s.nameAndAvatar}>
          <div className={s.name}>{name}</div>
          <Avatar className={s.avatar} name={name} size={52} />
        </div>
      }
    >
      <div className={s.wrapper}>
        <DropDownItem>
          <div className={s.photoAndEmail}>
            <Avatar name={name} size={52} />
            <div className={s.userName}>{name}</div>
          </div>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <Link className={s.dropdownItem} to={urlPaths.root}>
            <HouseOutline className={s.icons} />
            <div>Home</div>
          </Link>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <Link className={s.dropdownItem} to={`${urlPaths.favorites}1`}>
            <Bookmark className={s.icons} />
            <div>Favorites</div>
          </Link>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <Link className={s.dropdownItem} to={urlPaths.history}>
            <SearchIcon className={s.icons} />
            <div>History</div>
          </Link>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <button className={clsx(s.dropdownItem, s.logOut)} onClick={logOutHandler}>
            <LogOut className={s.icons} />
            <div>Log Оut</div>
          </button>
        </DropDownItem>
      </div>
    </DropdownMenu>
  )
}
