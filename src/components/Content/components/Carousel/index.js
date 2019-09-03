import React, { Component } from 'react'
import CarouselStyled from './styled'
import Slider from 'react-slick'
import Button from './components/Button'

export default class Carousel extends Component {
  clickNext = () => {
    this.slider.slickNext()
  }

  clickPrev = () => {
    this.slider.slickPrev()
  }

  render() {
    const { title, children } = this.props
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true
    }

    return (
      <CarouselStyled>
        <div className="title">{title}</div>
        <Slider ref={el => this.slider = el} {...settings}>
          {children}
        </Slider>
        <Button name="prev_icon.png" onClick={this.clickPrev} align="left"/>
        <Button name="next_icon.png" onClick={this.clickNext} align="right"/>
      </CarouselStyled>
    )
  }
}
