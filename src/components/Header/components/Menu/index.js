import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import MenuStyled from './style'
import { fetchMenuIfNeeded } from '../../../../redux/actions/menu'
import Desktop from './components/Desktop'
const serverHandler = require('../../../../helpers/server-handler')

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    if (serverHandler.isServer) {
      const { dispatch } = this.props
      serverHandler.handleRequest(dispatch(fetchMenuIfNeeded()))
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMenuIfNeeded())
  }
  
  render() {
    const {isFetching, items} = this.props
    return (
      <MenuStyled>
        {!isFetching && items &&
          <Desktop items={items}/>
        }
      </MenuStyled>
    )
  }
}

function mapStateToProps(state) {
  const { isFetching, items } = state.menu
 
  return {
    isFetching,
    items
  }
}
 
export default connect(mapStateToProps)(Menu)
