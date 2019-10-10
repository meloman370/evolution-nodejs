import React, {memo} from 'react'
import {TabsStyled} from './style'

const Tabs = ({children, value, onChange}) => {
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }
  
  return(
    <TabsStyled
      orientation="vertical"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
    >
      {children}
    </TabsStyled>
  )
}

export default memo(Tabs)