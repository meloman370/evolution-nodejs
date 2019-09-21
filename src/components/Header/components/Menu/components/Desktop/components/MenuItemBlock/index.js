import React, { memo } from 'react'
import MenuItemBlockStyled from './style'
import MenuLink from '../MenuLink'

const MenuItemBlock = ({ data }) => {
  const links = data.category.map((link, i) => (
    <MenuLink data={link} key={i}/>
  ))
  return(
    <MenuItemBlockStyled>
      <div className="title">{data.name}</div>
      {links}
    </MenuItemBlockStyled>
  )
}

export default memo(MenuItemBlock)