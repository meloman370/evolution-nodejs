import React from 'react'

const Icon = ({ name, alt = 'icon' }) => {
  return(
    <img src={'/media/icons/' + name} alt={alt}/>
  )
}

export default Icon