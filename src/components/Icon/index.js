import React from 'react'

const Icon = ({ name, alt = 'icon', ...props }) => {
  return(
    <img src={'/media/icons/' + name} alt={alt} {...props}/>
  )
}

export default Icon