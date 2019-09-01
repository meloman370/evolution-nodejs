import React from 'react'

const Image = ({ name, alt = 'image' }) => {
  return(
    <img src={'/media/images/' + name} alt={alt}/>
  )
}

export default Image