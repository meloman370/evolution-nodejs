import React, { Component } from 'react'
import ProductTeaserStyled from './style'
import Image from '../Image'
import Type from './components/Type'
import Title from './components/Title'
import Price from './components/Price'


export default class ProductTeaser extends Component {
  render() {
    const { image, title, type, price, currency, discount } = this.props.data
    return (
      <ProductTeaserStyled>
        <Image src={'catalog/' + image} alt={title}/>
        <Type>{type}</Type>
        <Title>{title}</Title>
        <Price currency={currency} discount={discount}>{price}</Price>
      </ProductTeaserStyled>
    )
  }
}
