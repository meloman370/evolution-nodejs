import React, { Component } from 'react'
import {lazy, LazyBoundary} from 'react-imported-component'
import { connect } from 'react-redux'

import HomePageBlock from '../styles/HomePageBlock'
import Block from '../components/Content/components/Block'
import {fetchBlockIfNeeded} from '../redux/actions/block'
const serverHandler = require('../helpers/server-handler')


const Carousel = lazy(() => import('../components/Content/components/Block/components/Carousel'))
const Map = lazy(() => import('../components/Content/components/Map'))

class Home extends Component {
	constructor(props) {
		super(props)
		if (serverHandler.isServer) {
			const { dispatch } = this.props
			serverHandler.handleRequest(dispatch(fetchBlockIfNeeded()))
		}
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchBlockIfNeeded())
	}
	
  render() {
		const {blocks} = this.props
    return (
			<>
				{blocks.map(block => (
					<HomePageBlock key={block.id}>
						<Block data={block}/>
					</HomePageBlock>
				))}
				<LazyBoundary fallback="">
					<Map/>
				</LazyBoundary>
			</>
    )
  }
}

function mapStateToProps(state) {
  const { isFetching, items } = state.block
 
  return {
    isFetching,
    blocks: items
  }
}
 
export default connect(mapStateToProps)(Home)

