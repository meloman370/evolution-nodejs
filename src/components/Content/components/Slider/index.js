import React, { useState, memo } from 'react'
import { SliderStyled, Row, ActiveItem, Item } from './style'
import Image from '../Image'

const Slider = ({ images }) => {
  const [active, setActive] = useState(0)

  return(
    <SliderStyled>
      <ActiveItem>
        <Image src={images[active].src} />
      </ActiveItem>
      <Row>
        {images.map((image, i) => (
            <Item onClick={() => setActive(i)} key={i}>
              <Image src={image.src} />
            </Item>
        ))}
      </Row>
    </SliderStyled>
  )
}

export default memo(Slider)