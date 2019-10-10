import React, {memo, useState} from 'react'
import Tabs from '../Tabs'
import TabPanel from '../TabPanel'
import {Panel, Item} from '../../style'
import MenuTabPanel from '../MenuTabPanel'

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
        <Item label="Меню" />
        <Item label="Настройки" />
      </Tabs>
      <TabPanel index={0} value={value}>
        <MenuTabPanel />
      </TabPanel>
      <TabPanel index={1} value={value}>
        item two selected
      </TabPanel>
    </Panel>
  )
}

export default memo(AdminPanel)