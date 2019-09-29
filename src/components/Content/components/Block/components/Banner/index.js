import React, {memo} from 'react'
import { BannerStyled, LinkWrapper, TextWrapper } from './style'
import { NavLink } from 'react-router-dom'
import Image from '../../../Image'
import Container from '../../../../../../styles/Container'

const VERTICAL_ALIGN = {
  1: 'flex-start',
  2: 'center',
  3: 'flex-end'
}

const HORISONTAL_ALIGN = {
  1: 'flex-start',
  2: 'center',
  3: 'flex-end'
}

const Banner = ({ data }) => {
  const { 
    image, 
    compressed_image, 
    text_size, 
    align_text_horisontal, 
    align_text_vertical, 
    text, 
    is_full, 
    align_button_horisontal, 
    align_button_vertical, 
    button_text 
  } = data
  
  const content = (
    <BannerStyled>
      <Image src={image} webp={compressed_image}/>
      <TextWrapper
        font_size={text_size}
        horisontal={HORISONTAL_ALIGN[align_text_horisontal]} 
        vertical={VERTICAL_ALIGN[align_text_vertical]}>
          <span>{text}</span>
      </TextWrapper>
      <LinkWrapper 
        is_full={is_full} 
        horisontal={HORISONTAL_ALIGN[align_button_horisontal]} 
        vertical={VERTICAL_ALIGN[align_button_vertical]}>
        <NavLink to={data.link}>{button_text}</NavLink>
      </LinkWrapper>
    </BannerStyled>
  )

  if (!!is_full) {
    return(content)
  } else {
    return(
      <Container>
        {content}
      </Container>
    )
  }
}

export default memo(Banner)
