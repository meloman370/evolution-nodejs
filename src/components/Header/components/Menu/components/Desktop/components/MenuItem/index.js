import React, { useState, memo, useEffect } from 'react'
import MenuItemStyled from './style'
import MenuPopup from '../../../../../../../../styles/MenuPopup'
import MenuImage from '../MenuImage'
import MenuItemBlock from '../MenuItemBlock'

export const PopupContext = React.createContext()

const MenuItem = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)

  const onMouseEnterHandler = () => {
    setOpen(true)
  }

  const onMouseLeaveHandler = () => {
    setOpen(false)
  }

  const sub_menu_items = data.sub_menu.map((item, i) => (
    <MenuItemBlock data={item} key={i}/>
  ))

  useEffect(() => {
    if (data.sub_menu.length && data.sub_menu[0].category.length) {
      setImage({
        src: data.sub_menu[0].category[0].image,
        webp: data.sub_menu[0].category[0].compressed_image
      })
    }
  }, [])

  return(
    <div 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}>
      <MenuItemStyled active={open}>
        {data.name}
      </MenuItemStyled>
      {open && 
        <MenuPopup>
          <PopupContext.Provider value={{setOpen, setImage}}>
            <div className="blocks">
              {sub_menu_items}
            </div>
          </PopupContext.Provider>
          {image &&
            <MenuImage src={image.src} webp={image.webp} alt={data.name}/>
          }
        </MenuPopup>
      }
    </div>
  )
}

export default memo(MenuItem)