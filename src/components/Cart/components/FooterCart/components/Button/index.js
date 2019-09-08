import React, { memo } from 'react'
import ButtonStyled from './style'
import { NavLink } from 'react-router-dom'

const Button = ({ children, to }) => {
  return(
    <ButtonStyled>
      <NavLink to={to}>{children}</NavLink>
    </ButtonStyled>
  )
}

export default memo(Button)