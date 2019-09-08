import React, { memo } from 'react'
import PaginationItemStyled from './style'

const PaginationItem = ({ children, onClick, active = false }) => {
  const onClickHandler = () => {
    onClick(children)
  }
  return(
    <PaginationItemStyled onClick={onClickHandler} active={active}>
      {children}
    </PaginationItemStyled>
  )
}

export default memo(PaginationItem)