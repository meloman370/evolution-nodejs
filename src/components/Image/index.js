import React, { memo } from 'react'

const Image = ({ src, alt = 'image' }) => {
  return(
    <img src={'/media/images/' + src} alt={alt}/>
  )
}

export default memo(Image)