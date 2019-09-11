import React, { memo } from 'react'
import InfoStyled from './style'

const Info = ({ children }) => {
  return(
    <InfoStyled>
      {children}
    </InfoStyled>
  )
}

export default memo(Info)