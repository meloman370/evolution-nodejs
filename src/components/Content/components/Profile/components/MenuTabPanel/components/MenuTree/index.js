import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchMenuIfNeeded} from '../../../../../../../../redux/actions/menu'
import {MenuTreeStyled} from './style'
import MenuList from './components/MenuList'
import SubMenuList from './components/SubMenuList'
import CategoryList from './components/CategoryList'

class MenuTree extends PureComponent {
  state = {
    selectedMenuId: false,
    selectedSubMenuId: false,
    selectedCategoryId: false
  }
  
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchMenuIfNeeded())
  }

  selectMenu = (item) => {
    this.setState({
      selectedMenuId: item.id,
      selectedSubMenuId: false,
      selectedCategoryId: false
    })
  }

  selectSubMenu = (item) => {
    this.setState({
      selectedSubMenuId: item.id,
      selectedCategoryId: false
    })
  }

  selectCategory = (item) => {
    this.setState({
      selectedCategoryId: item.id
    })
  }

  getSubMenu = (menu) => {
    const {selectedMenuId} = this.state
    let sub_menu = []
    if (selectedMenuId) {
      menu.map(item => {
        if (item.id == selectedMenuId) {
          sub_menu = item.sub_menu
        }
      })
    }
    return sub_menu
  }

  getCategories = (sub_menu) => {
    const {selectedSubMenuId} = this.state
    let categories = []
    if (selectedSubMenuId) {
      sub_menu.map(item => {
        if (item.id == selectedSubMenuId) {
          categories = item.category
        }
      })
    }
    return categories
  }
  
  render() {
    const {menu} = this.props
    const sub_menu = this.getSubMenu(menu)
    const categories = this.getCategories(sub_menu)
    const {selectedMenuId, selectedSubMenuId} = this.state
    return (
      <MenuTreeStyled>
        <MenuList items={menu} onSelect={this.selectMenu}/>

        {selectedMenuId && 
          <SubMenuList items={sub_menu} onSelect={this.selectSubMenu} parent={selectedMenuId}/>
        }

        {selectedSubMenuId &&
          <CategoryList items={categories} onSelect={this.selectCategory} parent={selectedSubMenuId} />
        }
      </MenuTreeStyled>
    )
  }
}

function mapStateToProps(state) {
  const { items } = state.menu
  
  return {
    menu: items
  }
}
   
export default connect(mapStateToProps)(MenuTree)
