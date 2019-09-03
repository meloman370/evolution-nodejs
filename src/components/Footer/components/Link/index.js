import React from 'react'
import LinkStyled from './style'
import { NavLink } from 'react-router-dom'

const Link = ({ to, children }) => {
  return(
    <LinkStyled>
      <NavLink to={to}>{children}</NavLink>
    </LinkStyled>
  )
}

export default Link