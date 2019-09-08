import React, { useState, memo } from 'react'
import MenuItemStyled from './style'
import MenuPopup from '../../../../../../styles/MenuPopup'
import MenuImage from '../MenuImage'

export const PopupContext = React.createContext()

const MenuItem = ({ title, image, children }) => {
  const [open, setOpen] = useState(false)

  const onMouseEnterHandler = () => {
    setOpen(true)
  }

  const onMouseLeaveHandler = () => {
    setOpen(false)
  }

  return(
    <div 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}>
      <MenuItemStyled active={open}>
        {title}
      </MenuItemStyled>
      {open && 
        <MenuPopup>
          <PopupContext.Provider value={setOpen}>
            <div className="blocks">{children}</div>
          </PopupContext.Provider>
          <MenuImage name="for-him.png" alt="for him catalog"/>
        </MenuPopup>
      }
    </div>
  )
}

export default memo(MenuItem)