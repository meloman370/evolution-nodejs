import React, { memo } from 'react'
import DiscountStyled from './style'

const Discount = ({ currency, children }) => {
  return(
    <DiscountStyled>
      {children} {currency}
    </DiscountStyled>
  )
}

export default memo(Discount)