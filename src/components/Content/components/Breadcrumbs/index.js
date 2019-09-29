import React, { memo } from 'react'
import {BreadcrumbsStyled, BreadcrumbsItemLoading} from './style'
import BreadcrumbItem from './components/BreadcrumbItem'

const Breadcrumbs = ({isLoading, items}) => {
  return(
    <BreadcrumbsStyled>
      {!isLoading && items.length > 0 && (
        <BreadcrumbItems items={items}/>
      )}
      {isLoading &&
        <BreadcrumbsLoading/>
      }
    </BreadcrumbsStyled>
  )
}

const BreadcrumbItems = ({items}) => {
  return(
    <div className="fuck">
      {items.map((item, i) => (
        <BreadcrumbItem key={i} data={item} isLast={i == items.length-1}/>
      ))}
    </div>
  )
}

const BreadcrumbsLoading = () => {
  return(
    <>
      <BreadcrumbsItemLoading/> / <BreadcrumbsItemLoading/>
    </>
  )
}

export default memo(Breadcrumbs)