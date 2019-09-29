import React, { Component } from 'react'
import Container from '../styles/Container'
import Breadcrumbs from '../components/Content/components/Breadcrumbs'
import Left from '../styles/ProductPage/styles/Left'
import Right from '../styles/ProductPage/styles/Right'
import Slider from '../components/Content/components/Slider'
import ColorWidget from '../components/Widgets/ColorWidget'
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

const images = [
  {src: 'catalog/for-him.png'},
  {src: 'catalog/product.png'},
  {src: 'catalog/product2.png'},
  {src: 'catalog/product.png'},
  {src: 'catalog/product.png'}
]

const product = {
  'title': 'Маша',
  'type': 'Анальный вибратор',
  'image': 'product.png',
  'price': '420',
  'currency': 'BYN',
  'discount': '120',
  'brand': 'test test',
  'features': "Полностью погружаемый для использования в душе или ванне Bluetooth включен - позволяет управлять игрушкой в любой точке мира при подключении к WiFi Изогнутый, разработанный специально для поп.",
  'description': 'Vector by We-Vibe - это переносной массажер простаты с дистанционным управлением. Это новое дополнение к линии We-Vibe, полностью настраиваемое, чтобы соответствовать вашему телу с регулируемой головой и гибким основанием. Небольшая изогнутая форма специально разработана для стимуляции простаты. Есть 2 отдельных двигателя, которые стимулируют не только простату, но и промежность. Эта перезаряжаемая водонепроницаемая игрушка также оснащена Bluetooth и беспроводным пультом дистанционного управления, что означает, что вы можете передать контроль над игрушкой своему партнеру. Загрузите бесплатное приложение We-Connect, и ваш партнер теперь сможет управлять игрушкой из любой точки мира.'
}

const colors = [
  {value: '#ed3742', name: 'Красный'},
  {value: '#000000;', name: 'Черный'},
  {value: '#293A78', name: 'Синий'},
  {value: '#8EC7B2', name: 'Берюзовый'}
]

export default class ProductPage extends Component {
  state = {
    color: colors[0].name
  }

  changeColor =(color) => {
    this.setState({color})
  }

  addToCart = () => {
    console.log('add to card')
  }

  render() {
    return (
      <Container>
        <ProductPageStyled>
          <Left>
            <Slider images={images} />
          </Left>
          <Right>
            <Title>{product.type} {product.title}</Title>
            <Brand>{product.brand}</Brand>
            <Line/>
            <Price>20 BYN <Discount>45 BYN</Discount></Price>
            <DiscountText>Вы экономите 55% (25 BYN)</DiscountText>
            <ColorWidget colors={colors} onChange={this.changeColor} active={this.state.color}/>
            <Button onClick={this.addToCart}>Добавить в корзину</Button>
            <TextBlock>
              <TextTitle>Особенности:</TextTitle>
              <Text>{product.features}</Text>
            </TextBlock>
            <TextBlock>
              <TextTitle>Описание:</TextTitle>
              <Text>{product.description}</Text>
            </TextBlock>
          </Right>
        </ProductPageStyled>
      </Container>
    )
  }
}
