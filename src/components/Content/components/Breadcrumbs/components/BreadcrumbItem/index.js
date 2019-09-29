import React from 'react'
import BreadcrumbItemStyled from './style'
import { NavLink } from 'react-router-dom'

const BreadcrumbItem = ({ data, isLast }) => {
  let link = ''
  if (data.to) {
    link = <NavLink to={data.to}>{data.name}</NavLink>
  } else [
    link = <div>{data.name}</div>
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