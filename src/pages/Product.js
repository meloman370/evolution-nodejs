import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import Container from '../styles/Container'
import Left from '../styles/ProductPage/styles/Left'
import Right from '../styles/ProductPage/styles/Right'
import SliderImages from '../components/Content/components/Slider'
import ColorWidget from '../components/Widgets/ColorWidget'
import {fetchProductIfNeeded} from '../redux/actions/product'
import {collectOptions} from '../helpers/groups-helper'
import { 
  ProductPageStyled, 
  Title, 
  Brand, 
  Line,
  Price,
  Discount,
  DiscountText,
  Button,
  TextBlock,
  TextTitle,
  Text
} from '../styles/ProductPage'

class ProductPage extends PureComponent {
  state = {
    activeColor: null
  }

  changeColor =(color) => {
    this.setState({
      activeColor: color.id
    })
    console.log('color', color)
  }

  addToCart = () => {
    console.log('add to card')
  }
  
  componentDidMount() {
    const {dispatch, match} = this.props
    dispatch(fetchProductIfNeeded(match.params.product_id))
  }

  getPercentage() {
    const {product: {price, discount}} = this.props
    const diff = price - discount
    const percentage = diff * 100 / price
    return Math.round(percentage)
  }
  
  render() {
    const {isFetching, product} = this.props
    const {activeColor} = this.state
    let groups = []
    if (product.options) {
      groups = collectOptions(product.options)
    }
    return (
      <Container>
        <ProductPageStyled>
          {!isFetching && product.id &&
            <>
              <Left>
                <SliderImages images={product.images} activeColor={activeColor}/>
              </Left>
              <Right>
                <Title>{product.title}</Title>
                <Brand>{product.short_description}</Brand>
                <Line/>
                {+product.discount > 0 &&
                  <>
                    <Price>{+product.discount} BYN <Discount>{+product.price} BYN</Discount></Price>
                    <DiscountText>Вы экономите {this.getPercentage()}% ({product.price - product.discount} BYN)</DiscountText>
                  </>
                }
                {+product.discount == 0 &&
                  <Price>{+product.price} BYN</Price>
                }
                {groups.color &&
                  <ColorWidget colors={groups.color} onChange={this.changeColor}/>
                }
                <Button onClick={this.addToCart}>Добавить в корзину</Button>
                <TextBlock>
                  <TextTitle>Описание:</TextTitle>
                  <Text>{product.long_description}</Text>
                </TextBlock>
              </Right>
            </>
          }
        </ProductPageStyled>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.product.isFetching,
    product: state.product.info
  }
}
 
export default connect(mapStateToProps)(ProductPage)
