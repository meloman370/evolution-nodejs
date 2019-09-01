import React, { useState } from 'react'
import MenuItemStyled from './style'
import MenuPopup from '../../../../../../styles/MenuPopup'
import MenuImage from '../MenuImage'

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
          <div className="blocks">{children}</div>
          <MenuImage name="for-him.png" alt="for him catalog"/>
        </MenuPopup>
      }
    </div>
  )
}

export default MenuItem