import React, { Component } from 'react'
import PriceWidgetStyled from './style'
import Title from './components/Title'
import Price from './components/Price'
import SliderWidget from './components/SliderWidget'

export default class PriceWidget extends Component {
  state = {
    from: 0,
    to: 100
  }

  changePrice = (from, to) => {
    this.setState({
      from,
      to
    })
  }

  render() {
    return (
      <PriceWidgetStyled>
        <Title>Цена (BYN)</Title>
        <Price from={this.state.from} to={this.state.to} onChange={this.changePrice}/>
        <SliderWidget from={this.state.from} to={this.state.to} onChange={this.changePrice}/>
      </PriceWidgetStyled>
    )
  }
}
