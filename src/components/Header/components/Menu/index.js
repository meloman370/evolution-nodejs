import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import MenuStyled from './style'
import MenuItem from './components/Desktop/components/MenuItem'
import MenuItemBlock from './components/Desktop/components/MenuItemBlock'
import MenuLink from './components/Desktop/components/MenuLink'
import { fetchMenuIfNeeded } from '../../../../redux/actions/menu'
import Desktop from './components/Desktop'

class Menu extends PureComponent {

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
