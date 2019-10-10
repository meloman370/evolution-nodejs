import React, {memo} from 'react'
import {MenuStyled} from './style'
import {TabPanelTitle, TabPanelDescription, TabPanelContent} from '../../style'
import MenuTree from './components/MenuTree'

const MenuTabPanel = () => {
  return(
    <MenuStyled>
      <TabPanelTitle>Меню</TabPanelTitle>
      <TabPanelDescription>Редактирование каталога</TabPanelDescription>
      <TabPanelContent>
        <MenuTree/>
      </TabPanelContent>
    </MenuStyled>
  )
}

export default memo(MenuTabPanel)