import React from 'react'
import MenuLinkStyled from './style'
import { NavLink } from 'react-router-dom'

const MenuLink = ({ to, children }) => {
  return(
    <MenuLinkStyled>
      <NavLink to={to} activeClassName="active">{children}</NavLink>
    </MenuLinkStyled>
  )
}

export default MenuLink