import React, { memo } from 'react'
import PriceStyled from './style'
import Discount from '../Discount'

const Price = ({ discount, price }) => {
  price = +price
  discount = +discount
  return(
    <PriceStyled>
      {!discount &&
        price + ' BYN'
      }
      {!!discount &&
        <>
          {discount} BYN
          <Discount>{price} BYN</Discount>
        </>
      }
    </PriceStyled>
  )
}

export default memo(Price)