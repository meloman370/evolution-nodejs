import React, { memo } from 'react'
import BreadcrumbsStyled from './style'
import BreadcrumbItem from './components/BreadcrumbItem'

const Breadcrumbs = () => {
  return(
    <BreadcrumbsStyled>
      <BreadcrumbItem>Для него</BreadcrumbItem>
      <BreadcrumbItem to="/for-him/anal" isLast={true}>Анальные игрушки</BreadcrumbItem>
    </BreadcrumbsStyled>
  )
}

export default memo(Breadcrumbs)