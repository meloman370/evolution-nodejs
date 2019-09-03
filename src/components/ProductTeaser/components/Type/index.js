import React, { memo } from 'react'
import TypeStyled from './style'

const Type = ({ children }) => {
  return(
    <TypeStyled>
      {children}
    </TypeStyled>
  )
}

export default memo(Type)