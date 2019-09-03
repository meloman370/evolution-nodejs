import React, { memo } from 'react'
import ButtonStyled from './style'
import Icon from '../../../../../Icon'

const Button = ({ align, name, ...props }) => {
  return(
    <ButtonStyled align={align}>
      <Icon name={name} {...props}/>
    </ButtonStyled>
  )
}

export default memo(Button)