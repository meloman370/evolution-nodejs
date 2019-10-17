import React, {PureComponent} from 'react'
import axios from 'axios'
import {Subject} from 'rxjs'
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import {ProductWidget, Select, Results, Item} from './style'
import {InputField} from '../Modal/style'
import ProductItem from './components/ProductItem'

class ProductListWidget extends PureComponent {
  state = {
    search: '',
    products: []
  }

  constructor(props) {
    super(props)
    this.searchField = new Subject()
    this.searchField.pipe(
      distinctUntilChanged(),
      debounceTime(350),
      switchMap((value) => this.getProductList(value))
    ).subscribe((response) => {
      const products = this.getUniqueList(response, this.props.products)
      this.setState({
        products
      })
    })
  }
  
  componentDidMount() {
    this.getProductList().then((result) => {
      const products = this.getUniqueList(result, this.props.products)
      this.setState({
        products
      })
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products.length !== this.props.products.length) {
      this.getProductList(this.state.search).then(response => {
        const products = this.getUniqueList(response, this.props.products)
        this.setState({
          products
        })
      })
    }
  }

  getUniqueList = (left, right) => {
    const right_ids = []
    const list = []
    right.map(item => {
      right_ids.push(item.id)
    })
    left.map(item => {
      if (!right_ids.includes(item.id)) {
        list.push(item)
      }
    })
    return list
  }
  
  
  getProductList = async (title) => {
    const params = {}
    if (title) {
      params.title = title
    }
    try {
      const response = await axios.get(process.env.API_URL + `/products/`, {params})
      return response.data.results
    } catch(error) {
      console.log(error)
    }
  }

  changeSearch = (e) => {
    this.setState({
      search: e.target.value
    })
    this.searchField.next(e.target.value)
  }

  onClickHandler = (product) => {
    const {onSelect} = this.props
    onSelect(product)
  }

  render() {
    return(
      <ProductWidget>
        <Select>
          <InputField
            id="block_name"
            label="Поиск"
            value={this.state.search}
            onChange={this.changeSearch}
            margin="normal"
            variant="outlined"
          />
          <Results>
            {this.state.products.map(product => (
              <ProductItem key={product.id} data={product} onClick={this.onClickHandler}/>
            ))}
          </Results>
        </Select>
      </ProductWidget>
    )
  }
}

export default ProductListWidget