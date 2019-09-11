import React, { memo } from 'react'
import TitleStyled from './style'

const Title = ({ children }) => {
  return(
    <TitleStyled>
      {children}
    </TitleStyled>
  )
}

export default memo(Title)