import React, { Component } from 'react'
import SearchIcon from './components/SearchIcon'
import SearchStyled from './style'

export default class Search extends Component {
  render() {
    return (
      <SearchStyled>
        <input type="text"/>
        <SearchIcon/>
      </SearchStyled>
    )
  }
}
