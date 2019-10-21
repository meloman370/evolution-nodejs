import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CategoryPageStyled from '../styles/CategoryPage'
import Left from '../styles/CategoryPage/styles/Left'
import Right from '../styles/CategoryPage/styles/Right'
import Container from '../styles/Container'
import PriceWidget from '../components/Widgets/PriceWidget'
import ProductGrid from '../components/Content/components/ProductGrid'
import Breadcrumbs from '../components/Content/components/Breadcrumbs'
import Pagination from '../components/Content/components/Pagination'
import {fetchCategoryIfNeeded} from '../redux/actions/category'
import {fetchProductList} from '../redux/actions/product_list'
const serverHandler = require('../helpers/server-handler')

class CategoryPage extends Component {
  constructor(props) {
    super(props)
    if (serverHandler.isServer) {
      const {dispatch} = this.props
      const path = serverHandler.path
      serverHandler.handleRequest(dispatch(fetchCategoryIfNeeded(path)))
    }
  }

  state = {
    page: 1,
    max_price: this.props.category.max_price,
    min_price: this.props.category.min_price
  }

  changePrice = (min_price, max_price) => {
    const {dispatch, category} = this.props
    this.setState({
      max_price,
      min_price,
      page: 1
    })
    dispatch(fetchProductList({
      min_price,
      max_price,
      category: category.id,
      page: 1
    }))
  }

  changePage = (page) => {
    const {dispatch} = this.props
    this.setState({
      page
    })
    dispatch(fetchProductList({
      page: page,
      max_price: this.state.max_price,
      min_price: this.state.min_price,
      category: this.props.category.id
    }))
  }
  
  componentDidMount() {
    const {location: {pathname}, dispatch} = this.props
    dispatch(fetchCategoryIfNeeded(pathname))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const {dispatch} = this.props
      dispatch(fetchCategoryIfNeeded(this.props.location.pathname))
    }
  }

  getBreadcrumbs() {
    const { category } = this.props
    const breadcrumbs = []
    if (category && category.name) {
      breadcrumbs.push({name: category.name})
      if (category.sub_menu_item.name) {
        breadcrumbs.push({name: category.sub_menu_item.name})
        if (category.sub_menu_item.menu_item.name) {
          breadcrumbs.push({name: category.sub_menu_item.menu_item.name})
        }
      }
    }
    return breadcrumbs.reverse()
  }
  
  render() {
    const {products, category, categoryIsFetching, productsIsFetching, count} = this.props
    const breadcrumbs = this.getBreadcrumbs()
    return (
      <Container>
        <Breadcrumbs isLoading={categoryIsFetching} items={breadcrumbs}/>
        <CategoryPageStyled>
          <Left>
            <PriceWidget isLoading={categoryIsFetching} min={category.min_price} max={category.max_price} onChange={this.changePrice}/>
          </Left>
          <Right>
            <ProductGrid isLoading={productsIsFetching} products={products}/>
            {products.length > 0 &&
              <Pagination page={this.state.page} count={count} onChange={this.changePage}/>
            }
          </Right>
        </CategoryPageStyled>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    productsIsFetching: state.product_list.isFetching,
    products: state.product_list.products,
    count: state.product_list.count,
    categoryIsFetching: state.category.isFetching,
    category: state.category.info,
  }
}
 
export default connect(mapStateToProps)(CategoryPage)
