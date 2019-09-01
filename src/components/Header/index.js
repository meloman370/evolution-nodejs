import React, { Component } from 'react'

import HeaderStyled from './style'
import Container from '../../styles/Container'
import Row from '../../styles/Row'

import Logo from './components/Logo'
import SearchHeader from './components/SearchHeader'
import LoginIcon from './components/LoginIcon'
import CartIcon from './components/CartIcon'
import Menu from './components/Menu'

export default class Header extends Component {
  render() {
    return (
      <HeaderStyled>
				<Container>
					<Row>
						<Logo/>
						<SearchHeader/>
						<LoginIcon/>
						<CartIcon/>
					</Row>
					<Row>
						<Menu/>
					</Row>
				</Container>
      </HeaderStyled>
    )
  }
}
