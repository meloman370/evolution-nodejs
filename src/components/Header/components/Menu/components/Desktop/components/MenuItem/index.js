import React, { useState, memo, useEffect } from 'react'
import MenuItemStyled from './style'
import MenuPopup from '../../../../../../../../styles/MenuPopup'
import MenuImage from '../MenuImage'
import MenuItemBlock from '../MenuItemBlock'

export const PopupContext = React.createContext()

const MenuItem = ({ data: {name, sub_menu} }) => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)

  const onMouseEnterHandler = () => {
    setOpen(true)
  }

  const onMouseLeaveHandler = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (sub_menu.length && sub_menu[0].category.length) {
      setImage({
        src: sub_menu[0].category[0].image,
        webp: sub_menu[0].category[0].compressed_image
      })
    }
  }, [])

  return(
    <div 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}>
      <MenuItemStyled active={open}>
        {name}
      </MenuItemStyled>
      {open && 
        <MenuPopup>
          <PopupContext.Provider value={{setOpen, setImage}}>
            <div className="blocks">
              {sub_menu.map(item => (
                <MenuItemBlock data={item} key={item.id}/>
              ))}
            </div>
          </PopupContext.Provider>
          {image &&
            <MenuImage src={image.src} webp={image.webp} alt={name}/>
          }
        </MenuPopup>
      }
    </div>
  )
}

export default memo(MenuItem)