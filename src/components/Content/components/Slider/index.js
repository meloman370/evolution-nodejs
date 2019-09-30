import React, { useState, memo, useEffect } from 'react'
import Slider from 'react-slick'
import { SliderStyled, Row, ActiveItem, ItemStyled } from './style'
import Image from '../Image'

const SliderImages = ({ images, activeColor = null }) => {
  const [active, setActive] = useState(0)
  const sliderRef = React.createRef()
  let dragging = false
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    beforeChange: () => dragging = true,
    afterChange: () => dragging = false
  }
  const isColored = checkIsColored(images)
  if (isColored) {
    images = filterByColored(images)
  }

  useEffect(() => {
    if (activeColor) {
      const index = getFirstByColorId(activeColor, images)
      if (index !== null) {
        setActive(index)
        sliderRef.current.slickGoTo(index)
      }
    }
  }, [activeColor])

  const onClickHandler = (index) => {
    if (!dragging) {
      setActive(index)
    }
  }

  return(
    <SliderStyled>
      <ActiveItem>
        <Image src={images[active].origin} webp={images[active].compressed} alt={images[active].alt} />
      </ActiveItem>
      <Row>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, i) => (
            <Item index={i} onClick={onClickHandler} key={image.id}>
              <Image src={image.origin} webp={image.compressed} alt={image.alt} />
            </Item>
          ))}   
        </Slider> 
      </Row>
    </SliderStyled>
  )
}

const Item = ({index, onClick, children}) => {
  const onClickHandler = () => {
    onClick(index)
  }
  return(
    <ItemStyled onClick={onClickHandler}>
      {children}
    </ItemStyled>
  )
}

// check if at least one image has colored option
const checkIsColored = (images) => {
  let isColored = false
  images.map(image => {
    if (image.color) {
      isColored = true
    }
  })
  return isColored
}

// get images with color option
const filterByColored = (images) => {
  const filterable_images = images.filter((image) => {
    return image.color
  })
  const sortable_images = filterable_images.sort((a,b) => {
    if (a.color > b.color) {
      return 1;
    }
    if (a.color < b.color) {
      return -1;
    }
    return 0;
  })
  return sortable_images
}

// get first index by color id
const getFirstByColorId = (color, images) => {
  let index = null
  images.map((image, i) => {
    if (image.color == color && index == null) {
      index = i
    }
  })
  return index
}

export default memo(SliderImages)