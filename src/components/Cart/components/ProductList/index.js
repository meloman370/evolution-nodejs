import React from 'react'
import ProductListStyled from './style'
import ProductCart from '../ProductCart'

const product = {
  'title': 'Маша',
  'type': 'Анальный вибратор',
  'image': 'product.png',
  'price': '420',
  'currency': 'BYN',
  'discount': '120'
}

const ProductList = () => {
  return(
    <ProductListStyled>
      <ProductCart data={product}/>
      <ProductCart data={product}/>
      <ProductCart data={product}/>
    </ProductListStyled>
  )
}

export default ProductList