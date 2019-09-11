import React, { memo } from 'react'
import ColorStyled from './style'
import Icon from '../../../../Icon'

const Color = ({ children, onClick, hex, active }) => {
  const onClickHandler = () => {
    onClick(children)
  }

  return(
    <ColorStyled hex={hex} onClick={onClickHandler}>
      {active &&
        <Icon name="tick.svg"/>
      }
    </ColorStyled>
  )
}

export default memo(Color)