import React from 'react'
import MenuImageStyled from './style'
import Image from '../../../../../Image'

const MenuImage = ({ name, alt }) => {
  return(
    <MenuImageStyled>
      <Image src={'catalog/' + name} alt={alt}/>
    </MenuImageStyled>
  )
}

export default MenuImage