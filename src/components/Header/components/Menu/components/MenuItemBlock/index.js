import React, { memo } from 'react'
import MenuItemBlockStyled from './style'

const MenuItemBlock = ({ title, children }) => {
  return(
    <MenuItemBlockStyled>
      <div className="title">{title}</div>
      {children}
    </MenuItemBlockStyled>
  )
}

export default memo(MenuItemBlock)