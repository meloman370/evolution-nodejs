import React, { memo, useState } from 'react'
import { ColorWidgetStyled, Title, ColorWrapper } from './style'
import Color from './components/Color'

const ColorWidget = ({ onChange, colors }) => {
  const [active, setActive] = useState(0)

  const onClickColor = (color) => {
    setActive(color)
    onChange(color)
  }
  return(
    <ColorWidgetStyled>
      <Title>Цвет</Title>
      <ColorWrapper>
        {colors.map((color) => (
          <Color data={color} onClick={onClickColor} key={color.id} active={active.id == color.id} />
        ))}
      </ColorWrapper>
    </ColorWidgetStyled>
  )
}

export default memo(ColorWidget)