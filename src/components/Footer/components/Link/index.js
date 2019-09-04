import React from 'react'
import LinkStyled from './style'
import { NavLink } from 'react-router-dom'

const Link = ({ to, children, external }) => {
  let link = null;
  if (external) {
    link = <a href={to} target="_blank">{children}</a>
  } else {
    link = <NavLink to={to}>{children}</NavLink>
  }

  return(
    <LinkStyled>
      {link}
    </LinkStyled>
  )
}

export default Link