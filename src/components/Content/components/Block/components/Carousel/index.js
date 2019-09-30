import React, { PureComponent } from 'react'
import CarouselStyled from './styled'
import Slider from 'react-slick'
import Button from './components/Button'
import Container from '../../../../../../styles/Container'
import Row from '../../../../../../styles/Row'
import ProductTeaser from '../../../../../Content/components/ProductTeaser'

export default class Carousel extends PureComponent {
  sliderRef = React.createRef();
  dragging = false

  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: false
  }

  clickNext = () => {
    this.sliderRef.current.slickNext()
  }

  clickPrev = () => {
    this.sliderRef.current.slickPrev()
  }

  render() {
    const { data: { products, title } } = this.props
    return (
      <Container>
        <Row>
          <CarouselStyled>
            <div className="title">{title}</div>
            <Slider ref={this.sliderRef} {...this.settings}>
              {products.map(product => (
                <ProductTeaser data={product} key={product.id} />
              ))}
            </Slider>
            <Button name="prev_icon.png" onClick={this.clickPrev} align="left"/>
            <Button name="next_icon.png" onClick={this.clickNext} align="right"/>
          </CarouselStyled>
        </Row>
      </Container>
    )
  }
}
