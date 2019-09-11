import React, { memo } from 'react'
import { ColorWidgetStyled, Title, ColorWrapper } from './style'
import Color from './components/Color'

const ColorWidget = ({ onChange, colors, active }) => {
  const onClickColor = (color) => {
    onChange(color)
  }

  return(
    <ColorWidgetStyled>
      <Title>Цвет</Title>
      <ColorWrapper>
        {colors.map(({ name, value }, i) => (
          <Color hex={value} onClick={onClickColor} key={i} active={active == name}>{name}</Color>
        ))}
      </ColorWrapper>
    </ColorWidgetStyled>
  )
}

export default memo(ColorWidget)