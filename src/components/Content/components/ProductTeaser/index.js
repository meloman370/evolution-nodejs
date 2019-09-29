import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom'
import ProductTeaserStyled from './style'
import Image from '../Image'
import Title from './components/Title'
import Price from './components/Price'


export default class ProductTeaser extends PureComponent {
  render() {
    const { images, title, price, discount, id } = this.props.data
    return (
      <ProductTeaserStyled>
        <NavLink to={'/product/' + id}/>
        {images.length &&
          <Image src={images[0].origin} webp={images[0].compressed} alt={images[0].alt}/>
        }
        <Title>{title}</Title>
        <Price discount={discount} price={price}/>
      </ProductTeaserStyled>
    )
  }
}
