import React, { Component } from 'react'
import CartIconStyled from './style'
import Icon from '../../../Icon'

export default class CartIcon extends Component {
  render() {
    return (
      <CartIconStyled>
        <Icon name="shop_icon.png" alt="cart" {...this.props}/>
      </CartIconStyled>
    )
  }
}
