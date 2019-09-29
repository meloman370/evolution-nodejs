import React, { memo } from 'react'
import MenuItemBlockStyled from './style'
import MenuLink from '../MenuLink'

const MenuItemBlock = ({ data: {name, category} }) => {
  return(
    <MenuItemBlockStyled>
      <div className="title">{name}</div>
      {category.map(link => (
        <MenuLink data={link} key={link.id}/>
      ))}
    </MenuItemBlockStyled>
  )
}

export default memo(MenuItemBlock)