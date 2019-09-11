import React, { PureComponent } from 'react'
import ProductCartStyled from './style'
import Image from '../../../../../Content/components/Image'
import Title from './components/Title'
import Type from './components/Type'
import Price from './components/Price'
import Info from './components/Info'
import Counter from './components/Counter'
import Icon from '../../../../../Icon'

export default class ProductCart extends PureComponent {
  state = {
    count: 1
  }

  setCountValue = (count) => {
    this.setState({count})
  }

  render() {
    const { image, title, type, currency, discount } = this.props.data
    return (
      <ProductCartStyled>
        <Image src={'catalog/' + image} alt="product cart"/>
        <Info>
          <div>
            <Type>{type}</Type>
            <Title>{title}</Title>
            <Price>{discount} {currency} \ {this.state.count} шт.</Price>
          </div>
          <div>
            <Counter value={this.state.count} onChange={this.setCountValue} />
            <Price>{discount * this.state.count} {currency}</Price>
          </div>
        </Info>
        <Icon className="close" name="close.png" alt="remove from cart"/>
      </ProductCartStyled>
    )
  }
}
