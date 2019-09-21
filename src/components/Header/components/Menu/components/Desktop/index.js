import React, { memo } from 'react'
import DesktopStyled from './style'
import MenuItem from './components/MenuItem'

const Desktop = ({items}) => {
  const menu_items = items.map((item, i) => (
    <MenuItem data={item} key={i}/>
  ))
  return(
    <DesktopStyled>
      {menu_items}
    </DesktopStyled>
  )
}

export default memo(Desktop)