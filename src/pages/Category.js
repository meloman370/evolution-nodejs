import React, { Component } from 'react'
import CategoryPageStyled from '../styles/CategoryPage'
import Left from '../styles/CategoryPage/styles/Left'
import Right from '../styles/CategoryPage/styles/Right'
import Container from '../styles/Container'
import PriceWidget from '../components/PriceWidget'
import ProductGrid from '../components/ProductGrid'

export default class CategoryPage extends Component {
  render() {
    const { params } = this.props.match
    console.log(params)
    return (
      <Container>
        <CategoryPageStyled>
          <Left>
            <PriceWidget/>
          </Left>
          <Right>
            <ProductGrid/>
          </Right>
        </CategoryPageStyled>
      </Container>
    )
  }
}
