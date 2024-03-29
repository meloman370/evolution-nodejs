import React, { memo } from 'react'
import MenuImageStyled from './style'
import Image from '../../../../../../../Content/components/Image'

const MenuImage = ({ src, webp, alt }) => {
  return(
    <MenuImageStyled>
      {src &&
        <Image src={src} webp={webp} alt={alt}/>
      }
    </MenuImageStyled>
  )
}

export default memo(MenuImage)