import React, { memo } from 'react'
import Img from 'react-webp-image'

const Image = ({ src, alt = 'image', webp }) => {
  return(
    <Img src={src} webp={webp} alt={alt}/>
  )
}

export default memo(Image)