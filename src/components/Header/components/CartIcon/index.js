import React, { PureComponent } from 'react'
import CartIconStyled from './style'
import Icon from '../../../Icon'

export default class CartIcon extends PureComponent {
  render() {
    return (
      <CartIconStyled>
        <Icon name="shop_icon.png" alt="cart" {...this.props}/>
      </CartIconStyled>
    )
  }
}
