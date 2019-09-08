import React from 'react'
import BreadcrumbItemStyled from './style'
import { NavLink } from 'react-router-dom'

const BreadcrumbItem = ({ to, children, isLast = false }) => {
  let link = ''
  if (to) {
    link = <NavLink to={to}>{children}</NavLink>
  } else [
    link = <div>{children}</div>
  ]

  return(
    <BreadcrumbItemStyled>
      {link}
      {!isLast &&
        <span>/</span>
      }
    </BreadcrumbItemStyled>
  )
}

export default BreadcrumbItem