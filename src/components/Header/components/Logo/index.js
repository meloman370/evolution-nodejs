import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import LogoStyled from './style'

const Logo = () => {
  return(
    <LogoStyled>
      <NavLink to="/">Evolution</NavLink>
    </LogoStyled>
  )
}

export default memo(Logo)
