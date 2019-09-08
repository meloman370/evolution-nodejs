import React, { memo } from 'react'
import Search from '../../../Search'
import SearchHeaderStyled from './style'

const SearchHeader = () => {
  return(
    <SearchHeaderStyled>
      <Search/>
    </SearchHeaderStyled>
  )
}

export default memo(SearchHeader)