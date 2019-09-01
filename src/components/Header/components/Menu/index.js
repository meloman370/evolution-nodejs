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
          <MenuItemBlock title="Игрушки для нее">
            <MenuLink to="/for-her/falos">
              Фалоимитаторы
            </MenuLink>
            <MenuLink to="/for-her/anal-toys">
              Анальные игрушки
            </MenuLink>
            <MenuLink to="/for-her/microphones">
              Массажеры - микрофоны
            </MenuLink>
            <MenuLink to="/for-her/vacum">
              Вакуумные стимуляторы
            </MenuLink>
          </MenuItemBlock>
          <MenuItemBlock title="Игрушки с вибрацией">
            <MenuLink to="/for-her/vibro">
              Вибраторы
            </MenuLink>
            <MenuLink to="/for-her/g-point">
              Стимуляторы для точки G
            </MenuLink>
            <MenuLink to="/for-her/stimulations">
              Клиторальные стимуляторы
            </MenuLink>
            <MenuLink to="/for-her/vibrobullet">
              Вибропули и Виброяйца
            </MenuLink>
          </MenuItemBlock>
          <MenuItemBlock title="Еще">
            <MenuLink to="/for-her/menstrual-cups">
              Менструальные чаши и тампоны
            </MenuLink>
            <MenuLink to="/for-her/vaginal-balls">
              Вагинальные шарики
            </MenuLink>
            <MenuLink to="/for-her/vibropanties">
              Вибротрусики
            </MenuLink>
            <MenuLink to="/for-her/strapon">
              Страпоны
            </MenuLink>
          </MenuItemBlock>
        </MenuItem>
        <MenuItem title="Для него" image="for_her.jpg">
          <MenuItemBlock title="Игрушки для него">
            <MenuLink to="/for-him/anal-toys">
              Анальные игрушки
            </MenuLink>
            <MenuLink to="/for-him/sex-dolls">
              Секс куклы
            </MenuLink>
            <MenuLink to="/for-him/vacuum-pumps">
              Вакуумные помпы
            </MenuLink>
            <MenuLink to="/for-him/prostate-stimulants">
              Стимуляторы простаты
            </MenuLink>
          </MenuItemBlock>
          <MenuItemBlock title="Мастурбаторы">
            <MenuLink to="/for-him/all-masturbators">
              Все мастурбаторы
            </MenuLink>
            <MenuLink to="/for-him/rotik">
              Ротик
            </MenuLink>
            <MenuLink to="/for-him/anus">
              Анус
            </MenuLink>
            <MenuLink to="/for-him/vagina">
              Вагина
            </MenuLink>
          </MenuItemBlock>
          <MenuItemBlock title="Выносливость">
            <MenuLink to="/for-him/cock-rings">
              Эрекционные кольца
            </MenuLink>
            <MenuLink to="/for-him/vibro-rings">
              Вибрирующие кольца
            </MenuLink>
            <MenuLink to="/for-him/penis-extenders">
              Удлиннители пениса
            </MenuLink>
            <MenuLink to="/for-him/creamers">
              Кремы-пролонгаторы
            </MenuLink>
          </MenuItemBlock>
        </MenuItem>
        <MenuItem title="Для пар" image="for_her.jpg">
          
        </MenuItem>
        <MenuItem title="БДСМ и фетиш" image="for_her.jpg"></MenuItem>
        <MenuItem title="Косметика" image="for_her.jpg"></MenuItem>
        <MenuItem title="Ништяки" image="for_her.jpg"></MenuItem>
      </MenuStyled>
    )
  }
}
