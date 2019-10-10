import React, {memo} from 'react'
import TabPanelStyled from './style'

const TabPanel = ({children, value, index}) => {
  if (value == index) {
    return <TabPanelStyled>{children}</TabPanelStyled>
  } else {
    return ''
  }
}

export default memo(TabPanel)