import React, { memo } from 'react'
import DesktopStyled from './style'
import MenuItem from './components/MenuItem'

const Desktop = ({items}) => {
  return(
    <DesktopStyled>
      {items.map(item => (
        <MenuItem data={item} key={item.id}/>
      ))}
    </DesktopStyled>
  )
}

export default memo(Desktop)