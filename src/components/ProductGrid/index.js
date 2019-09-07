import React from 'react'
import ProductGridStyled from './style'
import ProductTeaser from '../ProductTeaser'

const product = {
  'title': 'Маша',
  'type': 'Анальный вибратор',
  'image': 'product.png',
  'price': '420',
  'currency': 'BYN',
  'discount': '120'
}

const ProductGrid = () => {
  return(
    <ProductGridStyled>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
      <ProductTeaser data={product}/>
    </ProductGridStyled>
  )
}

export default ProductGrid