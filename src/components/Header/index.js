import React, { Component } from 'react'
import { lazy, LazyBoundary } from 'react-imported-component'

import HeaderStyled from './style'
import Container from '../../styles/Container'
import Row from '../../styles/Row'

import Logo from './components/Logo'
import SearchHeader from './components/SearchHeader'
import LoginIcon from './components/LoginIcon'
import CartIcon from './components/CartIcon'
import Menu from './components/Menu'

const Cart = lazy(() => import('../Cart'))

export default class Header extends Component {
	state = {
		open: false
	}

	toggleOpenCart = () => {
		this.setState({
			open: !this.state.open
		})
	}

	handleOpenCart = () => {
		this.setState({
			open: true
		})
	}

	handleCloseCart = () => {
		this.setState({
			open: false
		})
	}

  render() {
    return (
      <HeaderStyled>
				<Container>
					<Row>
						<Logo/>
						<SearchHeader/>
						<LoginIcon/>
						<CartIcon onClick={this.toggleOpenCart}/>
					</Row>
					<Row>
						<Menu/>
					</Row>
				</Container>
				<LazyBoundary fallback="">
					<Cart open={this.state.open} onOpen={this.handleOpenCart} onClose={this.handleCloseCart}/>
				</LazyBoundary>
      </HeaderStyled>
    )
  }
}
