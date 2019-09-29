import React, { memo } from 'react'
import {ProductGridStyled, ProductLoadingTitle, ProductLoadingPrice, ProductLoadingImage} from './style'
import ProductTeaser from '../ProductTeaser'

const ProductGrid = ({products, isLoading}) => {
  return(
    <ProductGridStyled>
      {(isLoading && !products.length) &&
        [...Array(24).keys()].map((item) => (
          <div key={item}>
            <ProductLoadingImage/>
            <ProductLoadingTitle/>
            <ProductLoadingPrice/>
          </div>
        ))
      }
      {products.length > 0 &&
        products.map(product => (
          <ProductTeaser data={product} key={product.id}/>
        ))
      }
    </ProductGridStyled>
  )
}

export default memo(ProductGrid)