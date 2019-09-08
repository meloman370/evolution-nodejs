import React, { memo } from 'react'
import FooterCartStyled from './style'
import Price from './components/Price'
import Button from './components/Button'

const FooterCart = () => {
  return(
    <FooterCartStyled>
      <Price/>
      <Button to="/">Оформить заказ</Button>
    </FooterCartStyled>
  )
}

export default memo(FooterCart)