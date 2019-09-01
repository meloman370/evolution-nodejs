import React from 'react'
import MenuImageStyled from './style'
import Image from '../../../../../Image'

const MenuImage = ({ name, alt }) => {
  return(
    <MenuImageStyled>
      <Image name={'catalog/' + name} alt={alt}/>
    </MenuImageStyled>
  )
}

export default MenuImage