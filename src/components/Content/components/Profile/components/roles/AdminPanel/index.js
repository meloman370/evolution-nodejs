import React, {memo, useState} from 'react'
import Tabs from '../../Tabs'
import TabPanel from '../../TabPanel'
import {Panel, Item} from '../../../style'
import MenuTabPanel from '../../MenuTabPanel'
import ProfileTabPanel from '../../ProfileTabPanel'
import BlockTabPanel from '../../BlocksTabPanel'
import ProductTabPanel from '../../ProductTabPanel'

const AdminPanel = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  return(
    <Panel>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Item label="Меню"/>
        <Item label="Блоки"/>
        <Item label="Товары"/>
        <Item label="Профиль"/>
      </Tabs>
      <TabPanel index={0} value={value}>
        <MenuTabPanel/>
      </TabPanel>
      <TabPanel index={1} value={value}>
        <BlockTabPanel/>
      </TabPanel>
      <TabPanel index={2} value={value}>
        <ProductTabPanel/>
      </TabPanel>
      <TabPanel index={3} value={value}>
        <ProfileTabPanel/>
      </TabPanel>
    </Panel>
  )
}

export default memo(AdminPanel)