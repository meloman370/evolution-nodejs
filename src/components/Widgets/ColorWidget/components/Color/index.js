import React, { memo } from 'react'
import ColorStyled from './style'
import Icon from '../../../../Icon'

const Color = ({ data, onClick, active }) => {
  const onClickHandler = () => {
    onClick(data)
  }

  return(
    <ColorStyled hex={data.value} onClick={onClickHandler}>
      {active &&
        <Icon name="tick.svg"/>
      }
    </ColorStyled>
  )
}

export default memo(Color)