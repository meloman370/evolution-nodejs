import React, { Component } from 'react'
import SliderStyled from './styled'

export default class Slider extends Component {
  render() {
    const { title } = this.props
    return (
      <SliderStyled>
        <div className="title">{title}</div>
        
      </SliderStyled>
    )
  }
}
