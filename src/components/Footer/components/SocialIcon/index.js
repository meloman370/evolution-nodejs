import React from 'react'
import SocialIconStyled from './style'
import Icon from '../../../Icon'

const SocialIcon = ({ name, alt, to }) => {
  return(
    <SocialIconStyled>
      <Icon name={name} alt={alt}/>
      <a href={to} target="_blank"/>
    </SocialIconStyled>
  )
}

export default SocialIcon