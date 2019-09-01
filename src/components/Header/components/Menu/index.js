import React, { Component } from 'react'
import MenuStyled from './style'
import MenuItem from './components/MenuItem'
import MenuItemBlock from './components/MenuItemBlock'
import MenuLink from './components/MenuLink'

export default class Menu extends Component {
  render() {
    return (
      <MenuStyled>
        <MenuItem title="Для нее" image="for_her.jpg">
          <MenuItemBlock title="Игрушки для него">
            <MenuLink to="/for-her/falos">
              Фалоимитаторы
            </MenuLink>
            <MenuLink to="/for-her/anal-toys">
              Анальные игрушки
            </MenuLink>
            <MenuLink to="/for-her/microphones">
              Микрофоны
            </MenuLink>
            <MenuLink to="/for-her/falos">
              Фалоимитаторы
            </MenuLink>
          </MenuItemBlock>
          <MenuItemBlock title="Игрушки для него">
            <MenuLink to="/for-her/falos">
              Фалоимитаторы
            </MenuLink>
            <MenuLink to="/for-her/anal-toys">
              Анальные игрушки
            </MenuLink>
            <MenuLink to="/for-her/microphones">
              Микрофоны
            </MenuLink>
            <MenuLink to="/for-her/falos">
              Фалоимитаторы
            </MenuLink>
          </MenuItemBlock>
        </MenuItem>
        <MenuItem title="Для него" image="for_her.jpg"></MenuItem>
        <MenuItem title="Для пар" image="for_her.jpg"></MenuItem>
        <MenuItem title="БДСМ и фетиш" image="for_her.jpg"></MenuItem>
        <MenuItem title="Косметика" image="for_her.jpg"></MenuItem>
        <MenuItem title="Ништяки" image="for_her.jpg"></MenuItem>
      </MenuStyled>
    )
  }
}
