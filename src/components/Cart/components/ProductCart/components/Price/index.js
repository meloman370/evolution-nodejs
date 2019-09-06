import React, { memo } from 'react'
import PriceStyled from './style'

const Price = ({ children }) => {
  return(
    <PriceStyled>
      {children}
    </PriceStyled>
  )
}

export default memo(Price)