import React from 'react'
import FooterBlockStyled from './style'
import Title from '../Title'

const FooterBlock = ({ children, title }) => {
  return(
    <FooterBlockStyled>
      <Title>{title}</Title>
      {children}
    </FooterBlockStyled>
  )
}

export default FooterBlock