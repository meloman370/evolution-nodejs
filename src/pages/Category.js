import React, { Component } from 'react'
import CategoryPageStyled from '../styles/CategoryPage'
import Left from '../styles/CategoryPage/styles/Left'
import Right from '../styles/CategoryPage/styles/Right'
import Container from '../styles/Container'
import PriceWidget from '../components/PriceWidget'
import ProductGrid from '../components/ProductGrid'
import Breadcrumbs from '../components/Breadcrumbs'
import Pagination from '../components/Pagination'

export default class CategoryPage extends Component {
  state = {
    page: 1
  }

  changePage = (page) => {
    this.setState({
      page
    })
  }

  render() {
    const { params } = this.props.match
    console.log(params)
    console.log('page ' + this.state.page)
    return (
      <Container>
        <Breadcrumbs/>
        <CategoryPageStyled>
          <Left>
            <PriceWidget/>
          </Left>
          <Right>
            <ProductGrid/>
            <Pagination page={this.state.page} count={170} onChange={this.changePage}/>
          </Right>
        </CategoryPageStyled>
      </Container>
    )
  }
}
