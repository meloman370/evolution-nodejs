import React, { memo } from 'react'
import PriceStyled from './style'

const Price = () => {
  return(
    <PriceStyled>
      <div>Всего:</div>
      <div>60 BYN</div>
    </PriceStyled>
  )
}

export default memo(Price)