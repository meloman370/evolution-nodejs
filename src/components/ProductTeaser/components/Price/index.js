import React, { memo } from 'react'
import PriceStyled from './style'
import Discount from '../Discount'

const Price = ({ discount, currency, children }) => {
  return(
    <PriceStyled>
      {children} {currency}
      {discount &&
        <Discount currency={currency}>{discount}</Discount>
      }
    </PriceStyled>
  )
}

export default memo(Price)