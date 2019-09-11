import React, { memo } from 'react'
import MenuImageStyled from './style'
import Image from '../../../../../Content/components/Image'

const MenuImage = ({ name, alt }) => {
  return(
    <MenuImageStyled>
      <Image src={'catalog/' + name} alt={alt}/>
    </MenuImageStyled>
  )
}

export default memo(MenuImage)