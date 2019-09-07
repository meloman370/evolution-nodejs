import React, { useContext } from 'react'
import MenuLinkStyled from './style'
import { NavLink } from 'react-router-dom'
import { PopupContext } from '../MenuItem'

const MenuLink = ({ to, children }) => {
  const setOpen = useContext(PopupContext)

  const onClickHander = () => {
    setOpen(false)
  }

  return(
    <MenuLinkStyled>
      <NavLink to={to} activeClassName="active" onClick={onClickHander}>{children}</NavLink>
    </MenuLinkStyled>
  )
}

export default MenuLink