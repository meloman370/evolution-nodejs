import React, { memo } from 'react'
import DiscountStyled from './style'

const Discount = ({ children }) => {
  return(
    <DiscountStyled>
      {children}
    </DiscountStyled>
  )
}

export default memo(Discount)